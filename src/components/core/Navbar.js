import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { BsSearch } from 'react-icons/bs';
import ColorModeSwitcher from './ColorModeSwitcher';

const Navbar = ({ handleMovie, handleActor }) => {
  const color = useColorModeValue('white', 'black');

  return (
    <Box
      w="full"
      h="80px"
      shadow="xl"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p="5"
      position="relative"
    >
      <Heading fontSize="2xl" fontWeight="bold" color="#E50914">
        Movies
      </Heading>

      <Flex gap="5px" alignItems="center">
        <Button variant="primary" size="xs" onClick={handleMovie}>
          Add Movies
        </Button>

        <Button variant="primary" size="xs" onClick={handleActor}>
          Add Actor
        </Button>
        <ColorModeSwitcher />
      </Flex>
    </Box>
  );
};

export default Navbar;
