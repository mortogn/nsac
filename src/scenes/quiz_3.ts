import { Control, Dissolve, Menu, Narrator, Scene, Sound } from "narraleaf-react";
import { getMcCharacter, mcImage } from "../characters/mc";
import { max, maxImage } from "../characters/max";
import { aliceImage } from "../characters/alice";
import { getAssetURL } from "../utils/get-asset-url";
import { unlockQuizRewards } from "../gallery/gallery";

export const createQuizThreeQuestionOneScene = (
  playerName: string,
  bg: string,
  next: Scene,
) => {
  const scene = new Scene("Quiz_3_Question_1", {
    voices: (id) =>
      Sound.voice({
        src: getAssetURL(`/voices/scene_006/${id}.mp3`),
        volume: 0.5,
      }),
  });
  const mc = getMcCharacter(playerName);
  const questionTwo = createQuizThreeQuestionTwo(playerName, bg, next);

  const rejectActions = [
    maxImage.char(["disappointed", "chin-chest"]).show(),
    max.say("Close, but that's not the one. Try again!", {
      voiceId: "max/q_incorrect",
    }),
    mcImage.char(["embarrassed", "behind-head"]),
    mc.say("This time I’ll get it right.", {
      voiceId: "mc/female/q_incorrect",
    }),
    scene.jumpTo(scene),
  ];

  scene.action([
    aliceImage.pos({ xalign: 0.35 }),
    scene.setBackground(bg),
    maxImage.char(["talking", "index-up"]).show(),
    mcImage.char(["attentive", "arms-crossed"]).show(),
    aliceImage.char(["neutral", "arms-crossed"]).show(),
    max.say("How many times did Spirit bounce?", {
      voiceId: "max/q_001",
    }),
    Menu.prompt("How many times did Spirit bounce?")
      .choose("50", [...rejectActions])
      .choose("30", [...rejectActions])
      .choose("28", [
        maxImage.char(["proud", "clapping"]).show(),
        max.say("Correct! Well done!", { voiceId: "max/q_correct" }),
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
      .choose("15", [...rejectActions]),
  ]);

  return scene;
};

export const createQuizThreeQuestionTwo = (
  playerName: string,
  bg: string,
  next: Scene,
) => {
  const scene = new Scene("Quiz_3_Question_2", {
    voices: (id) =>
      Sound.voice({
        src: getAssetURL(`/voices/scene_006/${id}.mp3`),
        volume: 0.5,
      }),
  });
  const mc = getMcCharacter(playerName);
  const questionThree = createQuizThreeQuestionThree(playerName, bg, next);

  const rejectActions = [
    maxImage.char(["disappointed", "chin-chest"]).show(),
    max.say("Close, but that's not the one. Try again!", {
      voiceId: "max/q_incorrect",
    }),
    mcImage.char(["embarrassed", "behind-head"]),
    mc.say("This time I’ll get it right.", {
      voiceId: "mc/female/q_incorrect",
    }),
    scene.jumpTo(scene),
  ];
  scene.action([
    aliceImage.pos({ xalign: 0.35 }),
    scene.setBackground(bg),
    maxImage.char(["talking", "index-up"]).show(),
    mcImage.char(["attentive", "arms-crossed"]).show(),
    aliceImage.char(["neutral", "arms-crossed"]).show(),
    max.say("What is fired later to reduce the rover’s remaining speed?", {
      voiceId: "max/q_002",
    }),
    Menu.prompt("What is fired later to reduce the rover’s remaining speed?")
      .choose("Retro Rockets", [
        maxImage.char(["proud", "clapping"]).show(),
        max.say("Correct! Well done!", {
          voiceId: "max/q_correct",
        }),
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
        scene.jumpTo(questionThree),
      ])
      .choose("Parachute", [...rejectActions]),
  ]);

  return scene;
};

export const createQuizThreeQuestionThree = (
  playerName: string,
  bg: string,
  next: Scene,
) => {
  const scene = new Scene("Quiz_3_Question_3", {
    voices: (id) =>
      Sound.voice({
        src: getAssetURL(`/voices/scene_006/${id}.mp3`),
        volume: 0.5,
      }),
  });
  const mc = getMcCharacter(playerName);

  const rejectActions = [
    maxImage.char(["disappointed", "chin-chest"]).show(),
    max.say("Close, but that's not the one. Try again!", {
      voiceId: "max/q_incorrect",
    }),
    mcImage.char(["embarrassed", "behind-head"]),
    mc.say("This time I’ll get it right.", {
      voiceId: "mc/female/q_incorrect",
    }),
    scene.jumpTo(scene),
  ];

  scene.action([
    aliceImage.pos({ xalign: 0.35 }),
    scene.setBackground(bg),
    maxImage.char(["talking", "index-up"]).show(),
    mcImage.char(["attentive", "arms-crossed"]).show(),
    aliceImage.char(["neutral", "arms-crossed"]).show(),
    max.say("Okay, last one.", {
      voiceId: "max/015",
    }),
    max.say("Where did Spirit land?", {
      voiceId: "max/q_003",
    }),
    Menu.prompt(" Where did Spirit land?")
      .choose("Gusev crater", [
        maxImage.char(["proud", "clapping"]).show(),
        max.say("Correct! Well done!", {
          voiceId: "max/q_correct",
        }),
        Control.all([
          mcImage.char(["proud", "fist-up"], new Dissolve({ duration: 300 })),
          aliceImage.char(
            ["proud", "fist-up"],
            new Dissolve({ duration: 300 }),
          ),
        ]),
        unlockQuizRewards(3),
        Narrator.say(
          "You answered all of Max’s questions correctly! You’ve unlocked three images from Max. You can view your rewards in the Gallery.",
        ),
        scene.jumpTo(next),
      ])
      .choose("Victoria Crater", [...rejectActions]),
  ]);

  return scene;
};
