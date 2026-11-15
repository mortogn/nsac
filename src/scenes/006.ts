import { Narrator, Scene, Sound } from "narraleaf-react";
import { getMcCharacter, mcImage } from "../characters/mc";
import { alice, aliceImage } from "../characters/alice";
import { max, maxImage } from "../characters/max";
import { getAssetURL } from "../utils/get-asset-url";
import { createQuizThreeQuestionOneScene } from "./quiz_3";

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
  const scene = new Scene("max_museum", {
    voices: (id) =>
      Sound.voice({
        src: getAssetURL(`/voices/scene_006/${id}.mp3`),
        volume: 0.5,
      }),
  });

  const mc = getMcCharacter(playerName);
  const quizCompleteScene = new Scene("max_museum_end");
  quizCompleteScene.action([]);
  const quizScene = createQuizThreeQuestionOneScene(
    playerName,
    backgroudImages[1],
    quizCompleteScene,
  );

  scene.action([
    scene.setBackground(images[0]),
    Narrator.say(
      `Alice and ${playerName} entered a space museum looking for max`,
    ),

    scene.setBackground(backgroudImages[0]),
    aliceImage.pos({ xalign: 0.8 }).scaleX(1),

    mcImage.char(["happy", "neutral"]).show(),
    aliceImage.char(["thinking", "chin"]).show(),
    mc.say("Alice, I think that might be Mr.Max.", {
      voiceId: "mc/female/001",
    }),

    mcImage.hide(),
    aliceImage.hide(),
    Narrator.say("A man was looking at a rocket model that looked like Max"),

    scene.setBackground(backgroudImages[0]),

    mcImage.show(),
    aliceImage.char(["talking", "finger-up"]).show(),
    alice.say("Let's go talk to him.", { voiceId: "alice/001" }),

    mcImage.hide(),
    aliceImage.hide(),

    scene.setBackground(images[1]),
    Narrator.say(`${playerName} and Alice went up to the man`),

    scene.setBackground(images[2]),
    mc.say("Hello, sir, Are you Mr.Max?", { voiceId: "mc/female/002" }),

    aliceImage.pos({ xalign: 0.2 }).scaleX(-1),
    scene.setBackground(backgroudImages[1]),
    mcImage.show(),

    maxImage.show(),
    max.say("Yes, you called yesterday right?", { voiceId: "max/001" }),

    mcImage.char(["smile", "behind-back"]),
    mc.say("Yes,sir.", { voiceId: "mc/female/003" }),

    maxImage.char(["talking", "arms-crossed"]),
    max.say("Ah, alright. What do you want to know?", { voiceId: "max/002" }),

    mcImage.hide(),
    aliceImage.char(["confused", "shrug"]).show(),
    alice.say(
      "We want to know how these rovers landed on mars, isn’t it really difficult?",
      { voiceId: "alice/002" },
    ),

    maxImage.char(["talking", "7"]),
    max.say("Yes, we even call it “Seven minutes of terror”.", {
      voiceId: "max/003",
    }),

    aliceImage.hide(),
    mcImage.show(),
    mc.say("It must be really difficult then.", { voiceId: "mc/female/004" }),

    maxImage.char(["explaining", "chest"]),
    max.say(
      "Yes. To land a rover successfully, specially for Spirit and opportunity we used Airbag cushions and Retro-rockets.",
      { voiceId: "max/004" },
    ),
    mcImage.hide(),
    aliceImage.char(["confused", "shrug"]).show(),
    alice.say("How does it work?", { voiceId: "alice/003" }),

    maxImage.char(["talking", "index-up"]),
    max.say(
      "So these rovers were hurtling through the Martian atmosphere at thousands of miles per hour.",
      { voiceId: "max/005" },
    ),

    maxImage.char(["explaining", "chest"]),
    max.say(
      "A heat shield took the absolute worst of the heat and slowed it down by over 90%, and then a massive parachute popped out.",
      { voiceId: "max/006" },
    ),

    aliceImage.hide(),
    mcImage.char(["confused", "hand-up"]).show(),
    mc.say("A parachute? A parachute alone slowed it down??", {
      voiceId: "mc/female/005",
    }),

    maxImage.char(["talking", "index-up"]),
    max.say(
      "Good Question! It didn’t alone stop it from crashing onto mars surface.",
      { voiceId: "max/007" },
    ),

    maxImage.char(["talking", "arms-crossed"]),
    max.say(
      "Right before it hit the ground, retro-rockets fired to kill the remaining speed.",
      { voiceId: "max/008" },
    ),
    max.say(
      "Inflated these massive airbag balls all around the lander, and dropped it from a few meters up.",
      { voiceId: "max/009" },
    ),

    mcImage.hide(),

    aliceImage.char(["defeated", "palm-on-face"]).show(),
    alice.say("Oh no! Little buddy.", { voiceId: "alice/004" }),

    maxImage.char(["laughing", "waist-forehead"]),
    max.say("Haha, spirit bounced 28 times.", { voiceId: "max/010" }),

    aliceImage.hide(),
    mcImage.char(["dizzy", "head"]).show(),
    mc.say("I’m dizzy thinking about it.", { voiceId: "mc/female/006" }),

    mcImage.hide(),
    aliceImage.char(["laughing", "mouth"]).show(),
    maxImage.char(["laughing", "waist-forehead"]),
    Narrator.say("Everyone laughs"),

    aliceImage.char(["neutral", "arms-crossed"]),
    maxImage.char(["talking", "index-up"]),
    max.say(
      "Spirit landed inside Gusev crater and Opportunity landed inside an impact crater known as Eagle.",
      { voiceId: "max/011" },
    ),
    maxImage.char(["talking", "up"]),
    max.say(
      "Spirit and Opportunity landed in the same way but on the opposite side of mars.",
      { voiceId: "max/012" },
    ),

    mcImage.hide(),

    aliceImage.char(["thinking", "chin"]).show(),
    alice.say("Understood!", { voiceId: "alice/005" }),

    aliceImage.hide(),
    mcImage.char(["smile", "behind-back"]).show(),
    mc.say(
      "Thank you so much Mr.Max. Now we know how these two landed on Mars.",
      { voiceId: "mc/female/007" },
    ),

    maxImage.char(["talking", "arms-crossed"]),
    max.say("You’re welcome.", { voiceId: "max/013" }),

    maxImage.char(["talking", "index-up"]),
    max.say(
      "If you can answer my question I’ll give you some photocards, do you want it?",
      { voiceId: "max/014" },
    ),

    mcImage.char(["proud", "fist-up"]),
    mc.say("Yess!", { voiceId: "mc/female/008" }),
    aliceImage.char(["proud", "fist-up"]).show(),
    alice.say("Yess!", { voiceId: "alice/006" }),

    scene.jumpTo(quizScene),
  ]);

  return scene;
};

export default createMaxMuseumScene;
