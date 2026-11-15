import React, { useState } from "react";
import Button from "../components/button";
import { getAssetURL } from "../utils/get-asset-url";

type NameSelectProps = {
  onNameSubmit: (name: string) => void;
};

const NameSelect: React.FC<NameSelectProps> = ({ onNameSubmit }) => {
  const [name, setName] = useState("");

  const nameSubmitHandler = () => {
    onNameSubmit(name);
  };

  return (
    <div className="absolute inset-0 z-50 isolate flex h-dvh w-full flex-col overflow-y-auto bg-[#302925] text-[#493832]">
      <img src={getAssetURL("/banner.png")} alt="" className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#302925]/50" />

      <div className="my-auto w-full px-8 py-[max(2rem,env(safe-area-inset-top),env(safe-area-inset-bottom))]">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            nameSubmitHandler();
          }}
          className="rounded-lg border border-[#e5cec3] bg-[#fff5ec] px-6 py-8 shadow-[0_5px_0_0_#CF6454]"
        >
          <h2 className="text-center text-3xl font-semibold tracking-[-0.025em]">Enter your name</h2>

          <label htmlFor="player-name" className="sr-only">Your name</label>
          <input
            id="player-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            autoComplete="given-name"
            enterKeyHint="go"
            className="mb-5 mt-6 min-h-12 w-full rounded-md border border-[#dcb8ab] bg-white px-4 py-3 text-lg text-[#493832] outline-none placeholder:text-[#968079] focus-visible:border-[#CF6454] focus-visible:ring-2 focus-visible:ring-[#CF6454]/20"
          />
          <Button type="submit">Start</Button>
        </form>
      </div>
    </div>
  );
};

export default NameSelect;
