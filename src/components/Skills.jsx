import React from 'react';
import { Container, Heading, HStack } from '@chakra-ui/react';
import SkillCard from './SkillCard';
import adobexd from '../assets/adobexd.png';
import c from '../assets/c.png';
import cpp from '../assets/c++.png';
import chakraui from '../assets/chakra-ui.png';
import css from '../assets/css.png';
import git from '../assets/git.svg';
import html from '../assets/html.png';
import js from '../assets/js.png';
import react from '../assets/react.png';

const Skills = () => {
  const skills = [
    {
      id: 1,
      image: c,
    },
    {
      id: 2,
      image: cpp,
    },
    {
      id: 3,
      image: html,
    },
    {
      id: 4,
      image: css,
    },
    {
      id: 5,
      image: js,
    },
    {
      id: 6,
      image: react,
    },
    {
      id: 7,
      image: chakraui,
    },
    {
      id: 8,
      image: adobexd,
    },
    {
      id: 9,
      image: git,
    },
  ];

  return (
    <div
      id="skills"
      style={{ paddingBlock: '70px', backgroundColor: '#f5f5f5' }}
    >
      <Container maxW={'container.xl'}>
        <Heading textAlign={'center'}>Skills</Heading>
        <HStack
          wrap={'wrap'}
          justifyContent={'space-evenly'}
          marginBlock={'50px'}
          gap={'15px'}
        >
          {skills.map(i => (
            <SkillCard key={i.id} image={i.image} />
          ))}
        </HStack>
      </Container>
    </div>
  );
};

export default Skills;
