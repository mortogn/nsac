import { Scene, Story } from "narraleaf-react";
import createOpeningScene from "./001";
import createValerieVisitScene from "./003";

export const createStory = (playerName: string) => {
  const story = new Story("NSAC Visual Novel");

  const player = story.createPersistent("player", {
    name: playerName,
  });

  const opening = createOpeningScene(playerName);
  const v = createValerieVisitScene(playerName);

  const intro = new Scene("intro");

  intro.action([intro.jumpTo(v)]);

  story.entry(intro);

  return story;
};
