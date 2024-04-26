import { Challenge, ChallengeItem } from '~/interfaces/challenge';

const speciesChallengeItemsData: ChallengeItem[] = [
  {
    description: 'Design the table component.',
  },
  {
    description: 'Design the row component with its functionality.',
  },

  {
    description:
      'Create a service that gets the information from the API endpoint. Remember to paginate the information that you receive from the API.',
    documentationUrl: 'https://swapi.dev/documentation#species',
  },
  {
    description:
      'Call the service from server, and render the table. Remember to use Query params for the pagination.',
  },
  {
    description:
      'Add more stuff for it to be atractive. Let your imagination fly!',
  },
];

export const speciesChallengeData: Challenge = {
  title: 'Species Challenge',
  description:
    "In this challenge, participants will use the Star Wars API's 'Species' endpoint to gather species details, presented in a structured table format. Using React and Remix for frontend development, contestants will create an interactive webpage where users can explore species information efficiently. A key aspect of the challenge will be implementing a paginated base table (10 items per page) with row-click functionality to display statistics and details about the selected species, along with associated characters. With Tailwind CSS for styling and ShadCN components for UI enhancements, participants will craft a visually appealing and functional webpage that offers a comprehensive view of Star Wars species data.",
  items: speciesChallengeItemsData,
};
