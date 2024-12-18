import { useParams, Navigate } from "react-router-dom";
import { Box, Heading, Text, Image, Badge, Stack, HStack, Button } from "@chakra-ui/react";
import projectsJSON from "../../data/projects.json";
import { useState } from "react";

const Show = () => {
  const { slug } = useParams();
  const project = projectsJSON.find((project) => project.slug === slug);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return <Navigate to="/404" />;

  const galleryImages = project.images?.gallery || [];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <Box bg="black" color="white" minHeight="100vh" p={8}>

      <Box textAlign="center" mb={6}>
        <HStack spacing={8} align="start" justify="space-between" mb={6}>

          <Box flex="1" maxW="600px">
            <Image
              src={`/${project.images.gif}`}
              alt={`${project.title} gif`}
              borderRadius="md"
              width="100%"
              objectFit="contain"
              border="4px solid white"
              p={2}
            />
          </Box>

          <Box flex="2" maxW="600px" pl={6}>
            <Heading 
              size="2xl" 
              fontSize="6xl" 
              mb={6} 
              textAlign="left"
            >
              {project.title}
            </Heading>
            <Text fontSize="lg" textAlign="left" mb={4}>
              {project.description}
            </Text>
            <Stack direction="row" wrap="wrap" spacing={2} mb={6}>
              {project.technologies.map((tech, index) => (
                <Badge key={index} colorScheme="teal">
                  {tech}
                </Badge>
              ))}
            </Stack>

            {project.link && (
              <Button
              as="a"
              href={project.link}
              target="_blank"
              color="white"
              border="2px solid white" 
              _hover={{
                borderColor: "teal.300", 
                bg: "transparent",
              }}
              bg="transparent"
            >
              Visit Project
            </Button>
            
            
            )}
          </Box>
        </HStack>
      </Box>

      <Box mt={8} textAlign="center">
        <Heading size="2xl" fontSize="3xl" pb={4}>
          Gallery
        </Heading>

        <Box position="relative" width="100%" maxW="900px" mx="auto"> 
          <Image
            src={`/${galleryImages[currentImageIndex]}`}
            alt={`${project.title} screenshot ${currentImageIndex + 1}`}
            borderRadius="md"
            objectFit="cover"
            width="100%"
            height="auto"
            border="4px solid white"
            p={2}
          />
        </Box>

        <HStack spacing={4} justify="center" mt={4}>
          <Button onClick={prevImage} colorScheme="teal" variant="outline">
            Previous
          </Button>
          <Button onClick={nextImage} colorScheme="teal" variant="outline">
            Next
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default Show;
