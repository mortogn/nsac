import { Control, Dissolve, Scene } from "narraleaf-react";
import { getMcCharacter, mcImage } from "../characters/mc";
import { alice, aliceImage } from "../characters/alice";
import { getAssetURL } from "../utils/get-asset-url";
import createValerieVisitScene from "./003";

const backgroudImages = [
  getAssetURL("/scenes/002/bg_001.webp"),
  getAssetURL("/scenes/002/bg_002.webp"),
];

const images = [
  getAssetURL("/scenes/002/001.webp"),
  getAssetURL("/scenes/002/002.webp"),
  getAssetURL("/scenes/002/003.webp"),
];

const createSchoolScene = (playerName: string) => {
  const scene = new Scene("school-scene");

  const mc = getMcCharacter(playerName);

  const valerieVisit = createValerieVisitScene(playerName);

  scene.action([
    scene.setBackground(images[0]),
    Control.sleep(1500),
    scene.setBackground(images[1]),
    Control.sleep(1500),
    alice.say(`Good Morning, ${playerName}!!`),
    scene.setBackground(images[2], new Dissolve({ duration: 300 })),
    mc.say("Good Morning, Alice"),

    scene.setBackground(backgroudImages[0]),
    aliceImage.pos({ xalign: 0.8 }).scaleX(1).scaleY(1),

    aliceImage.char(["happy", "pocket"]).show(),
    mcImage.char(["smile", "behind-back"]).show(),
    alice.say("You look excited."),

    mcImage.char(["grin", "behind-back"], new Dissolve({ duration: 300 })),
    mc.say("I am! I’m surprised you can tell."),

    aliceImage.char(["talking", "finger-up"], new Dissolve({ duration: 300 })),
    alice.say("Is it because the summer vacation starts tomorrow?"),

    mcImage.char(["proud", "chest-waist"], new Dissolve({ duration: 300 })),
    mc.say("It’s because of something else."),

    aliceImage.char(["happy", "pocket"], new Dissolve({ duration: 300 })),
    alice.say("Tell me!"),

    mcImage.char(["talking", "finger-up"], new Dissolve({ duration: 300 })),
    mc.say("I watched a documentary last night about two rovers on Mars."),

    aliceImage.char(["talking", "finger-up"], new Dissolve({ duration: 300 })),
    alice.say("Are you talking about those twin rovers on Mars?"),

    mcImage.char(["talking", "finger-up"], new Dissolve({ duration: 300 })),
    mc.say("I didn’t know you’re interested in rovers and space?"),

    aliceImage.char(
      ["embarrassed", "behind-head"],
      new Dissolve({ duration: 300 }),
    ),
    alice.say("Not that much, but it makes me really curious too."),

    mcImage.char(["smile", "behind-back"], new Dissolve({ duration: 300 })),
    mc.say(
      "Do you want to learn about these rovers together over the vacation?",
    ),

    aliceImage.char(
      ["excited", "hands-clasped"],
      new Dissolve({ duration: 300 }),
    ),
    alice.say("Yes!"),

    aliceImage.char(["talking", "finger-up"]),
    alice.say("I don’t know if you know this, but my cousin is a scientist."),

    mcImage.char(["excited", "hands-clasped"]),
    mc.say("Really? You never told me."),

    aliceImage.char(["happy", "pocket"], new Dissolve({ duration: 300 })),
    alice.say(
      "I think we can make a visit to her house and maybe ask her about the rovers?",
    ),

    mcImage.char(["thinking", "chin"], new Dissolve({ duration: 300 })),
    mc.say("Scientists are really busy, are you sure your cousin won’t mind?"),

    aliceImage.char(["talking", "finger-up"]),
    alice.say(
      "She is really sweet and I can call her beforehand to make sure we are not ruining her schedule.",
    ),

    mcImage.char(["excited", "hands-clasped"], new Dissolve({ duration: 300 })),
    mc.say("If it’s not a bother I would love that."),

    aliceImage.char(["excited", "hands-clasped"]),
    alice.say("Great! I’ll talk to her and let you know."),

    scene.jumpTo(valerieVisit),
  ]);

  return scene;
};

export default createSchoolScene;
