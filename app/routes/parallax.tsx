import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { parallaxChallengeData } from "~/data";
export const meta: MetaFunction = () => {
  return [
    { title: `${parallaxChallengeData.title} | Star Wars Challenge` },
    {
      property: "og:title",
      content: `${parallaxChallengeData.title} | Star Wars Challenge`,
    },
    {
      name: "description",
      content: parallaxChallengeData.description,
    },
  ];
};
const parallax = () => {
  return (
    <div>
      <h1 className="mb-5 text-2xl font-bold">{parallaxChallengeData.title}</h1>
      <hr className="mb-10" />
      <span className="font-light text-gray-700">
        {parallaxChallengeData.description}
      </span>

      <div className="mt-10 px-10 font-light text-gray-700">
        <ul className="list-disc">
          {parallaxChallengeData.items.map((item, index) => (
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
    </div>
 )
}

export default parallax
