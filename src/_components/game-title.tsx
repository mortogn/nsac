import React from "react";
import Button from "../components/button";

type GameTitleProps = {
  onStart?: () => void;
};

const GameTitle: React.FC<GameTitleProps> = ({ onStart }) => {
  return (
    <div className="h-dvh absolute inset-0 z-50 w-full bg-gray-400">
      <h1 className="text-center mt-20 font-bold text-3xl">
        NSAC Visual Novel
      </h1>

      <div className="mt-10 px-10">
        <Button onClick={onStart}>Start</Button>
      </div>
    </div>
  );
};

export default GameTitle;
