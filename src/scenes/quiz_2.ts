import { Control, Dissolve, Menu, Scene } from "narraleaf-react";
import { getMcCharacter, mcImage } from "../characters/mc";
import { steve, steveImage } from "../characters/steve";
import { aliceImage } from "../characters/alice";

export const createQuizTwoQuestionOneScene = (
  playerName: string,
  bg: string,
  next: Scene,
) => {
  const scene = new Scene("Quiz_2_Question_1");
  const mc = getMcCharacter(playerName);
  const questionTwo = createQuizTwoQuestionTwo(playerName, bg, next);

  const rejectActions = [
    steveImage.char(["head-down", "arms-crossed"]),
    steve.say("Close, but that's not the one. Try again!"),
    mcImage.char(["embarrassed", "behind-head"]),
    mc.say("This time I’ll get it right."),
    scene.jumpTo(scene),
  ];

  scene.action([
    scene.setBackground(bg),
    aliceImage.pos({ xalign: 0.35 }),
    steveImage.char(["talking", "index-up"]).show(),
    mcImage.char(["attentive", "arms-crossed"]).show(),
    aliceImage.char(["neutral", "arms-crossed"]).show(),
    steve.say("What works as brain in a rover?"),
    Menu.prompt("What works as brain in a rover?")
      .choose("Camera", [...rejectActions])
      .choose("Wheels", [...rejectActions])
      .choose("Computer", [
        steveImage.char(["cheerful", "clapping"]).show(),
        steve.say("Correct! Well done!"),
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
      .choose("Magnets", [...rejectActions]),
  ]);

  return scene;
};

export const createQuizTwoQuestionTwo = (
  playerName: string,
  bg: string,
  next: Scene,
) => {
  const scene = new Scene("Quiz_2_Question_2");
  const mc = getMcCharacter(playerName);

  const rejectActions = [
    steveImage.char(["talking", "index-up"]),
    steve.say("Close, but that's not the one. Try again!"),
    mcImage.char(["embarrassed", "behind-head"]),
    mc.say("This time I’ll get it right."),
    scene.jumpTo(scene),
  ];

  scene.action([
    scene.setBackground(bg),
    aliceImage.pos({ xalign: 0.35 }),
    steveImage.char(["smile-talk", "waist"]).show(),
    mcImage.char(["attentive", "arms-crossed"]).show(),
    aliceImage.char(["neutral", "arms-crossed"]).show(),
    steve.say("Excited, are we?"),
    steveImage.char(["talking", "index-up"]),
    steve.say("Tell me, why are there magnets in the rover?"),
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
        steve.say("Correct! Well done!"),
        scene.jumpTo(next),
      ])
      .choose("To collect water", [...rejectActions])
      .choose("To collect gems", [...rejectActions]),
  ]);

  return scene;
};
