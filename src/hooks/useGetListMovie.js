import React, { useEffect } from 'react';

import { useQuery, gql } from '@apollo/client';
import randomSourceImage from '../utils/randomSourceImage';

const GET_LIST_MOVIES = gql`
  query {
    movies {
      id
      name
      genre
    }
  }
`;

const useGetListMovie = () => {
  const { data, loading, error } = useQuery(GET_LIST_MOVIES);

  const movies = data?.movies;

  const [transformMovies, setTransformMovies] = React.useState([]);

  useEffect(() => {
    if (movies?.length > 0) {
      setTransformMovies(
        movies?.map(item => ({
          ...item,
          image: randomSourceImage(),
        }))
      );
    }
  }, [movies]);

  console.log(transformMovies);

  return { data: transformMovies, loading, error };
};

export default useGetListMovie;
