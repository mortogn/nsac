import { useEffect } from "react";
import { useLiveGame } from "narraleaf-react";
import { subscribeToSceneAutosave } from "../utils/game-save";

const GameAutosave = ({ playerName }: { playerName: string }) => {
  const liveGame = useLiveGame();

  useEffect(
    () => subscribeToSceneAutosave(liveGame, playerName),
    [liveGame, playerName],
  );

  return null;
};

export default GameAutosave;
