import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Card from '../core/Card';
import randomSourceImage from '../../utils/randomSourceImage';
import Modal from '../core/Modal';
import { useGetListMovie } from '../../hooks';

const ListMovie = () => {
  const [selectedItem, setSelectedItem] = useState();

  const { data } = useGetListMovie({});

  return (
    <>
      <Box
        w="100%"
        mx="auto"
        padding={4}
        sx={{ columnCount: [1, 2, 3], columnGap: '10px' }}
      >
        {data?.map((item, index) => {
          return (
            <Card
              selectedItem={selectedItem}
              key={index}
              data={item}
              onClose={() => setSelectedItem(null)}
              onOpen={() => setSelectedItem(item)}
            />
          );
        })}
      </Box>
    </>
  );
};

export default ListMovie;
