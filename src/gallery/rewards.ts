import { getAssetURL } from "../utils/get-asset-url";

export type QuizNumber = 1 | 2 | 3;

export type GalleryReward = {
  id: string;
  title: string;
  quiz: QuizNumber;
  url: string;
};

export const GALLERY_REWARDS: GalleryReward[] = [
  {
    id: "valerie",
    title: "Valerie’s gift",
    quiz: 1,
    url: getAssetURL("/gallery/valerie.png"),
  },
  {
    id: "steve",
    title: "Steve’s gift",
    quiz: 2,
    url: getAssetURL("/gallery/steve.png"),
  },
  {
    id: "max_001",
    title: "Max’s gift · 1",
    quiz: 3,
    url: getAssetURL("/gallery/max_001.jpeg"),
  },
  {
    id: "max_002",
    title: "Max’s gift · 2",
    quiz: 3,
    url: getAssetURL("/gallery/max_002.jpeg"),
  },
  {
    id: "max_003",
    title: "Max’s gift · 3",
    quiz: 3,
    url: getAssetURL("/gallery/max_003.jpeg"),
  },
];
