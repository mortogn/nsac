import { Control, Dissolve, Scene, Sound } from "narraleaf-react";
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
  const scene = new Scene("school-scene", {
    voices: (id) =>
      Sound.voice({
        src: getAssetURL(`/voices/scene_002/${id}.mp3`),
        volume: 0.5,
      }),
  });

  const mc = getMcCharacter(playerName);

  const valerieVisit = createValerieVisitScene(playerName);

  scene.action([
    scene.setBackground(images[0]),
    Control.sleep(1500),
    scene.setBackground(images[1]),
    Control.sleep(1500),
    alice.say(`Good Morning, ${playerName}!!`, {
      voiceId: "alice/001",
    }),
    scene.setBackground(images[2], new Dissolve({ duration: 300 })),
    mc.say("Good Morning, Alice", {
      voiceId: "mc/female/001",
    }),

    scene.setBackground(backgroudImages[0]),
    aliceImage.pos({ xalign: 0.8 }).scaleX(1).scaleY(1),

    aliceImage.char(["happy", "pocket"]).show(),
    mcImage.char(["smile", "behind-back"]).show(),
    alice.say("You look excited.", { voiceId: "alice/002" }),

    mcImage.char(["grin", "behind-back"], new Dissolve({ duration: 300 })),
    mc.say("I am! I’m surprised you can tell.", { voiceId: "mc/female/002" }),

    aliceImage.char(["talking", "finger-up"], new Dissolve({ duration: 300 })),
    alice.say("Is it because the summer vacation starts tomorrow?", {
      voiceId: "alice/003",
    }),

    mcImage.char(["proud", "chest-waist"], new Dissolve({ duration: 300 })),
    mc.say("It’s because of something else.", { voiceId: "mc/female/003" }),

    aliceImage.char(["happy", "pocket"], new Dissolve({ duration: 300 })),
    alice.say("Tell me!", { voiceId: "alice/004" }),

    mcImage.char(["talking", "finger-up"], new Dissolve({ duration: 300 })),
    mc.say("I watched a documentary last night about two rovers on Mars.", {
      voiceId: "mc/female/004",
    }),

    aliceImage.char(["talking", "finger-up"], new Dissolve({ duration: 300 })),
    alice.say("Are you talking about those twin rovers on Mars?", {
      voiceId: "alice/005",
    }),

    mcImage.char(["talking", "finger-up"], new Dissolve({ duration: 300 })),
    mc.say("I didn’t know you’re interested in rovers and space?", {
      voiceId: "mc/female/005",
    }),

    aliceImage.char(
      ["embarrassed", "behind-head"],
      new Dissolve({ duration: 300 }),
    ),
    alice.say("Not that much, but it makes me really curious too.", {
      voiceId: "alice/006",
    }),

    mcImage.char(["smile", "behind-back"], new Dissolve({ duration: 300 })),
    mc.say(
      "Do you want to learn about these rovers together over the vacation?",
      { voiceId: "mc/female/006" },
    ),

    aliceImage.char(
      ["excited", "hands-clasped"],
      new Dissolve({ duration: 300 }),
    ),
    alice.say("Yes!", { voiceId: "alice/007" }),

    aliceImage.char(["talking", "finger-up"]),
    alice.say("I don’t know if you know this, but my cousin is a scientist.", {
      voiceId: "alice/008",
    }),

    mcImage.char(["excited", "hands-clasped"]),
    mc.say("Really? You never told me.", { voiceId: "mc/female/007" }),

    aliceImage.char(["happy", "pocket"], new Dissolve({ duration: 300 })),
    alice.say(
      "I think we can make a visit to her house and maybe ask her about the rovers?",
      { voiceId: "alice/009" },
    ),

    mcImage.char(["thinking", "chin"], new Dissolve({ duration: 300 })),
    mc.say("Scientists are really busy, are you sure your cousin won’t mind?", {
      voiceId: "mc/female/008",
    }),

    aliceImage.char(["talking", "finger-up"]),
    alice.say(
      "She is really sweet and I can call her beforehand to make sure we are not ruining her schedule.",
      { voiceId: "alice/010" },
    ),

    mcImage.char(["excited", "hands-clasped"], new Dissolve({ duration: 300 })),
    mc.say("If it’s not a bother I would love that.", {
      voiceId: "mc/female/009",
    }),

    aliceImage.char(["excited", "hands-clasped"]),
    alice.say("Great! I’ll talk to her and let you know.", {
      voiceId: "alice/011",
    }),

    scene.jumpTo(valerieVisit),
  ]);

  return scene;
};

export default createSchoolScene;
