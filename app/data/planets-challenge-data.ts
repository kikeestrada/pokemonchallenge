import { Challenge, ChallengeItem } from "~/interfaces/challenge";

const planetsChallengeItemsData: ChallengeItem[] = [
  {
    description:
      "Information gathering: Use the API to gather data about planets and other planet-related elements of the Star Wars universe.",
    documentationUrl: "https://swapi.dev/documentation#planets",
  },
  {
    description:
      "Data analysis: Performs data analysis on the information obtained from the API, to create interfaces and select data that can be used to make comparisons between planets.",
  },
  {
    description:
      "Data presentation: show the data in a comparative way, you can use graphs or whatever you consider necessary to make it attractive to the eye, you can also add a function to show more detailed information of the planets. If you want to add something extra it is up to your imagination.",
  },
];

export const planetsChallengeData: Challenge = {
  title: "Planets Challenge",
  description:
    "In this challenge, contestants will use the Star Wars API endpoint 'planets' to collect information about planets and structure it into section-based layouts. Leveraging Tailwind CSS for styling and integrating ShadCN components for additional UI enhancements, contestants will design a dynamic web page that displays information about the Star Wars planets in a visually appealing way.",
  items: planetsChallengeItemsData,
};
