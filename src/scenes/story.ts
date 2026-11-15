import { Scene, Story } from "narraleaf-react";
import createOpeningScene from "./001";

export const createStory = (playerName: string) => {
  const story = new Story("NSAC Visual Novel");

  const player = story.createPersistent("player", {
    name: playerName,
  });

  const opening = createOpeningScene(playerName);

  const intro = new Scene("intro");

  intro.action([intro.jumpTo(opening)]);

  story.entry(intro);

  return story;
};
