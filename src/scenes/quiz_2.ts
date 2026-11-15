import { Control, Dissolve, Menu, Narrator, Scene, Sound } from "narraleaf-react";
import { getMcCharacter, mcImage } from "../characters/mc";
import { steve, steveImage } from "../characters/steve";
import { aliceImage } from "../characters/alice";
import { getAssetURL } from "../utils/get-asset-url";
import { unlockQuizRewards } from "../gallery/gallery";

export const createQuizTwoQuestionOneScene = (
  playerName: string,
  bg: string,
  next: Scene,
) => {
  const scene = new Scene("Quiz_2_Question_1", {
    voices: (id) =>
      Sound.voice({
        src: getAssetURL(`/voices/scene_004/${id}.mp3`),
        volume: 0.5,
      }),
  });
  const mc = getMcCharacter(playerName);
  const questionTwo = createQuizTwoQuestionTwo(playerName, bg, next);

  const rejectActions = [
    steveImage.char(["head-down", "arms-crossed"]),
    steve.say("Close, but that's not the one. Try again!", {
      voiceId: "steve/q_incorrect",
    }),
    mcImage.char(["embarrassed", "behind-head"]),
    mc.say("This time I’ll get it right.", {
      voiceId: "mc/female/q_incorrect",
    }),
    scene.jumpTo(scene),
  ];

  scene.action([
    scene.setBackground(bg),
    aliceImage.pos({ xalign: 0.35 }),
    steveImage.char(["talking", "index-up"]).show(),
    mcImage.char(["attentive", "arms-crossed"]).show(),
    aliceImage.char(["neutral", "arms-crossed"]).show(),
    steve.say("What works as brain in a rover?", {
      voiceId: "steve/q_001",
    }),
    Menu.prompt("What works as brain in a rover?")
      .choose("Camera", [...rejectActions])
      .choose("Wheels", [...rejectActions])
      .choose("Computer", [
        steveImage.char(["cheerful", "clapping"]).show(),
        steve.say("Correct! Well done!", { voiceId: "steve/q_correct" }),
        Control.all([
          mcImage.char(["proud", "fist-up"], new Dissolve({ duration: 300 })),
          aliceImage.char(
            ["proud", "fist-up"],
            new Dissolve({ duration: 300 }),
          ),
        ]),
        mc.say("YES! What’s the next question?", {
          voiceId: "mc/female/q_correct",
        }),
        scene.jumpTo(questionTwo),
      ])
      .choose("Magnets", [...rejectActions]),
  ]);

  return scene;
};

export const createQuizTwoQuestionTwo = (
  playerName: string,
  bg: string,
  next: Scene,
) => {
  const scene = new Scene("Quiz_2_Question_2", {
    voices: (id) =>
      Sound.voice({
        src: getAssetURL(`/voices/scene_004/${id}.mp3`),
        volume: 0.5,
      }),
  });
  const mc = getMcCharacter(playerName);

  const rejectActions = [
    steveImage.char(["talking", "index-up"]),
    steve.say("Close, but that's not the one. Try again!", {
      voiceId: "steve/q_incorrect",
    }),
    mcImage.char(["embarrassed", "behind-head"]),
    mc.say("This time I’ll get it right.", {
      voiceId: "mc/female/q_incorrect",
    }),
    scene.jumpTo(scene),
  ];

  scene.action([
    scene.setBackground(bg),
    aliceImage.pos({ xalign: 0.35 }),
    steveImage.char(["smile-talk", "waist"]).show(),
    mcImage.char(["attentive", "arms-crossed"]).show(),
    aliceImage.char(["neutral", "arms-crossed"]).show(),
    steve.say("Excited, are we?", { voiceId: "steve/019" }),
    steveImage.char(["talking", "index-up"]),
    steve.say("Tell me, why are there magnets in the rover?", {
      voiceId: "steve/q_002",
    }),
    Menu.prompt("Why are there magnets in the rover?")
      .choose("To collect dust", [
        steveImage.char(["cheerful", "clapping"]).show(),
        Control.all([
          mcImage.char(["proud", "fist-up"], new Dissolve({ duration: 300 })),
          aliceImage.char(
            ["proud", "fist-up"],
            new Dissolve({ duration: 300 }),
          ),
        ]),
        steve.say("Correct! Well done!", {
          voiceId: "steve/q_correct",
        }),
        unlockQuizRewards(2),
        Narrator.say(
          "You answered all of Steve’s questions correctly! You’ve unlocked Steve’s gift. You can view your reward in the Gallery.",
        ),
        scene.jumpTo(next),
      ])
      .choose("To collect water", [...rejectActions])
      .choose("To collect gems", [...rejectActions]),
  ]);

  return scene;
};
