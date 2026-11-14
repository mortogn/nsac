import { Character, Image } from "narraleaf-react";
import { getAssetURL } from "../utils/get-asset-url";

export const steve = new Character("Steve");

export const steveImage = new Image({
  src: {
    groups: [
      ["standing", "jogging"],
      [
        "cheerful",
        "head-down",
        "laugh",
        "smile-talk",
        "smile",
        "smile-sweat",
        "talking",
        "thinking",
        "happy",
        "proud",
      ],
      [
        "clapping",
        "arms-crossed",
        "waist",
        "index-up",
        "pocket",
        "chin",
        "jogging-hand",
        "fist-up",
      ],
    ],
    defaults: ["standing", "talking", "index-up"],
    resolve: (action: string, emotion: string, arm: string) =>
      getAssetURL(
        `/characters/steve/${action}/${emotion}_${arm === "jogging-hand" ? "jogging" : arm}.webp`,
      ),
  } as const,
  position: {
    xalign: 0.8,
    yalign: 0.4,
  },
  scaleX: -1,
});
