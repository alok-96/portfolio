import { Container, Heading, HStack } from '@chakra-ui/react';
import React from 'react';
import ProjectCard from './ProjectCard';
import vartalaap from '../assets/vartalaap.png';
import cryptocoin from '../assets/cryptocoin.png';
import todoapp from '../assets/todoapp.png';
import netflix from '../assets/netflix.png';
import musify from '../assets/musify.png';
import qrcode from '../assets/qrcode.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Vartalaap',
      image: vartalaap,
      description:
        'A chat application that enables users to exchange messages and communicate with each other in real-time. Tech stack - React.js, CSS, and Firebase.',
      githubLink: 'https://github.com/alok-96/vartalaap',
      url: 'https://vartalaap.pages.dev/',
    },
    {
      id: 2,
      name: 'Crypto Coin',
      image: cryptocoin,
      description:
        'An application to track the stock prices of Crypto currencies like Bitcoin, Ethereum, Solana etc. Tech stack - React.js, ChakraUI, HTML, CSS, and JavaScript.',
      githubLink: 'https://github.com/alok-96/crypto-coin',
      url: 'https://crypto-coin-alok96.netlify.app/',
    },
    {
      id: 3,
      name: 'To-Do App',
      image: todoapp,
      description:
        'Task managing web application to help user to stay organized for his on day to day basis. Tech stack - React.js and CSS',
      githubLink: 'https://github.com/alok-96/to-do-list',
      url: 'https://to-do-app-alok96.netlify.app/',
    },
    {
      id: 4,
      name: 'Netflix Clone',
      image: netflix,
      description:
        'This is the responsive clone of the homepage of Netflix. Tech stack - HTML, CSS and JavaScript.',
      githubLink: 'https://github.com/alok-96/netflix-clone',
      url: 'https://netflix-clone-alok96.netlify.app/',
    },
    {
      id: 5,
      name: 'Musify',
      image: musify,
      description:
        'This is a simple, responsive music player contining 10 songs. Tech stack - HTML, CSS and JavaScript.',
      githubLink: 'https://github.com/alok-96/Musify',
      url: 'https://alok-96.github.io/Musify/',
    },
    {
      id: 6,
      name: 'QR Code Generator',
      image: qrcode,
      description:
        'This is a simple JavaScript app to generate QR Code for any given data or website URL. Tech stack -  HTML, CSS and JavaScript.',
      githubLink: 'https://github.com/alok-96/QR-Code-Generator',
      url: 'https://alok-96.github.io/QR-Code-Generator/',
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
