import { Gallery, Script, type LiveGame } from "narraleaf-react";
import { GALLERY_REWARDS, type GalleryReward, type QuizNumber } from "./rewards";

export const GALLERY_STORAGE_KEY = "nsac:gallery";

// Keep rewards for this browser, independently of the current story checkpoint.
const unlockedIds = new Set<string>();

export const getUnlockedRewards = (): GalleryReward[] => {
  try {
    const raw = localStorage.getItem(GALLERY_STORAGE_KEY);
    const stored: unknown = raw ? JSON.parse(raw) : [];
    if (Array.isArray(stored)) {
      for (const reward of GALLERY_REWARDS) {
        if (stored.includes(reward.id)) unlockedIds.add(reward.id);
      }
    }
  } catch {
    // Keep in-memory rewards available if storage is blocked or malformed.
  }

  return GALLERY_REWARDS.filter((reward) => unlockedIds.has(reward.id));
};

export const createGallery = () => {
  const gallery = new Gallery<GalleryReward>();
  for (const reward of getUnlockedRewards()) gallery.$set(reward.id, reward);
  return gallery;
};

export const syncGallery = (liveGame: LiveGame) => {
  const gallery = liveGame.story?.getService<Gallery<GalleryReward>>("gallery");
  if (!gallery) return;

  for (const reward of GALLERY_REWARDS) {
    if (gallery.$has(reward.id)) unlockedIds.add(reward.id);
  }

  // Loading an older checkpoint must not remove a reward earned later.
  for (const reward of getUnlockedRewards()) gallery.$set(reward.id, reward);

  try {
    localStorage.setItem(GALLERY_STORAGE_KEY, JSON.stringify([...unlockedIds]));
  } catch (error) {
    console.warn("Could not save gallery rewards.", error);
  }
};

export const unlockQuizRewards = (quiz: QuizNumber) =>
  Script.execute(({ liveGame }) => {
    const gallery = liveGame.story?.getService<Gallery<GalleryReward>>("gallery");
    if (!gallery) return;

    for (const reward of GALLERY_REWARDS) {
      if (reward.quiz === quiz) gallery.$set(reward.id, reward);
    }
    // Persist before the narrator announces the reward, even if the player quits there.
    syncGallery(liveGame);
  });
