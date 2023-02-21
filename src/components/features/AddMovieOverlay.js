import React, { useState } from 'react';

import { useGetListActor } from '../../hooks';

import FormDrawer from '../core/FormDrawer';
import usePostMovie from '../../hooks/usePostMovie';

const AddMovieOverlay = ({ isOpen, onClose }) => {
  const {
    data: actorData,
    error: actorError,
    loading: actorLoading,
  } = useGetListActor();

  const { mutateFunction, data, error, loading } = usePostMovie();

  const handleSubmit = val => {
    mutateFunction({
      variables: {
        name: val.movieName,
        genre: val.movieGenre,
        actorId: val.movieActor,
      },
    });
  };

  const movieForm = [
    {
      name: 'movieName',
      label: 'Movie Name',
      type: 'text',
    },
    {
      name: 'movieGenre',
      label: 'Movie Genre',
      type: 'text',
    },
    {
      name: 'movieActor',
      label: 'Movie Actor',
      type: 'select',
      option: actorData,
      isLoading: actorLoading,
      error: actorError,
    },
  ];

  return (
    <FormDrawer
      title="Add Movies"
      isOpen={isOpen}
      onClose={onClose}
      data={movieForm}
      initialValues={{ movieName: '', movieGenre: '', movieActor: '' }}
      onSubmit={val => handleSubmit(val)}
      formId="form-movie"
      isLoading={loading}
      error={error}
    />
  );
};

export default AddMovieOverlay;
