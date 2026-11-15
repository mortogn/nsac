import { Scene, Story } from "narraleaf-react";
import createOpeningScene from "./001";
import { createGallery } from "../gallery/gallery";
import createEndingScene from "./007";

export const createStory = (playerName: string) => {
  const story = new Story("NSAC Visual Novel");

  story.createPersistent("player", {
    name: playerName,
  });
  story.registerService("gallery", createGallery());

  const opening = createEndingScene(playerName);

  const intro = new Scene("intro");

  intro.action([intro.jumpTo(opening)]);

  story.entry(intro);

  return story;
};
