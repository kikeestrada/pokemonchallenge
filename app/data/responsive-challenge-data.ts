import { Challenge, ChallengeItem } from '~/interfaces/challenge';

const responsiveChallengeItemsData: ChallengeItem[] = [
  {
    description:
      'Modify the styles of this website to make it responsive in order to make it visually pleasing regardless of the device used to view it. ',
    documentationUrl: 'https://tailwindcss.com/docs/installation',
  },
  {
    description:
      'change the structure of the page if necessary to make it usable on the smallest devices.',
  },
];

export const responsiveChallengeData: Challenge = {
  title: 'Responsive Challenge',
  description:
    'In this challenge, contestants will have the opportunity to demonstrate their proficiency in creating user interfaces by styling them using the popular CSS framework, Tailwind. ',
  items: responsiveChallengeItemsData,
};
