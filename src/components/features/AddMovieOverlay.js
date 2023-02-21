import React from 'react';
import CustomDrawer from '../core/CustomDrawer';
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react';

const AddMovieOverlay = ({ isOpen, onClose }) => {
  return (
    <CustomDrawer title="Add Movies" isOpen={isOpen} onClose={onClose}>
      <Stack gap="12px">
        <FormControl>
          <FormLabel>Movie Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Movie Genre</FormLabel>
          <Input type="text" />
        </FormControl>

        <Stack>
          <Text fontWeight="semibold">Select an Actor</Text>
          <Select>
            <option style={{ color: 'black' }} value="option1">
              Option 1
            </option>
          </Select>
        </Stack>
      </Stack>
    </CustomDrawer>
  );
};

export default AddMovieOverlay;
