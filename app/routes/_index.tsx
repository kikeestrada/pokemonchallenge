import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { AcknowledgementsData, HomeData } from "~/data/home-data";
export const meta: MetaFunction = () => {
  return [
    { title: "Home | Star Wars Challenge" },
    {
      property: "og:title",
      content: "Home | Star Wars Challenge",
    },
    {
      name: "description",
      content: HomeData.description,
    },
  ];
};
export default function Index() {
  return (
    <div>
      <h1 className="mb-5 text-2xl font-bold">{HomeData.title}</h1>
      <hr className="mb-10" />
      <p className="mb-10 font-light text-gray-700">{HomeData.description}</p>
      <hr className="mb-10" />
      <p className="font-light text-gray-500">
        Some of the things you are going to do:
      </p>
      <div className="mt-10 px-10 font-light text-gray-700">
        <ul className="list-disc">
          {HomeData.items.map((item, index) => (
            <li key={index}>
              {item.description}{" "}
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
      <p className="mb-10 mt-10 text-xl font-medium">
        <span className="font-bold">LITTLE REMINDER:</span> Have fun!
      </p>
      <hr className="mb-10" />
      <h2 className="mb-5 text-2xl font-bold">{AcknowledgementsData.title}</h2>
      <hr className="mb-10" />
      <p className="mb-10 font-light text-gray-700">
        {AcknowledgementsData.description}
      </p>
      <hr className="mb-10" />

      <div className="mb-10 px-10 font-light text-gray-700">
        <ul className="list-disc">
          {AcknowledgementsData.items.map((item, index) => (
            <li key={index}>
              {item.description}{" "}
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
  );
}
