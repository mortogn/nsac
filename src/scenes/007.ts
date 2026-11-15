import { Control, Narrator, Scene, Sound } from "narraleaf-react";
import { getMcCharacter, mcImage } from "../characters/mc";
import { alice, aliceImage } from "../characters/alice";
import { getAssetURL } from "../utils/get-asset-url";

const backgroundImage = [getAssetURL("/scenes/007/bg_001.webp")];

const images = [
  getAssetURL("/scenes/007/001.webp"),
  getAssetURL("/scenes/007/002.webp"),
  getAssetURL("/scenes/007/003.webp"),
  getAssetURL("/scenes/007/004.webp"),
  getAssetURL("/scenes/007/005.webp"),
  getAssetURL("/scenes/007/006.webp"),
  getAssetURL("/scenes/007/007.webp"),
  getAssetURL("/scenes/007/008.webp"),
];

const createEndingScene = (playerName: string) => {
  const scene = new Scene("ending", {
    voices: (id) =>
      Sound.voice({
        src: getAssetURL(`/voices/secene_007/${id}.mp3`),
        volume: 0.5,
      }),
  });

  const mc = getMcCharacter(playerName);

  scene.action([
    scene.setBackground(images[0]),
    Narrator.say(`Alice and ${playerName} are sitting in a bench`),

    scene.setBackground(backgroundImage[0]),

    mcImage.show(),
    mc.say("It has been a really exciting summer vacation!", {
      voiceId: "mc/female/001",
    }),

    aliceImage.pos({ xalign: 0.8 }).scaleX(1),

    aliceImage.show(),
    alice.say(
      "Yes,it was. We gathered so much information about Spirit and Opportunity.",
      { voiceId: "alice/001" },
    ),

    mcImage.char(["happy", "neutral"]),
    mc.say(
      "Remember how you were screaming for blueberries,when Miss Valerie mentioned Opportunity found “Blueberries”?",
      { voiceId: "mc/female/002" },
    ),

    aliceImage.char(["embarrassed", "behind-head"]),
    alice.say("I’m embarrassed now!", { voiceId: "alice/002" }),
    alice.say(
      "And how you were dizzy when Mr. Max mentioned Spirit bounced 28 times.",
      { voiceId: "alice/003" },
    ),
    mc.say(
      "We received gifts from Miss Valerie,Mr.Steve and Mr.Max as well. I’m so happy.",
      { voiceId: "mc/female/003" },
    ),
    alice.say("Me too! They  were really nice to us.", {
      voiceId: "alice/004",
    }),

    aliceImage.hide(),
    mcImage.hide(),

    scene.setBackground(images[1]),
    mc.say(
      "Honestly, I am really moved after knowing how Opportunity and Spirit dedicated their life for scientific discoveries.",
      { voiceId: "mc/female/004" },
    ),
    scene.setBackground(images[2]),
    alice.say(
      "And our lil buddy Spirit didn't even stop after losing its wheel.",
      { voiceId: "alice/005" },
    ),
    scene.setBackground(images[3]),
    mc.say(
      "Yes,Also Opportunity refused to retire,crossed miles after miles, crossed craters,overcame every possible obstacle.",
      { voiceId: "mc/female/005" },
    ),
    scene.setBackground(images[4]),
    alice.say(
      "They might be abandoned on mars surface now, but they paved the way for further missions.",
      { voiceId: "alice/006" },
    ),
    scene.setBackground(images[5]),
    mc.say(
      "Their tracks may fade in the red dust, but their legacy is etched into space history—abandoned, yet never forgotten.",
      { voiceId: "mc/female/006" },
    ),
    scene.setBackground(images[6]),
    Control.sleep(1000),
    scene.setBackground(images[7]),
  ]);

  return scene;
};

export default createEndingScene;
