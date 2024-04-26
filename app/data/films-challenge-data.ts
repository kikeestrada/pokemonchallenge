import { Challenge, ChallengeItem } from "~/interfaces";

const filmsChallengeItemData: ChallengeItem[] = [
  {
    description:
      "Create a service that calls the endpoint for using the Films API. This service should get the episode id",
    documentationUrl: "https://swapi.dev/api/films/",
  },
  {
    description:
      "Create a tab component where you display each film episode extracted in the last step.",
    documentationUrl: "",
  },
  {
    description:
      "Create a service that calls the endpoint for using the Films API with the episode id as parameter to get the film information like image, title, director, producer, release date. The information will be added inside the tabs content. Here you can design the interface and add tailwind class with your own styles.",
    documentationUrl: "https://swapi.dev/api/films/1",
  },
  {
    description:
      "Create a service that calls the endpoint for using the Films API with the episode id as parameter to get the characters list; loading each one in a different component (you can choose between Accordion, Combobox, Select or html list). When the user select each one, the information related at selected will be showed in a dialog. You can design the component selected and the dialog with your own styles. ",
    documentationUrl: "https://swapi.dev/api/films/1",
  },
];

export const filmsData: Challenge = {
  title: "Films Challenge",
  description:
    "In this challenge, participants will employ the Star Wars API's 'films' endpoint to gather film details, structuring them into card-based layouts. Leveraging Tailwind CSS for styling and integrating ShadCN components for additional UI enhancements, contestants will design a dynamic webpage showcasing Star Wars film information within visually appealing card structures.",
  items: filmsChallengeItemData,
};
