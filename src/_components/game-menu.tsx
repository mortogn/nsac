import React from "react";
import Button from "../components/button";
import { type Screen } from "./game-shell";

const changeScreenTo = (
  setScreen: React.Dispatch<React.SetStateAction<Screen>>,
  screen: Screen,
) => {
  setScreen(screen);
};

const MENU: Array<{ label: string; screen: Screen }> = [
  {
    label: "New Game",
    screen: "name-select",
  },
  {
    label: "Load Game",
    screen: "game",
  },
  {
    label: "Gallery",
    screen: "game",
  },
  {
    label: "Settings",
    screen: "game",
  },
  {
    label: "Exit",
    screen: "title",
  },
];

type GameMenuProps = {
  setScreen: React.Dispatch<React.SetStateAction<Screen>>;
};

const GameMenu: React.FC<GameMenuProps> = ({ setScreen }) => {
  return (
    <div className="bg-green-600 flex items-center justify-center absolute inset-0 h-dvh w-full z-50">
      <div className="space-y-3 w-full px-10">
        {MENU.map((item) => (
          <Button
            onClick={() => changeScreenTo(setScreen, item.screen)}
            key={item.label}
          >
            {item.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default GameMenu;
