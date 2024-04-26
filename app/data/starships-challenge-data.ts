import { Challenge, ChallengeItem } from "~/interfaces/challenge";

const starshipsChallengeItemsData: ChallengeItem[] = [
  {
    description:
      "Information Gathering: Use the API to gather data on starships and other starship-related elements of the Star Wars universe.",
    documentationUrl: "https://swapi.dev/documentation#starships",
  },
  {
    description:
      "Data analysis: Perform data analysis on the information obtained from the API, to create the interfaces and whatever you need for the other steps.",
  },
  {
    description:
      "Data presentation: Create a List Table with all starships and add the function to display more specific starship information within a content layout component.",
  },
];

export const starshipsChallengeData: Challenge = {
  title: "Starships Challenge",
  description:
    "In this challenge, participants will use the 'starships' endpoint of the Star Wars API to collect starship information and structure it into content-based layouts. Leveraging Tailwind CSS for styling and integrating ShadCN components for additional user interface enhancements, contestants will design a dynamic web page that displays Star Wars starship information in a visually appealing way.",
  items: starshipsChallengeItemsData,
};
