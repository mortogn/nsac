import { Control, Dissolve, Menu, Narrator, Scene, Sound } from "narraleaf-react";
import { aliceImage } from "../characters/alice";
import { getMcCharacter, mcImage } from "../characters/mc";
import { valerieImage, valerie } from "../characters/valerie";
import { getAssetURL } from "../utils/get-asset-url";
import { unlockQuizRewards } from "../gallery/gallery";

export const createQuizOneQuestionOneScene = (
  playerName: string,
  bg: string,
  next: Scene,
) => {
  const scene = new Scene("Quiz_1_Question_1", {
    voices: (id) =>
      Sound.voice({
        src: getAssetURL(`/voices/scene_003/${id}.mp3`),
        volume: 0.5,
      }),
  });

  const mc = getMcCharacter(playerName);

  const questionTwo = createQuizOneQuestionTwo(playerName, bg, next);

  const rejectActions = [
    valerieImage.char(["disappointed", "cheek"]),
    valerie.say("Close, but that's not the one. Try again!", {
      voiceId: "valerie/q_incorrect",
    }),
    mcImage.char(["embarrassed", "behind-head"]),
    aliceImage.char(["embarrassed", "behind-head"]),
    mc.say("This time I’ll get it right.", {
      voiceId: "mc/female/q_incorrect",
    }),

    scene.jumpTo(scene),
  ];

  scene.action([
    scene.setBackground(bg),
    aliceImage.pos({ xalign: 0.35 }),
    valerieImage.char(["talking", "finger-up"]).show(),
    aliceImage.char(["neutral", "arms-crossed"]).show(),
    mcImage.char(["attentive", "arms-crossed"]).show(),

    valerie.say(
      "What is the nickname of the mineral hematite that opportunity found?",
      {
        voiceId: "valerie/q_001",
      },
    ),

    Menu.prompt(
      "What is the nickname of the mineral hematite that opportunity found?",
    )
      .choose("Blueberry", [
        valerieImage.char(["proud", "clap"]).show(),
        valerie.say("Correct! Well done!", {
          voiceId: "valerie/q_correct",
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

        scene.jumpTo(questionTwo),
      ])
      .choose("Strawberry", [...rejectActions])
      .choose("Pebble", [...rejectActions])
      .choose("Grape", [...rejectActions]),
  ]);

  return scene;
};

export const createQuizOneQuestionTwo = (
  playerName: string,
  bg: string,
  next: Scene,
) => {
  const scene = new Scene("Quiz_1_Question_2", {
    voices: (id) =>
      Sound.voice({
        src: getAssetURL(`/voices/scene_003/${id}.mp3`),
        volume: 0.5,
      }),
  });

  const mc = getMcCharacter(playerName);

  const rejectActions = [
    valerieImage.char(["disappointed", "cheek"]),
    valerie.say("Close, but that's not the one. Try again!", {
      voiceId: "valerie/q_incorrect",
    }),
    mcImage.char(["embarrassed", "behind-head"]),
    aliceImage.char(["embarrassed", "behind-head"]),
    mc.say("This time I’ll get it right.", {
      voiceId: "mc/female/q_incorrect",
    }),

    scene.jumpTo(scene),
  ];

  scene.action([
    scene.setBackground(bg),
    aliceImage.pos({ xalign: 0.35 }),
    valerieImage.char(["talking", "finger-up"]).show(),
    aliceImage.char(["neutral", "arms-crossed"]).show(),
    mcImage.char(["attentive", "arms-crossed"]).show(),

    valerie.say("Who had a broken wheel?", {
      voiceId: "valerie/q_002",
    }),

    Menu.prompt("Who had a broken wheel?")
      .choose("Opportunity", [...rejectActions])
      .choose("Spirit", [
        valerieImage.char(["proud", "clap"]).show(),
        valerie.say("Correct! Well done!", {
          voiceId: "valerie/q_correct",
        }),
        Control.all([
          mcImage.char(["proud", "fist-up"], new Dissolve({ duration: 300 })),
          aliceImage.char(
            ["proud", "fist-up"],
            new Dissolve({ duration: 300 }),
          ),
        ]),
        unlockQuizRewards(1),
        Narrator.say(
          "You answered all of Valerie’s questions correctly! You’ve unlocked Valerie’s gift. You can view your reward in the Gallery.",
        ),
        scene.jumpTo(next),
      ]),
  ]);

  return scene;
};
