import { Challenge, ChallengeItem } from "~/interfaces/challenge";

const vehiclesChallengeItemsData: ChallengeItem[] = [
  {
    description:
      "Information collection: Use the API to collect data about vehicles and other elements of the Star Wars universe related to vehicles.",
    documentationUrl: "https://swapi.dev/documentation#vehicles",
  },
  {
    description:
      "Data analysis: Perform data analysis on the information obtained from the API, to create the interfaces and whatever you need for the other steps.",
  },
  {
    description:
      "Data presentation: show the vehicles and add filters so that the user can find them in an easier way, also when the user selects a vehicle show him the most relevant information linked to that vehicle.",
  },
];

export const vehiclesChallengeData: Challenge = {
  title: "Vehicles Challenge",
  description:
    "In this challenge, contestants will use the 'vehicles' endpoint of the Star Wars API to collect vehicle information and structure it into content-driven layouts. Leveraging Tailwind CSS for styling and integrating ShadCN components for additional UI enhancements, contestants will design a dynamic web page that displays information about Star Wars vehicles in a visually appealing way.",
  items: vehiclesChallengeItemsData,
};
