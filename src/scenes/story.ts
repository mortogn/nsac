import { Scene, Story } from "narraleaf-react";
import createValerieVisitScene from "./003";

export const createStory = (playerName: string) => {
  const story = new Story("NSAC Visual Novel");

  const player = story.createPersistent("player", {
    name: playerName,
  });

  const valerieVisit = createValerieVisitScene(playerName);

  const intro = new Scene("intro");

  intro.action([intro.jumpTo(valerieVisit)]);

  story.entry(intro);

  return story;
};
