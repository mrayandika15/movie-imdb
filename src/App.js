import { ChakraProvider, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import {
  AddActorOverlay,
  AddMovieOverlay,
  ListMovie,
  Navbar,
} from './components';

import { theme } from './themes';

function App() {
  const {
    isOpen: isMovies,
    onOpen: onMovies,
    onClose: onCloseMovies,
  } = useDisclosure();

  const {
    isOpen: isActor,
    onClose: onCloseActor,
    onOpen: onActor,
  } = useDisclosure();

  return (
    <ChakraProvider theme={theme}>
      <Navbar handleMovie={onMovies} handleActor={onActor} />

      <AddMovieOverlay isOpen={isMovies} onClose={onCloseMovies} />
      <AddActorOverlay isOpen={isActor} onClose={onCloseActor} />

      <ListMovie />
    </ChakraProvider>
  );
}

export default App;
