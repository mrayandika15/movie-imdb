import { gql, useMutation } from '@apollo/client';
import React from 'react';

const ACTOR_MUTATION = gql`
  mutation createActor($name: String!, $age: Int!) {
    addActor(name: $name, age: $age) {
      id
      name
      age
    }
  }
`;
const usePostActor = () => {
  const [mutateFunction, { data, loading, error }] =
    useMutation(ACTOR_MUTATION);

  return { data, loading, error, mutateFunction };
};

export default usePostActor;
