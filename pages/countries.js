import { gql } from "@apollo/client";
import client from "../apollo-client";

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });

  return {
    props: {
      countries: data.countries.slice(0, 4),
    },
  };
}

export default function Countries({ countries }) {
  return (
    <div>
      <ul>
        {countries.map((country, index) => {
          return (
            <li key={index}>
              <p>{country.code}</p>
              <p>{country.name}</p>
              <p>{country.emoji}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
