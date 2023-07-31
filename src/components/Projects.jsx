import { Container, Heading, HStack } from '@chakra-ui/react';
import React from 'react';
import ProjectCard from './ProjectCard';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Crypto Coin',
      image: project1,
      description:
        'An application to track the stock prices of Crypto currencies like Bitcoin, Ethereum, Solana etc.',
      githubLink: 'https://github.com/alok-96/crypto-coin',
      url: 'https://crypto-coin-alok96.netlify.app/',
    },
    {
      id: 2,
      name: 'Mp4Point',
      image: project2,
      description:
        'Dual theme frontend UI for the platform to upload and watch the videos related to tech, education, dance, recipes, gaming etc.',
      githubLink: 'https://github.com/alok-96/Mp4Point',
      url: 'https://mp4point.netlify.app/',
    },
    {
      id: 3,
      name: 'Netflix Clone',
      image: project3,
      description:
        'This is the responsive clone of the homepage of Netflix. Tech stack to develop this website are HTML5 and CSS3.',
      githubLink: 'https://github.com/alok-96/netflix-clone',
      url: 'https://netflix-clone-alok96.netlify.app/',
    },
    {
      id: 4,
      name: 'Musify',
      image: project4,
      description:
        'This is a simple, responsive music player contining 10 songs. Tech stack to develop this website are HTML, CSS and JAVASCRIPT.',
      githubLink: 'https://github.com/alok-96/Musify',
      url: 'https://alok-96.github.io/Musify/',
    },
    {
      id: 5,
      name: 'Portfolio',
      image: project5,
      description:
        'Portfolio website. Tech stack to develop this website is React, ChakraUI, HTML, CSS and JAVASCRIPT.',
      githubLink: 'https://github.com/alok-96/portfolio',
      url: 'https://alok96.netlify.app',
    },
  ];
  return (
    <div id="work" style={{ paddingBlock: '70px' }}>
      <Container maxW={'container.xl'}>
        <Heading textAlign={'center'}>Projects</Heading>
        <HStack
          wrap={'wrap'}
          justifyContent={'space-evenly'}
          marginBlock={'50px'}
        >
          {projects.map(i => (
            <ProjectCard
              key={i.id}
              id={i.id}
              name={i.name}
              image={i.image}
              description={i.description}
              githubLink={i.githubLink}
              url={i.url}
            />
          ))}
        </HStack>
      </Container>
    </div>
  );
};

export default Projects;
