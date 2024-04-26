import { Challenge, ChallengeItem } from "~/interfaces/challenge";

const peopleChallengeItemsData: ChallengeItem[] = [
  {
    description:
      "Create a service that calls the endpoint for using the People API.",
    documentationUrl: "https://swapi.dev/documentation#people",
  },
  {
    description:
      "Create the interfaces that have the information needed for the app function.",
  },
  {
    description:
      "Create the People Card component for viewing the person information",
  },
  {
    description: "Add the page layout.",
  },
  {
    description:
      "Add more stuff for it to be atractive. Let your imagination fly!",
  },
];

export const PeopleChallengeData: Challenge = {
  title: "People Challenge",
  description:
    "In this challenge, participants will employ the Star Wars API's 'people' endpoint to gather character details, structuring them into card-based layouts. Leveraging Tailwind CSS for styling and integrating ShadCN components for additional UI enhancements, contestants will design a dynamic webpage showcasing Star Wars character information within visually appealing card structures.",
  items: peopleChallengeItemsData,
};
