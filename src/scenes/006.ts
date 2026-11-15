import { Narrator, Scene } from "narraleaf-react";
import { getMcCharacter } from "../characters/mc";
import { alice } from "../characters/alice";
import { max } from "../characters/max";

const backgroudImages = [];
const images = [];

const createMaxMuseumScene = (playerName: string) => {
  const scene = new Scene("max_museum");

  const mc = getMcCharacter(playerName);

  scene.action([
    mc.say("Alice, I think that might be Mr.Max."),
    alice.say("Let's go talk to him."),
    mc.say("Hello, sir, Are you Mr.Max?"),
    max.say("Yes, you called yesterday right?"),
    mc.say("Yes,sir."),
    max.say("Ah,alright[soft smile]. What do you want to know?"),
    alice.say(
      "We want to know how these rovers landed on mars, isn’t it really difficult?",
    ),
    max.say("Yes, we even call it “Seven minutes of terror”."),
    mc.say("It must be really difficult then."),
    max.say(
      "Yes. To land a rover successfully, specially for Spirit and opportunity we used Airbag cushions and Retro-rockets.",
    ),
    alice.say("How does it work?"),
    max.say(
      "So these rovers were hurtling through the Martian atmosphere at thousands of miles per hour.",
    ),
    max.say(
      "A heat shield took the absolute worst of the heat and slowed it down by over 90%, and then a massive parachute popped out.",
    ),
    mc.say("A parachute? A parachute alone slowed it down??"),
    max.say(
      "Good Question! It didn’t alone stop it from crashing onto mars surface.",
    ),
    max.say(
      "Right before it hit the ground, retro-rockets fired to kill the remaining speed.",
    ),
    max.say(
      "Inflated these massive airbag balls all around the lander, and dropped it from a few meters up.",
    ),
    alice.say("Oh no! Little buddy."),
    max.say("Haha, spirit bounced 28 times."),
    mc.say("I’m dizzy thinking about it.[dramatic]"),
    Narrator.say("Everyone laughs"),
    max.say(
      "Spirit landed inside Gusev crater and Opportunity landed inside an impact crater known as Eagle.",
    ),
    max.say(
      "Spirit and Opportunity landed in the same way but on the opposite side of mars.",
    ),
    alice.say("Understood!"),
    mc.say(
      "Thank you so much Mr.Max. Now we know how these two landed on Mars.",
    ),
    max.say("You’re welcome."),
    max.say(
      "If you can answer my question I’ll give you some photocards, do you want it?",
    ),
    mc.say("Yess!"),
    alice.say("Yess!"),
  ]);

  return scene;
};

export default createMaxMuseumScene;
