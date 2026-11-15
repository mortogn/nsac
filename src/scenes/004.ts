import { Control, Dissolve, Image, Narrator, Scene } from "narraleaf-react";
import { getMcCharacter, mcImage } from "../characters/mc";
import { getAssetURL } from "../utils/get-asset-url";
import { alice, aliceImage } from "../characters/alice";
import { steve, steveImage } from "../characters/steve";
import createMaxPhoneScene from "./005";

const backgroundImages = {
  "001": getAssetURL("/scenes/004/bg_001.webp"),
  "002": getAssetURL("/scenes/004/bg_002.webp"),
  "003": getAssetURL("/scenes/004/bg_003.webp"),
};

const images = [
  getAssetURL("/scenes/004/001.webp"),
  getAssetURL("/scenes/004/002.webp"),
  getAssetURL("/scenes/004/003.webp"),
  getAssetURL("/scenes/004/004.webp"),
];

const createSteveScene = (playerName: string) => {
  const scene = new Scene("steve_scene");

  const mc = getMcCharacter(String(playerName));

  const maxPhoneScene = createMaxPhoneScene(playerName);

  scene.action([
    scene.setBackground(images[0]),
    Control.waitForClick(),
    scene.setBackground(backgroundImages["001"]),

    aliceImage.pos({ xalign: 0.8 }).scaleX(0.9),
    aliceImage.char(["talking", "finger-up"]).show(),

    alice.say("Valerie told me that she talked to Steve."),

    mcImage.char(["smile", "behind-back"]).show(),
    mc.say("She is so nice"),

    alice.say("She said Steve will wait for us near the entrance."),

    mc.say("Alice, look at the person sitting at that bench."),

    Control.sleep(200),

    mcImage.hide(),
    aliceImage.hide(),
    scene.setBackground(images[1]),
    Control.waitForClick(),

    scene.setBackground(backgroundImages["001"]),

    mcImage.show(),

    aliceImage.char(["thinking", "chin"]).show(),
    alice.say("I think he is the one."),

    mcImage.char(["happy", "fist"]).show(),
    mc.say("Let’s go talk to him."),

    mcImage.hide(),
    aliceImage.hide(),

    Control.sleep(200),

    scene.setBackground(images[2]),
    Control.waitForClick(),

    steveImage.char(["talking", "pocket"]).show(),
    steve.say("Are you two perhaps MC and Alice,right?"),

    aliceImage.scaleX(-0.9),

    mcImage.char(["happy", "neutral-hand"]).show(),
    mc.say(
      "Yes, Miss Valerie told us about you. We would like to know about the parts and instruments used in rovers specially in Spirit and Opportunity.",
    ),

    steve.say(
      "Sure! I’ll tell you the basic rover anatomy so you can get an idea.",
    ),
    steve.say("But I’ll only tell you if you two join me in jogging. Deal?"),

    mc.say("Deal!"),

    Control.sleep(200),

    mcImage.hide(),
    steveImage.hide(),
    scene.setBackground(images[3]),
    Control.waitForClick(),

    steveImage.pos({ xalign: 0.5 }),
    scene.setBackground(backgroundImages["002"]),
    scene.background.filter("blur(2px)"),
    steveImage.char(["jogging", "smile", "index-up"]).show(),
    steve.say(
      "So, first tell me What do you call someone with no body and no nose ?",
    ),
    steveImage.hide(),

    mcImage.char(["jogging", "tired", "jogging-hand"]).show(),
    aliceImage.char(["jogging", "tired", "jogging-hand"]).show(),
    Narrator.say("..."),

    mcImage.hide(),
    aliceImage.hide(),

    steveImage.char(["jogging", "happy", "clapping"]).show(),
    steve.say("Nobody knows"),
    steveImage.hide(),

    mcImage.char(["jogging", "nervous-laugh", "jogging-hand"]).show(),
    aliceImage.char(["jogging", "nervous-laugh", "jogging-hand"]).show(),
    Narrator.say("..."),

    mcImage.hide(),
    aliceImage.hide(),

    steveImage.char(["jogging", "smile", "index-up"]).show(),
    steve.say(
      "But our rovers do have body,eyes,brains,arms and legs to function properly on mars surface.",
    ),
    steveImage.hide(),

    mcImage.char(["jogging", "tired", "jogging-hand"]).show(),
    aliceImage.char(["jogging", "tired", "jogging-hand"]).show(),
    mc.say("So they were working on mars surface just like human?"),

    mcImage.hide(),
    aliceImage.hide(),

    steveImage.show(),
    steve.say(
      "Yes,They have brains, which are basically computers to process information.",
    ),
    steve.say(
      "They have body and Temperature controllers to protect their vital instruments.",
    ),
    steve.say(
      "Their eyes, which are mainly Cameras and instruments that give the rovers information about their environment to aid in navigation and science investigations.",
    ),
    steve.say(
      "Their legs or wheels that help them to move place to place for investigations.",
    ),
    steveImage.hide(),

    mcImage.show(),
    aliceImage.show(),
    mc.say("Interesting!"),
    mcImage.hide(),
    aliceImage.hide(),

    steveImage.show(),
    steve.say(
      "Yes, it is.Spirit and Opportunity,these two were identical twins. So their structure is the same.",
    ),
    steve.say(
      "They had panoramic cameras,navigation cameras,magnets to collect dust particles and so many scientific instruments for proper investigation.",
    ),
    steveImage.hide(),

    mcImage.show(),
    aliceImage.show(),
    alice.say("They really were well structured."),
    mc.say(
      "Yes,they did a really great job on mars surface to find evidence for further research.",
    ),
    mcImage.hide(),
    aliceImage.hide(),

    steveImage.show(),
    steve.say("Exactly.Those two are legends."),
    steve.say("Okay! That’s enough for one lap."),
    steveImage.hide(),

    steveImage.pos({ xalign: 0.8 }),
    mcImage.pos({ xalign: 0.2 }),
    aliceImage.pos({ xalign: 0.8 }),

    scene.setBackground(backgroundImages["003"]),
    mcImage.char(["standing", "exhausted", "knee"]).show(),
    aliceImage.char(["standing", "exhausted", "forehead-waist"]).show(),
    mc.say("Mr.Steve, I’m running out of my battery"),
    alice.say("I can’t feel my legs"),

    aliceImage.pos({ xalign: 0.4 }),

    steveImage.char(["standing", "laugh", "waist"]).show(),
    steve.say("Kids these days!"),
    steve.say("Fine ,enough today."),
    mcImage.char(["standing", "attentive", "arms-crossed"]),
    steveImage.char(["smile-talk", "waist"], new Dissolve({ duration: 300 })),
    steve.say(
      "Before that if you can answer my questions,I’ll tell you where you can meet my friend Max,who is an aerospace engineer.",
    ),
    aliceImage.char(["standing", "neutral", "arms-crossed"]),
    steveImage.char(["talking", "index-up"], new Dissolve({ duration: 300 })),
    steve.say(
      "He is really packed in schedule,if you want to know about how these rovers landed on mars surface,You can meet him.",
    ),

    aliceImage.char(
      ["standing", "happy", "pocket"],
      new Dissolve({ duration: 300 }),
    ),
    mcImage.char(
      ["standing", "smile", "behind-back"],
      new Dissolve({ duration: 300 }),
    ),
    mc.say("Really?"),

    mcImage.char(
      ["standing", "proud", "fist"],
      new Dissolve({ duration: 300 }),
    ),
    mc.say("We will try to answer correctly."),

    scene.jumpTo(maxPhoneScene),
  ]);

  return scene;
};

export default createSteveScene;
