import React from "react";
import Button from "../components/button";
import { type Screen } from "./game-shell";
import { getAssetURL } from "../utils/get-asset-url";

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
];

type GameMenuProps = {
  setScreen: React.Dispatch<React.SetStateAction<Screen>>;
};

const GameMenu: React.FC<GameMenuProps> = ({ setScreen }) => {
  return (
    <div className="absolute inset-0 z-50 isolate flex h-dvh w-full flex-col overflow-y-auto bg-[#302925] text-[#fffaf3]">
      <img
        src={getAssetURL("/banner.png")}
        alt=""
        className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-[#302925]/35 to-[#302925]/85" />

      <div className="my-auto w-full px-10 py-[max(2.5rem,env(safe-area-inset-top),env(safe-area-inset-bottom))]">
        <h2 className="mb-9 text-center text-4xl font-semibold tracking-[-0.03em] drop-shadow-md">
          NSAC{" "}
          <span className="mt-2 block text-xl font-normal tracking-wide">
            Visual Novel
          </span>
        </h2>
        <nav aria-label="Main menu" className="space-y-3.5">
          {MENU.map((item) => (
            <Button
              onClick={() => changeScreenTo(setScreen, item.screen)}
              key={item.label}
            >
              {item.label}
            </Button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default GameMenu;
