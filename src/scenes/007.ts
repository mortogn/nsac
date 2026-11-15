import { Scene, Sound } from "narraleaf-react";
import { getMcCharacter } from "../characters/mc";
import { alice } from "../characters/alice";
import { getAssetURL } from "../utils/get-asset-url";

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
    mc.say("It has been a really exciting summer vacation!", {
      voiceId: "mc/female/001",
    }),
    alice.say(
      "Yes,it was. We gathered so much information about Spirit and Opportunity.",
      { voiceId: "alice/001" },
    ),
    mc.say(
      "Remember how you were screaming for blueberries,when Miss Valerie mentioned Opportunity found “Blueberries”?",
      { voiceId: "mc/female/002" },
    ),
    alice.say("[laughs] I’m embarrassed now!", { voiceId: "alice/002" }),
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
    mc.say(
      "Honestly, I am really moved after knowing how Opportunity and Spirit dedicated their life for scientific discoveries.",
      { voiceId: "mc/female/004" },
    ),
    alice.say(
      "And our lil buddy Spirit didn't even stop after losing its wheel.",
      { voiceId: "alice/005" },
    ),
    mc.say(
      "Yes,Also Opportunity refused to retire,crossed miles after miles, crossed craters,overcame every possible obstacle.",
      { voiceId: "mc/female/005" },
    ),
    alice.say(
      "They might be abandoned on mars surface now, but they paved the way for further missions.",
      { voiceId: "alice/006" },
    ),
    mc.say(
      "Their tracks may fade in the red dust, but their legacy is etched into space history—abandoned, yet never forgotten.",
      { voiceId: "mc/female/006" },
    ),
  ]);

  return scene;
};

export default createEndingScene;
