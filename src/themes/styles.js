import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: props => ({
    body: {
      color: mode('white', 'black')(props),
      bg: mode('black', 'white')(props),
    },
    button: {
      _hover: {
        bg: mode('gray.600', 'gray.200')(props),
        color: mode('white', 'black')(props),
      },
    },
  }),
};

export default styles;
