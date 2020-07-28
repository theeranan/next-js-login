import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ALL_CHARACTERS } from '../gql/allCharacters';
import { Button } from 'antd';
const index = () => {
  const [state, setstate] = useState();

  var data = () => {
    const { loading, error, data } = useQuery(ALL_CHARACTERS);
    if (error) return <h1>Error</h1>;
    if (loading) return <h1>Loading...</h1>;
    return (
      <>
        <h1>
          <h3>
            Setting up Apollo GraphQL in Next.js with Server Side Rendering
          </h3>
        </h1>
        <h3>Test Ant design</h3>
        <div>
          {data.characters.results.map((data: any) => (
            <ul key={data.id}>
              <li>{data.name}</li>
            </ul>
          ))}
        </div>
      </>
    );
  };
  return <>{data()}</>;
};
export default index;
