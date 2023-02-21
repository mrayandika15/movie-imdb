import React, { useState } from 'react';

import FormDrawer from '../core/FormDrawer';
import usePostActor from '../../hooks/usePostActor';

const AddActorOverlay = ({ isOpen, onClose }) => {
  const { mutateFunction, loading, error, data } = usePostActor();

  const handleSubmit = val => {
    mutateFunction({
      variables: { name: val.actorName, age: parseInt(val.actorAge) },
    });
  };

  const actorForm = [
    {
      name: 'actorName',
      label: 'Actor Name',
      type: 'text',
    },
    {
      name: 'actorAge',
      label: 'Actor Age',
      type: 'number',
    },
  ];

  return (
    <FormDrawer
      title="Add Actor"
      isOpen={isOpen}
      onClose={onClose}
      data={actorForm}
      initialValues={{
        actorName: '',
        actorAge: '',
      }}
      onSubmit={val => handleSubmit(val)}
      formId="form-actor"
      isLoading={loading}
    />
  );
};

export default AddActorOverlay;
