import React from "react";
import { Game, GameProviders } from "narraleaf-react";
import GameShell from "./_components/game-shell";
import GameDialog from "./components/game-dialog";
import CustomMenu from "./components/custom-menu";

const game = new Game({
  aspectRatio: 9 / 16,
  useAspectScale: false,
  height: 1920,
  width: 1080,
  minHeight: 0,
  minWidth: 0,
  dialog: GameDialog,
  menu: CustomMenu,
});

const App: React.FC = () => {
  return (
    <GameProviders game={game}>
      <GameShell />
    </GameProviders>
  );
};

export default App;
