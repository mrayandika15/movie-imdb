import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import Modal from './Modal';

const Card = ({ onOpen, data, selectedItem, onClose }) => {
  return (
    <>
      <Box
        rounded="2xl"
        bgPosition="center"
        bgSize="cover"
        position="relative"
        overflow="hidden"
        my="10px"
        cursor="pointer"
        onClick={onOpen}
        as={motion.div}
        layoutId={`card-${data?.id}`}
      >
        <Image src={data?.image} />
        <Box position="absolute" w="full" h="full" inset="0" p="5">
          <Heading>{data?.name}</Heading>
          <Text fontWeight="semibold">{data?.genre}</Text>
        </Box>
      </Box>

      <Modal selectedItem={selectedItem} onClose={onClose} />
    </>
  );
};

export default Card;
