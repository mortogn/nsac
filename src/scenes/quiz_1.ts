import { Control, Dissolve, Menu, Scene } from "narraleaf-react";
import { aliceImage } from "../characters/alice";
import { getMcCharacter, mcImage } from "../characters/mc";
import { valerieImage, valerie } from "../characters/valerie";

export const createQuizOneQuestionOneScene = (
  playerName: string,
  bg: string,
  next: Scene,
) => {
  const scene = new Scene("Quiz_1_Question_1");

  const mc = getMcCharacter(playerName);

  const questionTwo = createQuizOneQuestionTwo(playerName, bg, next);

  const rejectActions = [
    valerieImage.char(["disappointed", "cheek"]),
    valerie.say("Close, but that's not the one. Try again!"),
    mcImage.char(["embarrassed", "behind-head"]),
    aliceImage.char(["embarrassed", "behind-head"]),
    mc.say("This time I’ll get it right."),

    scene.jumpTo(scene),
  ];

  scene.action([
    scene.setBackground(bg),
    aliceImage.pos({ xalign: 0.3 }),
    valerieImage.char(["talking", "finger-up"]).show(),
    aliceImage.char(["neutral", "arms-crossed"]).show(),
    mcImage.char(["attentive", "arms-crossed"]).show(),

    valerie.say(
      "What is the nickname of the mineral hematite that opportunity found?",
    ),

    Menu.prompt(
      "What is the nickname of the mineral hematite that opportunity found?",
    )
      .choose("Blueberry", [
        valerieImage.char(["proud", "clap"]).show(),
        valerie.say("Correct! Well done!"),
        Control.all([
          mcImage.char(["proud", "fist-up"], new Dissolve({ duration: 300 })),
          aliceImage.char(
            ["proud", "fist-up"],
            new Dissolve({ duration: 300 }),
          ),
        ]),
        mc.say("YES! What’s the next question?"),

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
  const scene = new Scene("Quiz_1_Question_2");

  const mc = getMcCharacter(playerName);

  const rejectActions = [
    valerieImage.char(["disappointed", "cheek"]),
    valerie.say("Close, but that's not the one. Try again!"),
    mcImage.char(["embarrassed", "behind-head"]),
    aliceImage.char(["embarrassed", "behind-head"]),
    mc.say("This time I’ll get it right."),

    scene.jumpTo(scene),
  ];

  scene.action([
    scene.setBackground(bg),
    aliceImage.pos({ xalign: 0.3 }),
    valerieImage.char(["talking", "finger-up"]).show(),
    aliceImage.char(["neutral", "arms-crossed"]).show(),
    mcImage.char(["attentive", "arms-crossed"]).show(),

    valerie.say("Who had a broken wheel?"),

    Menu.prompt("Who had a broken wheel?")
      .choose("Opportunity", [
        valerieImage.char(["proud", "clap"]).show(),
        valerie.say("Correct! Well done!"),
        Control.all([
          mcImage.char(["proud", "fist-up"], new Dissolve({ duration: 300 })),
          aliceImage.char(
            ["proud", "fist-up"],
            new Dissolve({ duration: 300 }),
          ),
        ]),
        scene.jumpTo(next),
      ])
      .choose("Spirit", [...rejectActions]),
  ]);

  return scene;
};
