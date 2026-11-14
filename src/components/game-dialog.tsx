import { Dialog, Nametag, Texts } from "narraleaf-react";
import React from "react";

const GameDialog: React.FC = () => {
  return (
    <Dialog className="bg-white absolute bottom-0 right-0 left-0 py-6 px-5">
      <Nametag className="font-semibold tracking-wide" />
      <Texts className="tracking-wide text-sm" />
    </Dialog>
  );
};

export default GameDialog;
