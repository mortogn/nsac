import React, { useState } from "react";
import Button from "../components/button";

type NameSelectProps = {
  onNameSubmit: (name: string) => void;
};

const NameSelect: React.FC<NameSelectProps> = ({ onNameSubmit }) => {
  const [name, setName] = useState("");

  const nameSubmitHandler = () => {
    onNameSubmit(name);
  };

  return (
    <div className="flex items-center justify-center h-dvh bg-gray-400 absolute inset-0 z-50">
      <div className="bg-red-50 px-5 py-7 w-full mx-10 rounded-md shadow-[-2px_8px_0_0_#CF6454,2px_8px_0_0_#CF6454] space-y-3">
        <h2 className="text-center font-bold text-2xl uppercase">
          Enter your name
        </h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-2 bg-white border-red-400 px-3 py-1.5 w-full outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-md focus-visible:ring-red-400"
        />
        <Button onClick={nameSubmitHandler}>Start</Button>
      </div>
    </div>
  );
};

export default NameSelect;
