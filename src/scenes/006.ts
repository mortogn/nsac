import { Narrator, Scene } from "narraleaf-react";
import { getMcCharacter, mcImage } from "../characters/mc";
import { alice, aliceImage } from "../characters/alice";
import { max, maxImage } from "../characters/max";
import { getAssetURL } from "../utils/get-asset-url";

const backgroudImages = [
  getAssetURL("/scenes/006/bg_001.webp"),
  getAssetURL("/scenes/006/bg_002.webp"),
];

const images = [
  getAssetURL("/scenes/006/001.webp"),
  getAssetURL("/scenes/006/002.webp"),
  getAssetURL("/scenes/006/003.webp"),
];

const createMaxMuseumScene = (playerName: string) => {
  const scene = new Scene("max_museum");

  const mc = getMcCharacter(playerName);

  scene.action([
    scene.setBackground(images[0]),
    Narrator.say(
      `Alice and ${playerName} entered a space museum looking for max`,
    ),

    scene.setBackground(backgroudImages[0]),
    aliceImage.pos({ xalign: 0.8 }).scaleX(1),

    mcImage.char(["happy", "neutral"]).show(),
    aliceImage.char(["thinking", "chin"]).show(),
    mc.say("Alice, I think that might be Mr.Max."),

    mcImage.hide(),
    aliceImage.hide(),
    Narrator.say("A man was looking at a rocket model that looked like Max"),

    scene.setBackground(backgroudImages[0]),

    mcImage.show(),
    aliceImage.char(["talking", "finger-up"]).show(),
    alice.say("Let's go talk to him."),

    mcImage.hide(),
    aliceImage.hide(),

    scene.setBackground(images[1]),
    Narrator.say(`${playerName} and Alice went up to the man`),

    scene.setBackground(images[2]),
    mc.say("Hello, sir, Are you Mr.Max?"),

    aliceImage.pos({ xalign: 0.2 }).scaleX(-1),
    scene.setBackground(backgroudImages[1]),
    mcImage.show(),

    maxImage.show(),
    max.say("Yes, you called yesterday right?"),

    mcImage.char(["smile", "behind-back"]),
    mc.say("Yes,sir."),

    maxImage.char(["talking", "arms-crossed"]),
    max.say("Ah, alright. What do you want to know?"),

    mcImage.hide(),
    aliceImage.char(["confused", "shrug"]).show(),
    alice.say(
      "We want to know how these rovers landed on mars, isn’t it really difficult?",
    ),

    maxImage.char(["talking", "index-up"]),
    max.say("Yes, we even call it “Seven minutes of terror”."),

    aliceImage.hide(),
    mcImage.show(),
    mc.say("It must be really difficult then."),
    max.say(
      "Yes. To land a rover successfully, specially for Spirit and opportunity we used Airbag cushions and Retro-rockets.",
    ),
    mcImage.hide(),
    alice.say("How does it work?"),
    max.say(
      "So these rovers were hurtling through the Martian atmosphere at thousands of miles per hour.",
    ),
    max.say(
      "A heat shield took the absolute worst of the heat and slowed it down by over 90%, and then a massive parachute popped out.",
    ),
    mc.say("A parachute? A parachute alone slowed it down??"),
    max.say(
      "Good Question! It didn’t alone stop it from crashing onto mars surface.",
    ),
    max.say(
      "Right before it hit the ground, retro-rockets fired to kill the remaining speed.",
    ),
    max.say(
      "Inflated these massive airbag balls all around the lander, and dropped it from a few meters up.",
    ),
    alice.say("Oh no! Little buddy."),
    max.say("Haha, spirit bounced 28 times."),
    mc.say("I’m dizzy thinking about it.[dramatic]"),
    Narrator.say("Everyone laughs"),
    max.say(
      "Spirit landed inside Gusev crater and Opportunity landed inside an impact crater known as Eagle.",
    ),
    max.say(
      "Spirit and Opportunity landed in the same way but on the opposite side of mars.",
    ),
    alice.say("Understood!"),
    mc.say(
      "Thank you so much Mr.Max. Now we know how these two landed on Mars.",
    ),
    max.say("You’re welcome."),
    max.say(
      "If you can answer my question I’ll give you some photocards, do you want it?",
    ),
    mc.say("Yess!"),
    alice.say("Yess!"),
  ]);

  return scene;
};

export default createMaxMuseumScene;
