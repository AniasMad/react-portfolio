import { Link } from "react-router-dom";
import { Box, Image, Text, Badge, VStack, HStack } from "@chakra-ui/react";

const ProjectCard = ({ project }) => {
  const { title, description, technologies, images, slug } = project;

  return (
    <Link to={`/projects/${slug}`}>
      <Box
        bg="gray.900"
        color="white"
        borderRadius="md"
        overflow="hidden"
        boxShadow="md"
        _hover={{ transform: "scale(1.02)", transition: "transform 0.2s ease-in-out" }}
      >
        <Image src={images.gallery[0]} alt={`${title} preview`} objectFit="cover" w="100%" h="300px" />
        <VStack p={4} align="start" spacing={2}>
          <Text fontSize="xl" fontWeight="bold">
            {title}
          </Text>
          <Text fontSize="sm" noOfLines={3}>
            {description}
          </Text>
          <HStack wrap="wrap" spacing={2} mt={2}>
            {technologies.map((tech, index) => (
              <Badge key={index} colorScheme="blue">
                {tech}
              </Badge>
            ))}
          </HStack>
        </VStack>
      </Box>
    </Link>
  );
};

export default ProjectCard;
