import { Scene, Sound } from "narraleaf-react";
import { getMcCharacter, mcImage } from "../characters/mc";
import { max, maxImage } from "../characters/max";
import { getAssetURL } from "../utils/get-asset-url";
import createMaxMuseumScene from "./006";

const backgroundImages = [getAssetURL("/scenes/005/bg_001.webp")];

const createMaxPhoneScene = (playerName: string) => {
  const scene = new Scene("max_phone_scene", {
    voices: (id) =>
      Sound.voice({
        src: getAssetURL(`/voices/secene_005/${id}.mp3`),
        volume: 0.5,
      }),
  });

  const mc = getMcCharacter(playerName);

  const maxMuseumScene = createMaxMuseumScene(playerName);

  scene.action([
    scene.setBackground(backgroundImages[0]),
    maxImage.char(["talking", "phone"]).show(),
    mcImage.char(["listening", "phone"]).show(),
    max.say("Hello,Max speaking.", { voiceId: "max/001" }),

    mcImage.char(["talking", "phone"]),
    maxImage.char(["listening", "phone"]),
    mc.say(
      `Hello,sir.I’m ${playerName}. Mr.Steve told us that you’ll be at the Space museum this friday.`,
      { voiceId: "mc/female/001" },
    ),

    mc.say(
      "We are currently gathering some information about Spirit and Opportunity twin rovers.",
      { voiceId: "mc/female/002" },
    ),

    mc.say(
      "If you have time,can me and my friend come over for a little discussion?",
      { voiceId: "mc/female/003" },
    ),

    mcImage.char(["listening", "phone"]),
    maxImage.char(["talking", "phone"]),
    max.say("Yes,sure! I’ll be there at 3 pm.", { voiceId: "max/002" }),

    mcImage.char(["talking", "phone"]),
    maxImage.char(["listening", "phone"]),
    mc.say("Thank you so much sir,we’ll be there in time.", {
      voiceId: "mc/female/004",
    }),

    scene.jumpTo(maxMuseumScene),
  ]);

  return scene;
};

export default createMaxPhoneScene;
