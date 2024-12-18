import { Box, Heading, Text, Image } from "@chakra-ui/react";

const About = () => {
  return (
    <Box bg="black" color="white" minHeight="100vh" p={8} textAlign="center">
      <Box mb={6}>
        <Image
          src="/images/about.png"
          alt="Anna Madzihon"
          borderRadius="full"
          boxSize="350px"  
          mx="auto" 
        />
      </Box>

      <Heading fontSize="3xl" fontWeight="bold" mb={4}>About Me</Heading> 

      <Text fontSize="2xl" mb={4}>
        Anna Madzihon
      </Text>

      <Text fontSize="lg" maxW="800px" mx="auto">
        A developer originating from Ukraine. Currently studying in IADT, looking for new opportunities in the Development field in Dublin.
      </Text>
    </Box>
  );
};

export default About;
