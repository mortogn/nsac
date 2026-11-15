import React from "react";
import Button from "../components/button";
import { getAssetURL } from "../utils/get-asset-url";

type GameTitleProps = {
  onStart?: () => void;
};

const GameTitle: React.FC<GameTitleProps> = ({ onStart }) => {
  return (
    <div className="absolute inset-0 z-50 isolate flex h-dvh w-full flex-col overflow-y-auto bg-[#302925] text-[#fffaf3]">
      <img src={getAssetURL("/banner.png")} alt="" className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-black/10 via-[#302925]/15 to-[#302925]/90" />

      <div className="mt-auto px-10 pb-[max(4rem,env(safe-area-inset-bottom))] pt-16 text-center">
        <h1 className="text-6xl font-semibold leading-none tracking-[-0.04em] drop-shadow-md">
          NSAC
          <span className="mt-3 block text-2xl font-normal tracking-wide">Visual Novel</span>
        </h1>
        <div className="mt-10">
          <Button onClick={onStart}>Start</Button>
        </div>
      </div>
    </div>
  );
};

export default GameTitle;
