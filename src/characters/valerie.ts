import { Character, Image } from "narraleaf-react";
import { getAssetURL } from "../utils/get-asset-url";

export const valerie = new Character("Valerie");

export const valerieImage = new Image({
  src: {
    groups: [
      [
        "curious",
        "disappointed",
        "grin",
        "happy",
        "neutral",
        "proud",
        "sad",
        "smile",
        "talking",
        "thinking",
      ],
      [
        "finger-up",
        "cheek",
        "behind-back",
        "clapsed",
        "fisted",
        "arms-crossed",
        "neutral-hand",
        "clap",
        "waist",
        "palm-on-cheek",
        "hello",
        "chin",
      ],
    ],
    defaults: ["neutral", "neutral-hand"],
    resolve: (emotion: string, arm: string) =>
      getAssetURL(
        `/characters/valerie/${emotion}_${arm === "neutral-hand" ? "neutral" : arm}.webp`,
      ),
  } as const,
  position: {
    xalign: 0.8,
    yalign: 0.4,
  },
});
