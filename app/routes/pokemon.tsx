import { MetaFunction, json } from '@remix-run/node';
import { PeopleChallengeData } from '~/data';
import { getCharacters } from '~/services';
import PokemonComponent from '~/components/pokemon/PokemonComponent';

export async function loader() {
  const characters = await getCharacters();
  return json({ characters });
}

export const meta: MetaFunction = () => {
  return [
    { title: `${PeopleChallengeData.title} | Star Wars Challenge` },
    {
      property: 'og:title',
      content: `${PeopleChallengeData.title} | Star Wars Challenge`,
    },
    {
      name: 'description',
      content: PeopleChallengeData.description,
    },
  ];
};
export default function People() {
 

  return (
    <div>
      <h1 className="mb-5 text-2xl font-bold">Pokemon Challenge</h1>
      <hr className="mb-10" />
      <p className="font-light text-gray-700">
      Hello! This is the test project you requested as a technical test for the developer position 
      at your company. As initially agreed, I was supposed to develop the functionality to consume 
      a Star Wars API, but since it was not working correctly, we proceeded to carry out the exercise with the Pokémon API.
      </p>
      <PokemonComponent />
    </div>
  );
}
