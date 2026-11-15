import { Character, Image } from "narraleaf-react";
import { getAssetURL } from "../utils/get-asset-url";

export const getMcCharacter = (playerName: string) => new Character(playerName);

export const mcImage = new Image({
  src: {
    groups: [
      ["standing", "jogging"],
      [
        "amazed",
        "nervous-laugh",
        "satisfied",
        "tired",
        "attentive",
        "bored",
        "confused",
        "embarrased",
        "excited",
        "exhausted",
        "happy",
        "listening",
        "neutral",
        "proud",
        "smile",
        "talking",
        "thinking",
        "upset",
        "grin",
      ],
      [
        "jogging-hand",
        "arms-crossed",
        "neutral-hand",
        "hand-up",
        "palm-on-face",
        "behind-head",
        "hands-clasped",
        "knee",
        "fist",
        "fist-up",
        "waist",
        "behind-back",
        "chest-waist",
        "finger-up",
        "phone",
        "chin",
      ],
    ],
    defaults: ["standing", "neutral", "neutral-hand"],
    resolve: (action: string, emotion: string, arm: string) =>
      getAssetURL(
        `/characters/mc/female/${action}/${emotion}_${arm === "jogging-hand" ? "jogging" : arm === "neutral-hand" ? "neutral" : arm}.webp`,
      ),
  } as const,
  position: {
    xalign: 0.2,
    yalign: 0.3,
  },
  scaleX: 0.9,
  scaleY: 0.9,
});
