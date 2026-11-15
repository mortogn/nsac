import { Character, Image } from "narraleaf-react";
import { getAssetURL } from "../utils/get-asset-url";

export const alice = new Character("Alice");

export const aliceImage = new Image({
  src: {
    groups: [
      ["standing", "jogging"],
      [
        "confident",
        "confused",
        "defeated",
        "embarrassed",
        "excited",
        "exhausted",
        "grin",
        "happy",
        "neutral",
        "proud",
        "sad",
        "talking",
        "thinking",
        "amazed",
        "nervous-laugh",
        "satisfied",
        "tired",
      ],
      [
        "waist",
        "shrug",
        "palm-on-face",
        "behind-head",
        "hands-clasped",
        "behind-back",
        "pocket",
        "arms-crossed",
        "fist-up",
        "neutral-hand",
        "finger-up",
        "chin",
        "jogging-hand",
        "forehead-waist",
      ],
    ],

    defaults: ["standing", "neutral", "pocket"],
    resolve: (action: string, emotion: string, arm: string) =>
      getAssetURL(
        `/characters/alice/${action}/${emotion}_${arm === "jogging-hand" ? "jogging" : arm === "neutral-hand" ? "neutral" : arm}.webp`,
      ),
  } as const,
  position: {
    xalign: 0.2,
    yalign: 0.3,
  },
  scaleX: -1,
  scaleY: 1,
});
