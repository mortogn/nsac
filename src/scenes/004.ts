import { Scene } from "narraleaf-react";
import { getMcCharacter } from "../characters/mc";
import { getAssetURL } from "../utils/get-asset-url";

const backgroundImages = {
  "001": getAssetURL("/scenes/004/bg_001.webp"),
  "002": getAssetURL("/scenes/004/bg_002.webp"),
  "003": getAssetURL("/scenes/004/bg_003.webp"),
};

const images = [
  "/scenes/004/001.webp",
  "/scenes/004/002.webp",
  "/scenes/004/003.webp",
  "/scenes/004/004.webp",
];

const createSteveScene = (playerName: string) => {
  const scene = new Scene("steve_scene");

  const mc = getMcCharacter(String(playerName));

  scene.action([]);
};

export default createSteveScene;
