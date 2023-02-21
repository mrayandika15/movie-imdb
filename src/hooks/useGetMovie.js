import { gql, useQuery } from '@apollo/client';
import React from 'react';

const GET_MOVIE = gql`
  query getMovie($id: ID!) {
    movie(id: $id) {
      name
      name
      genre
      id
      actor {
        id
        name
        age
      }
    }
  }
`;

const useGetMovie = ({ id }) => {
  const { data, loading, error } = useQuery(GET_MOVIE, { variables: { id } });

  return { data: data?.movie, loading, error };
};

export default useGetMovie;
