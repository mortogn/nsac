import { Control, Dissolve, Narrator, Scene } from "narraleaf-react";
import { getAssetURL } from "../utils/get-asset-url";
import createSchoolScene from "./002";

const images = [
  getAssetURL("/scenes/001/001.webp"),
  getAssetURL("/scenes/001/002.webp"),
  getAssetURL("/scenes/001/003.webp"),
  getAssetURL("/scenes/001/004.webp"),
  getAssetURL("/scenes/001/005.webp"),
  getAssetURL("/scenes/001/006.webp"),
  getAssetURL("/scenes/001/007.webp"),
  getAssetURL("/scenes/001/008.webp"),
];

const marsImages = [
  getAssetURL("/scenes/001/mars_001.webp"),
  getAssetURL("/scenes/001/mars_002.webp"),
  getAssetURL("/scenes/001/mars_003.webp"),
  getAssetURL("/scenes/001/mars_004.webp"),
  getAssetURL("/scenes/001/mars_005.webp"),
  getAssetURL("/scenes/001/mars_006.webp"),
];

const createOpeningScene = (playerName: string) => {
  const scene = new Scene("opening");

  const schoolScene = createSchoolScene(playerName);

  scene.action([
    scene.setBackground(images[0]),
    Narrator.say("A young person was watching a video late at night."),

    scene.setBackground(images[2], new Dissolve({ duration: 300 })),
    Narrator.say("Their usual night took an exciting turn."),

    scene.setBackground(images[1]),
    Narrator.say("“A tale of two rovers” was the title.."),

    scene.setBackground(marsImages[0]),
    Narrator.say(
      "Mars, Earth & Space were known concepts to them, yet they couldn’t think of anything interesting about them.",
    ),
    scene.setBackground(marsImages[1]),
    Narrator.say("It was about to change that night."),

    scene.setBackground(images[2]),
    Narrator.say(
      "With a lot of focus, their eyes were glued to the TV screen.",
    ),

    scene.setBackground(marsImages[2]),
    Narrator.say(
      "Humans putting equipment millions of miles away from their planet fascinates them.",
    ),

    scene.setBackground(marsImages[3]),
    Narrator.say("A rover sent from earth bouncing on Mars surface."),

    scene.setBackground(images[4]),
    Narrator.say("Their eyes sparkle with excitement."),

    scene.setBackground(marsImages[4]),
    Narrator.say("Even without any deep knowledge about space or rovers."),

    scene.setBackground(marsImages[5]),
    Narrator.say(
      "Human curiosity to look beyond their planets, puts a fire in their heart.",
    ),

    scene.setBackground(images[5]),
    Control.waitForClick(),
    scene.setBackground(images[6], new Dissolve({ duration: 300 })),
    Control.waitForClick(),
    scene.setBackground(images[7], new Dissolve({ duration: 300 })),

    scene.jumpTo(schoolScene),
  ]);

  return scene;
};

export default createOpeningScene;
