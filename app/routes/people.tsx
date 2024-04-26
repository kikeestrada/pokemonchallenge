import { MetaFunction, json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { CharacterCard, CharacterSettingsModal } from '~/components/characters';
import { PeopleChallengeData } from '~/data';
import { getCharacters } from '~/services';

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
  const { characters } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1 className="mb-5 text-2xl font-bold">{PeopleChallengeData.title}</h1>
      <hr className="mb-10" />
      <span className="font-light text-gray-700">
        {PeopleChallengeData.description}
      </span>

      <div className="mt-10 px-10 font-light text-gray-700">
        <ul className="list-disc">
          {PeopleChallengeData.items.map((item, index) => (
            <li key={index}>
              {item.description}{' '}
              {item.documentationUrl && (
                <Link
                  to={item.documentationUrl}
                  className="text-sky-700 hover:underline"
                >
                  Review documentation.
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="my-10 flex flex-row items-center gap-2 border-b pb-10">
        <h2 className="text-xl font-medium">Example of the final Result:</h2>
        <CharacterSettingsModal />
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {characters.map((character, index) => (
          <CharacterCard key={index} character={character} />
        ))}
      </div>
    </div>
  );
}
