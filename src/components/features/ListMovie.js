import { Box, Skeleton, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Card from '../core/Card';
import randomSourceImage from '../../utils/randomSourceImage';
import Modal from '../core/Modal';
import { useGetListMovie } from '../../hooks';
import { AnimatePresence, motion } from 'framer-motion';

const ListMovie = () => {
  const [selectedItem, setSelectedItem] = useState();

  const { data, loading } = useGetListMovie({});

  return (
    <AnimatePresence>
      {loading ? (
        <Box justifyContent="center" w="full" display="flex" py="2">
          <Spinner size="xl" color="red.700" />
        </Box>
      ) : (
        <Box
          w="100%"
          mx="auto"
          padding={4}
          sx={{ columnCount: [1, 2, 3], columnGap: '10px' }}
          as={motion.div}
        >
          {data?.map((item, index) => {
            return (
              <Card
                selectedItem={selectedItem}
                key={index}
                data={item}
                onOpen={() => setSelectedItem(item)}
              />
            );
          })}
        </Box>
      )}

      <Modal
        selectedItem={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </AnimatePresence>
  );
};

export default ListMovie;
