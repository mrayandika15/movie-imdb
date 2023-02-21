import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import useGetMovie from '../../hooks/useGetMovie';

const Modal = ({ selectedItem, onClose }) => {
  const { data } = useGetMovie({ id: selectedItem?.id });

  if (!selectedItem) {
    return <></>;
  }

  if (selectedItem)
    return (
      <Box
        w="100vw"
        h="100vh"
        inset="0"
        position="fixed"
        zIndex="modal"
        bg="blackAlpha.300"
        display="flex"
        alignItems="center"
        justifyContent="center"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.12 } }}
        as={motion.div}
        overflow="hidden"
      >
        <Box
          w="700px"
          h="500px"
          overflow="hidden"
          bg="black"
          rounded="2xl"
          as={motion.div}
          layoutId={`card-${selectedItem.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          position="relative"
        >
          <Image
            w="100%"
            h="350px"
            src={selectedItem?.image}
            objectFit="cover"
            as={motion.img}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.14 } }}
            exit={{ opacity: 0 }}
          />

          <Box
            position="absolute"
            w="full"
            h="full"
            inset="0"
            p="5"
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.14 } }}
            exit={{ opacity: 0 }}
          >
            <Heading>{selectedItem?.name}</Heading>
            <Text fontWeight="semibold">{selectedItem?.genre}</Text>
          </Box>

          <Box pt="5" px="5">
            <Heading>Actor</Heading>
            <Text>
              {data?.actor?.name}, {data?.actor?.age}
            </Text>
          </Box>
        </Box>
      </Box>
    );
};

export default Modal;
