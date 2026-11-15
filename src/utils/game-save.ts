import type { LiveGame, SavedGame } from "narraleaf-react";

export const GAME_SAVE_KEY = "nsac:autosave";

export type GameSave = {
  version: 1;
  playerName: string;
  savedGame: SavedGame;
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  value !== null && typeof value === "object" && !Array.isArray(value);

export const readGameSave = (): GameSave | null => {
  try {
    const raw = localStorage.getItem(GAME_SAVE_KEY);
    if (!raw) return null;

    const value: unknown = JSON.parse(raw);
    if (!isRecord(value) || value.version !== 1 || typeof value.playerName !== "string") {
      return null;
    }

    const save = value.savedGame;
    if (
      !isRecord(save) ||
      typeof save.name !== "string" ||
      !isRecord(save.meta) ||
      typeof save.meta.updated !== "number" ||
      typeof save.meta.storyHash !== "string" ||
      !isRecord(save.game) ||
      !isRecord(save.game.store) ||
      !isRecord(save.game.stage) ||
      !Array.isArray(save.game.stage.scenes) ||
      !Array.isArray(save.game.elementStates) ||
      !isRecord(save.game.services) ||
      !isRecord(save.game.stackModel) ||
      !Array.isArray(save.game.stackModel.items) ||
      !Array.isArray(save.game.asyncStackModels)
    ) {
      return null;
    }

    return value as GameSave;
  } catch {
    return null;
  }
};

export const saveGame = (liveGame: LiveGame, playerName: string): boolean => {
  try {
    const save: GameSave = {
      version: 1,
      // Scenes interpolate the name when constructed, so it must survive a reload too.
      playerName,
      savedGame: liveGame.serialize(),
    };
    localStorage.setItem(GAME_SAVE_KEY, JSON.stringify(save));
    return true;
  } catch (error) {
    // A blocked or full storage should not interrupt the story or replace the last save.
    console.warn("Could not autosave the game.", error);
    return false;
  }
};

export const subscribeToSceneAutosave = (liveGame: LiveGame, playerName: string) => {
  let active = true;
  let queued = false;
  const token = liveGame.onCurrentActionChange(({ actionType }) => {
    if (actionType !== "scene:exit" || queued) return;

    queued = true;
    // The event fires before execution. Let the scene exit and jump finish first,
    // so loading continues into the next scene instead of replaying the old one.
    queueMicrotask(() => {
      queued = false;
      if (active && liveGame.getGameState()) saveGame(liveGame, playerName);
    });
  });

  return () => {
    active = false;
    token.cancel();
  };
};
