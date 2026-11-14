import { Sound } from "narraleaf-react";
import { getAssetURL } from "../utils/get-asset-url";

export const sfx = {
  doorBell: Sound.sound({
    src: getAssetURL("/sounds/sfx/door_bell.mp3"),
    volume: 0.3,
  }),
  doorOpen: Sound.sound({
    src: getAssetURL("/sounds/sfx/door_open.mp3"),
    volume: 0.2,
  }),
};
