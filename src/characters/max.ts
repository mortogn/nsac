import { Character, Image } from "narraleaf-react";
import { getAssetURL } from "../utils/get-asset-url";

export const max = new Character("Max");

export const maxImage = new Image({
  src: {
    groups: [
      ["disappointed", "laughing", "listening", "proud", "talking", "thinking"],
      [
        "chin-chest",
        "waist-forehead",
        "phone",
        "clapping",
        "arms-crossed",
        "index-up",
        "up",
        "chin",
      ],
    ],
    defaults: ["talking", "index-up"],
    resolve: (emotion: string, arm: string) =>
      getAssetURL(
        `/characters/max/${emotion}_${arm === "jogging-hand" ? "jogging" : arm}.webp`,
      ),
  } as const,
  position: {
    xalign: 0.8,
    yalign: 0.4,
  },
  scaleX: -1,
});
