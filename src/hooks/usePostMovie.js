import { gql, useMutation } from '@apollo/client';
import React from 'react';

const MOVIE_MUTATION = gql`
  mutation createMovies($name: String!, $genre: String!, $actorId: ID!) {
    addMovie(name: $name, genre: $genre, actorId: $actorId) {
      id
      name
      genre
      actor {
        id
        name
        age
      }
    }
  }
`;
const usePostMovie = () => {
  const [mutateFunction, { data, loading, error }] =
    useMutation(MOVIE_MUTATION);

  return { data, loading, error, mutateFunction };
};

export default usePostMovie;
