import { Scene, Story } from "narraleaf-react";
import createValerieVisitScene from "./003";
import createSteveScene from "./004";
import createOpeningScene from "./001";
import createMaxPhoneScene from "./005";

export const createStory = (playerName: string) => {
  const story = new Story("NSAC Visual Novel");

  const player = story.createPersistent("player", {
    name: playerName,
  });

  const valerieVisit = createValerieVisitScene(playerName);
  const steve = createSteveScene(playerName);
  const opening = createOpeningScene(playerName);
  const maxPhone = createMaxPhoneScene(playerName);

  const intro = new Scene("intro");

  intro.action([intro.jumpTo(maxPhone)]);

  story.entry(intro);

  return story;
};
