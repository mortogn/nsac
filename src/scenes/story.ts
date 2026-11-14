import { Scene, Story } from "narraleaf-react";
import createValerieVisitScene from "./003";
import createSteveScene from "./004";

export const createStory = (playerName: string) => {
  const story = new Story("NSAC Visual Novel");

  const player = story.createPersistent("player", {
    name: playerName,
  });

  const valerieVisit = createValerieVisitScene(playerName);
  const steve = createSteveScene(playerName);

  const intro = new Scene("intro");

  intro.action([intro.jumpTo(steve)]);

  story.entry(intro);

  return story;
};
