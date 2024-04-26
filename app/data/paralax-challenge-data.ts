import { Challenge, ChallengeItem } from "~/interfaces/challenge";

const parallaxChallengeDataItems: ChallengeItem[] = [
  {
    description:
      "Create a background that contains stars",
  },
  {
    description:
      "Get images from Star Wars Starships.",
  },
  {
    description:
      "Using Tailwind CSS and CSS styles, scroll down the background stars, but not the starships.",
  },
  {
    description: "When we are getting to the final page, the starships should land.",
  },
];

export const parallaxChallengeData: Challenge = {
  title: "Parallax Challenge",
  description:
    "In this challenge, participants will employ Taiwind CSS and CSS Styles to make a parallax effect. The main goal is to see the background moving while the startships are on their way to the final destination.",
  items: parallaxChallengeDataItems,
};
