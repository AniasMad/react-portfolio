import { useState, useEffect } from 'react';
import { Box, SimpleGrid, Text, Image } from '@chakra-ui/react';
import ProjectCard from '../components/ProjectCard.js'; 
import projectsJSON from '../data/projects.json'; 

const Home = () => {
  const [projectsList, setProjectsList] = useState(projectsJSON);

  useEffect(() => {
    setProjectsList(projectsJSON);
  }, []);

  return (
    <Box bg="black" color="white" minHeight="200vh" p={5}>
      <Box textAlign="center" mb={8}>
        <Image
          src="/images/profile.png" 
          alt="Profile"
          borderRadius="full"
          boxSize="350px"
          mx="auto"
          mb={4}
        />
        <Text fontSize="3xl" fontWeight="bold">My Portfolio</Text>
        <Text fontSize="lg" mt={2}>By Anna Madzihon</Text>
      </Box>

      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6}>
        {projectsList.map((project) => (
            <ProjectCard key={project.slug} project={project} />
        ))}
        </SimpleGrid>

    </Box>
  );
};

export default Home;
