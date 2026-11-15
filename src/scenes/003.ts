import {
  Control,
  Dissolve,
  FadeIn,
  Menu,
  Narrator,
  Scene,
  Sound,
} from "narraleaf-react";
import { getMcCharacter, mcImage } from "../characters/mc";
import { getAssetURL } from "../utils/get-asset-url";
import { alice, aliceImage } from "../characters/alice";
import { sfx } from "../sounds/sfx";
import { valerie, valerieImage } from "../characters/valerie";
import createSteveScene from "./004";
import { createQuizOneQuestionOneScene } from "./quiz_1";

const backgroundImages = {
  "001": getAssetURL("/scenes/003/bg_001.webp"),
  "002": getAssetURL("/scenes/003/bg_002.webp"),
  "003": getAssetURL("/scenes/003/bg_003.webp"),
};

const images = [
  "/scenes/003/001.webp",
  "/scenes/003/002.webp",
  "/scenes/003/003.webp",
  "/scenes/003/004.webp",
  "/scenes/003/005.webp",
  "/scenes/003/006.webp",
];

const createValerieVisitScene = (playerName: string) => {
  const scene = new Scene("valerie_visit", {
    voices: (id) =>
      Sound.voice({
        src: getAssetURL(`/voices/scene_003/${id}.mp3`),
        volume: 0.5,
      }),
  });

  const mc = getMcCharacter(String(playerName));

  const steveScene = createSteveScene(playerName);
  const quizScene = createQuizOneQuestionOneScene(
    playerName,
    backgroundImages["003"],
    steveScene,
  );

  scene.action([
    scene.setBackground(getAssetURL(images[0])),
    mc.say("I’m nervous", {
      voiceId: "mc/female/door_001",
    }),
    alice.say("Don’t be, she is really sweet, you’ll like her.", {
      voiceId: "alice/door_001",
    }),
    scene.setBackground(getAssetURL(images[1])),
    mc.say("I trust you but are we sure she is free?", {
      voiceId: "mc/female/door_002",
    }),
    alice.say(
      "She is. I talked to her yesterday and she said it’s okay to come.",
      {
        voiceId: "alice/door_002",
      },
    ),
    scene.setBackground(getAssetURL(images[2])),
    sfx.doorBell.play(),
    Control.sleep(1000),
    scene.setBackground(getAssetURL(images[1])),
    alice.say("She is home.", {
      voiceId: "alice/door_003",
    }),

    scene.setBackground(
      getAssetURL(images[3]),
      new Dissolve({ duration: 100 }),
    ),
    sfx.doorOpen.play(),

    scene.setBackground(backgroundImages["001"]),
    scene.background.filter("blur(1px)"),

    valerieImage.char(["smile", "hello"]).show(),
    valerie.say(
      "Alice! You’ve made it. This must be the friend you talked about.",
      { voiceId: "valerie/001" },
    ),

    aliceImage.show(),
    aliceImage.char(["standing", "happy", "pocket"]),
    alice.say(`Hi, Yes. This is ${playerName}, my best friend.`, {
      voiceId: "alice/001",
    }),
    aliceImage.hide(),

    valerieImage.char(["smile", "hello"]).show(),
    valerie.say("Hi,dear. Nice to meet you.", {
      voiceId: "valerie/002",
    }),

    mcImage.show(),
    mcImage.char(["standing", "happy", "neutral-hand"]),
    mc.say("Nice to meet you too.", {
      voiceId: "mc/female/001",
    }),

    valerieImage.char(["happy", "clapsed"], new Dissolve({ duration: 300 })),
    valerie.say("Alice told me you were interested in rovers?", {
      voiceId: "valerie/003",
    }),

    mcImage.char(
      ["standing", "smile", "behind-back"],
      new Dissolve({ duration: 300 }),
    ),
    mc.say(
      "Yes, I watched a documentary last night and it really piqued my interest. I hope we are not being a bother",
      { voiceId: "mc/female/002" },
    ),

    valerie.say(
      "It’s always a pleasure to help young people, please come inside.",
      { voiceId: "valerie/004" },
    ),

    valerieImage.hide(),
    mcImage.hide(),

    scene.background.filter("blur(0px)"),

    scene.setBackground(getAssetURL(images[4])),
    Control.sleep(1000),
    scene.setBackground(getAssetURL(images[5])),
    Control.sleep(1000),

    scene.setBackground(backgroundImages["002"]),
    mcImage.show(),
    mc.say("I exactly saw this on that documentary..!", {
      voiceId: "mc/female/003",
    }),
    valerieImage.show(),
    valerie.say(
      "You did? Wanna know about these two successful identical twin Rovers?",
      { voiceId: "valerie/005" },
    ),
    mc.say("YESS!", { voiceId: "mc/female/004" }),

    mcImage.hide(),
    valerieImage.hide(),

    scene.setBackground(backgroundImages["003"], new FadeIn({ duration: 500 })),
    scene.background.filter("blur(1px)"),
    valerieImage.char(["talking", "finger-up"]).show(),
    valerie.say(
      "Meet Spirit and Opportunity, the twin rovers who traveled across mars surface and collected valuable data for year after year. ",
      { voiceId: "valerie/006" },
    ),
    valerie.say(
      "Spirit’s life span was 6 years,it traveled 4.8 miles and captured 124,838 raw images on the mars surface!",
      { voiceId: "valerie/007" },
    ),

    mcImage.char(["standing", "confused", "hand-up"]).show(),
    mc.say("6 years life span? That means it's dead now?", {
      voiceId: "mc/female/005",
    }),

    valerieImage.char(["sad", "neutral-hand"], new Dissolve({ duration: 300 })),
    valerie.say(
      "Unfortunately,Yes! Our little buddy couldn’t survive the Martian winter,stuck there forever.",
      { voiceId: "valerie/008" },
    ),

    mcImage.hide(),
    aliceImage.char(["standing", "sad", "neutral-hand"]).show(),

    alice.say("This is so sad!", { voiceId: "alice/003" }),

    aliceImage.hide(),

    mcImage.char(["upset", "neutral"]).show(),
    mc.say("It is", { voiceId: "mc/female/006" }),

    mcImage.char(["confused", "hand-up"]).show(),
    mc.say("What about Opportunity?", { voiceId: "mc/female/007" }),

    valerieImage.char(["proud", "waist"], new Dissolve({ duration: 300 })),
    valerie.say(
      "Oh that buddy? Opportunity was the strongest soldier over there.",
      { voiceId: "valerie/009" },
    ),
    valerie.say(
      "It survived 14+ years,clicked 217,594 raw pictures,travelled 28 miles!",
      { voiceId: "valerie/010" },
    ),

    mcImage.char(
      ["standing", "excited", "hands-clasped"],
      new Dissolve({ duration: 300 }),
    ),
    mc.say("OMG! Strongest one indeed.", { voiceId: "mc/female/008" }),

    valerieImage.char(
      ["smile", "neutral-hand"],
      new Dissolve({ duration: 300 }),
    ),
    valerie.say("Do you want to know why they were sent for?", {
      voiceId: "valerie/011",
    }),

    mcImage.hide(),
    aliceImage.char(["standing", "excited", "hands-clasped"]).show(),
    alice.say("Yess,Tell us more", { voiceId: "alice/004" }),

    valerieImage.char(["talking", "finger-up"]),
    valerie.say(
      "Their main mission was to look for the signs of past winter on Mars!",
      { voiceId: "valerie/012" },
    ),

    aliceImage.hide(),
    mcImage.char(["thinking", "chin"]).show(),
    mc.say("Do you mean water on mars?", { voiceId: "mc/female/010" }),

    valerie.say(
      "Yes exactly, you will be more shocked to know they did find the signs!",
      { voiceId: "valerie/013" },
    ),

    mcImage.char(
      ["standing", "excited", "hands-clasped"],
      new Dissolve({ duration: 300 }),
    ),
    mc.say("For real???", { voiceId: "mc/female/011" }),

    valerie.say(
      "Yes! By studying the rock record, Spirit and Opportunity confirmed that water was long standing on the surface of Mars long ago.",
      { voiceId: "valerie/014" },
    ),

    valerie.say(
      "That finding has helped scientists understand whether Mars ever could have been a habitat for life. ",
      { voiceId: "valerie/015" },
    ),

    mcImage.char(["happy", "fist"], new Dissolve({ duration: 300 })),
    mc.say("This is huge!!! Water sign on Mars, Unbelievable!", {
      voiceId: "mc/female/012",
    }),

    valerieImage.char(["thinking", "chin"], new Dissolve({ duration: 300 })),
    valerie.say(
      "Yes,it is. Opportunity found mineral hematite nicknamed as “Blueberries”,which is typically formed in water.",
      { voiceId: "valerie/016" },
    ),

    mcImage.hide(),
    aliceImage.char(["excited", "hands-clasped"]).show(),
    alice.say("BLUEBERRIES MENTIONED??? MY FAVOURITE BERRIESS!", {
      voiceId: "alice/006",
    }),

    valerieImage.hide(),
    aliceImage
      .char(["embarrassed", "behind-head"], new Dissolve({ duration: 300 }))
      .scaleX(0.9)
      .pos({ xalign: 0.8 }),
    mcImage.char(["attentive", "arms-crossed"]).show(),
    mc.say("Calmdown!! You can’t eat them!!", { voiceId: "mc/female/013" }),

    aliceImage.hide(),
    aliceImage.pos({ xalign: 0.2 }).scaleX(-0.9),
    valerieImage.show(),
    valerie.say(
      "Not only blueberries, do you wanna know something interesting? Do you know the proverb “Blessing in disguise”? This is exactly what happened to Spirit.",
      { voiceId: "valerie/017" },
    ),

    mcImage.char(["smile", "behind-back"]),

    valerie.say(
      "Spirit had a broken wheel,Dragging the stuck wheel naturally dug trenches into the Martian dirt.",
      { voiceId: "valerie/018" },
    ),

    valerie.say(
      "These trenches uncovered bright patches containing roughly 90% silica content.",
      { voiceId: "valerie/019" },
    ),

    valerie.say(
      "Since high silica level requires high water activity, this is how spirit turned up some best evidence of water on mars !",
      { voiceId: "valerie/020" },
    ),

    mcImage.hide(),
    aliceImage.char(["proud", "fist-up"]).show(),
    alice.say("This is why we should never lose hope in some inconvenience!", {
      voiceId: "alice/007",
    }),
    aliceImage.hide(),

    mcImage.show(),
    mc.say(
      "Yes exactly!Thank you so much,mam for your precious time. We learned a lot about these two rovers,I was in goosebumps all the time! ",
      { voiceId: "mc/female/014" },
    ),

    mcImage.char(["excited", "hands-clasped"], new Dissolve({ duration: 300 })),
    mc.say(
      "They were not only just rovers, they were our companions! They undercovered so many secrets that Mars had been holding!",
      { voiceId: "mc/female/015" },
    ),

    valerieImage.char(["grin", "behind-back"], new Dissolve({ duration: 300 })),
    valerie.say(
      "Yes! It’s my pleasure, and I’m really happy you showed interest in this field,don’t hesitate to come to me whenever you feel curious,okay? ",
      { voiceId: "valerie/021" },
    ),

    valerieImage.char(
      ["talking", "finger-up"],
      new Dissolve({ duration: 300 }),
    ),
    valerie.say(
      "If you can answer my question, I’ll ask my friend Steve to tell you about the instruments used in these rovers.",
      { voiceId: "valerie/022" },
    ),

    valerie.say("He is a mechanical Engineer. ", { voiceId: "valerie/023" }),

    valerieImage.hide(),
    mcImage.char(["proud", "fist-up"], new Dissolve({ duration: 300 })),
    aliceImage.char(["grin", "fist-up"]).show().pos({ xalign: 0.6 }),
    mc.say("We are ready!", { voiceId: "mc/female/016" }),

    aliceImage.pos({ xalign: 0.35 }),

    scene.jumpTo(quizScene),
  ]);

  return scene;
};

export default createValerieVisitScene;
