import { Box, Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box bg="black" w="100%" p={4}>
      <Flex justify="center" align="center">
        <Link to="/">
          <Button variant="link" color="white" mx={4}>
            Projects
          </Button>
        </Link>
        <Box color="white">|</Box>
        <Link to="/about">
          <Button variant="link" color="white" mx={4}>
            About
          </Button>
        </Link>
        <Box color="white">|</Box>
        <Link to="/contacts">
          <Button variant="link" color="white" mx={4}>
            Contacts
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
