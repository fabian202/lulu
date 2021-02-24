import React, { useState } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import withData from '../config';

const query = gql`
  query ProfileType($name: String){
    profile_type(name: $name) {
      id
      name
    }
  }
`;

const Test = () => {
  const [name, setName] = useState('Escort');

  const handleChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  }
  return (
    <Query // <- Wrapping the main component with Query component from react-apollo
      query={query}
      variables={{ name }}
      fetchPolicy={'cache-and-network'}
    >
      
      {({ loading, data, error }) => {
        if (error) {
          return <div>Error..</div>;
        }
        return (
          <div>
            <input type="text" name="search" onChange={handleChange} />
            <h1>My Types </h1>
            {data?.profile_type?.map(({ name }) => (
              <span>{name}</span>
            ))}
          </div>
        );
      }}
    </Query>
  );
};

export default withData(Test);
