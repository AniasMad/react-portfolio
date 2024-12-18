import { Box, Heading, Text, Image } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box bg="black" color="white" minHeight="100vh" p={8} textAlign="center">
      <Box mb={6}>
        <Image
          src="/images/contact.png"  
          alt="Contact"
          borderRadius="full"
          boxSize="350px"
          mx="auto"  
        />
      </Box>

      <Heading fontSize="3xl" fontWeight="bold" mb={4}>Contact Me</Heading> 

      <Text fontSize="lg" maxW="800px" mx="auto">
        Email: annamadzihon@gmail.com
      </Text>
    </Box>
  );
};

export default Contact;
