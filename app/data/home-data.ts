import { Challenge, ChallengeItem } from "~/interfaces";

const HomeDataItems: ChallengeItem[] = [
  {
    description:
      "People: Retrieve information about characters from the Star Wars universe.",
    documentationUrl: "https://swapi.dev/documentation#people",
  },
  {
    description:
      "Planets: Access details about the planets featured in Star Wars.",
    documentationUrl: "https://swapi.dev/documentation#planets",
  },
  {
    description: "Films: Retrieve data about the films in the Star Wars saga.",
    documentationUrl: "https://swapi.dev/documentation#films",
  },
  {
    description:
      "Species: Explore information about different species in the Star Wars galaxy.",
    documentationUrl: "https://swapi.dev/documentation#species",
  },
  {
    description:
      "Vehicles: Access details about vehicles featured in Star Wars.",
    documentationUrl: "https://swapi.dev/documentation#vehicles",
  },
  {
    description:
      "Starships: Retrieve information about starships used in the Star Wars universe.",
    documentationUrl: "https://swapi.dev/documentation#starships",
  },
];

export const HomeData: Challenge = {
  title: "Star Wars Coding Challenge",
  description:
    "Welcome to the Star Wars API Challenge! This challenge task participants with creating a homepage dedicated to all things Star Wars. Using React and Remix, along with the powerful styling of Tailwind CSS and ShadCN components, contestants will craft an immersive webpage that connects users with the vast universe of Star Wars. From character profiles to planet descriptions, this homepage will serve as a gateway to explore various endpoints of the Star Wars API.",
  items: HomeDataItems,
};

const AcknowledgementsDataItems: ChallengeItem[] = [
  {
    description: "React",
    documentationUrl: "https://react.dev/",
  },
  {
    description: "Remix Framework",
    documentationUrl: "https://remix.run/docs/en/main/start/quickstart",
  },
  {
    description: "Tailwind CSS",
    documentationUrl: "https://tailwindcss.com/docs/installation",
  },
  {
    description: "ShadCN Components",
    documentationUrl: "https://ui.shadcn.com/docs",
  },
  {
    description: "Star Wars API",
    documentationUrl: "https://swapi.dev/documentation",
  },
  {
    description: "TypeScript",
    documentationUrl: "https://www.typescriptlang.org/docs/",
  },
];

export const AcknowledgementsData: Challenge = {
  title: "Acknowledgements Needed for this Challenge",
  description:
    "This is the Essential guidance for participants embarking on the Star Wars API Challenge. Familiarity with key technologies such as React, Remix, Tailwind CSS, ShadCN components, and the Star Wars API is paramount for successfully completing the challenge. Below are brief descriptions outlining the necessary skills and knowledge required to excel in this endeavor.",
  items: AcknowledgementsDataItems,
};
