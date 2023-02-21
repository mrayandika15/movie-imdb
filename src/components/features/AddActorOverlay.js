import React from 'react';
import CustomDrawer from '../core/CustomDrawer';
import { FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';

const AddActorOverlay = ({ isOpen, onClose }) => {
  return (
    <CustomDrawer title="Add Actor" isOpen={isOpen} onClose={onClose}>
      <Stack>
        <FormControl>
          <FormLabel>Actor Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Actor Age</FormLabel>
          <Input type="text" />
        </FormControl>
      </Stack>
    </CustomDrawer>
  );
};

export default AddActorOverlay;
