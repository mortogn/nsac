import { Player, type SavedGame, type Story } from "narraleaf-react";
import React, { useState } from "react";
import GameTitle from "./game-title";
import GameMenu from "./game-menu";
import NameSelect from "./name-select";
import { createStory } from "../scenes/story";
import GameAutosave from "./game-autosave";
import { readGameSave, saveGame } from "../utils/game-save";
import GameGallery from "./game-gallery";
import { syncGallery } from "../gallery/gallery";

export type Screen = "title" | "game" | "menu" | "name-select" | "gallery";

type GameSession = {
  story: Story;
  playerName: string;
  savedGame: SavedGame | null;
};

const GameShell: React.FC = () => {
  const [screen, setScreen] = useState<Screen>("title");
  const [session, setSession] = useState<GameSession | null>(null);

  const onNameSubmit = (name: string) => {
    setSession({ story: createStory(name), playerName: name, savedGame: null });
    setScreen("game");
  };

  const onLoadGame = () => {
    const save = readGameSave();
    if (!save) {
      setSession(null);
      setScreen("name-select");
      return;
    }

    setSession({
      story: createStory(save.playerName),
      playerName: save.playerName,
      savedGame: save.savedGame,
    });
    setScreen("game");
  };

  return (
    <main className="min-h-dvh w-full flex items-center justify-center overflow-hidden bg-black">
      <div className="h-dvh max-w-full relative aspect-9/16">
        {screen === "game" && session && (
          <div className="absolute inset-0 h-dvh w-full z-10">
            <Player
              story={session.story}
              height="100%"
              width="100%"
              onReady={({ liveGame }) => {
                if (!session.savedGame) {
                  liveGame.newGame();
                  syncGallery(liveGame);
                  return;
                }

                try {
                  if (session.savedGame.meta.storyHash !== liveGame.story?.hash()) {
                    throw new Error("The save belongs to a different story version.");
                  }
                  liveGame.deserialize(session.savedGame);
                  syncGallery(liveGame);
                } catch (error) {
                  console.warn("Could not load the game; starting a new game.", error);
                  setSession(null);
                  setScreen("name-select");
                }
              }}
              onEnd={({ liveGame }) => {
                saveGame(liveGame, session.playerName);
              }}
            >
              <GameAutosave playerName={session.playerName} />
            </Player>
          </div>
        )}

        {screen === "title" && <GameTitle onStart={() => setScreen("menu")} />}

        {screen === "menu" && <GameMenu setScreen={setScreen} onLoadGame={onLoadGame} />}

        {screen === "gallery" && <GameGallery onBack={() => setScreen("menu")} />}

        {screen === "name-select" && <NameSelect onNameSubmit={onNameSubmit} />}
      </div>
    </main>
  );
};

export default GameShell;
