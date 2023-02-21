import { gql, useQuery } from '@apollo/client';
import React from 'react';

const GET_ACTORS = gql`
  {
    actors {
      id
      name
      age
    }
  }
`;

const useGetListActor = () => {
  const { data, loading, error } = useQuery(GET_ACTORS);

  return { data: data?.actors || [], loading, error };
};

export default useGetListActor;
