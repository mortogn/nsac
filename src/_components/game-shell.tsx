import { Player, type Story } from "narraleaf-react";
import React, { useState } from "react";
import GameTitle from "./game-title";
import GameMenu from "./game-menu";
import NameSelect from "./name-select";
import { createStory } from "../scenes/story";

export type Screen = "title" | "game" | "menu" | "name-select";

const GameShell: React.FC = () => {
  const [screen, setScreen] = useState<Screen>("title");
  const [story, setStory] = useState<Story | null>(null);

  const onNameSubmit = (name: string) => {
    setStory(createStory(name));
    setScreen("game");
  };

  return (
    <main className="min-h-dvh w-full flex items-center justify-center overflow-hidden bg-black">
      <div className="h-dvh max-w-full relative aspect-9/16">
        {screen === "game" && story && (
          <div className="absolute inset-0 h-dvh w-full z-10">
            <Player
              story={story}
              height="100%"
              width="100%"
              onReady={({ liveGame }) => {
                liveGame.newGame();
              }}
              // onEnd={() => setScreen("title")}
            />
          </div>
        )}

        {screen === "title" && <GameTitle onStart={() => setScreen("menu")} />}

        {screen === "menu" && <GameMenu setScreen={setScreen} />}

        {screen === "name-select" && <NameSelect onNameSubmit={onNameSubmit} />}
      </div>
    </main>
  );
};

export default GameShell;
