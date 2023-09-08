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
import github from '../assets/github.png';
import firebase from '../assets/firebase.png';

const Skills = () => {
  const skills = [
    {
      id: 1,
      image: c,
      title: 'C',
    },
    {
      id: 2,
      image: cpp,
      title: 'C++',
    },
    {
      id: 3,
      image: html,
      title: 'HTML',
    },
    {
      id: 4,
      image: css,
      title: 'CSS',
    },
    {
      id: 5,
      image: js,
      title: 'JavaScript',
    },
    {
      id: 6,
      image: react,
      title: 'React.js',
    },
    {
      id: 7,
      image: chakraui,
      title: 'Chakra Ui',
    },
    {
      id: 8,
      image: adobexd,
      title: 'Adobe Xd',
    },
    {
      id: 9,
      image: git,
      title: 'Git',
    },
    {
      id: 10,
      image: github,
      title: 'GitHub',
    },
    {
      id: 11,
      image: firebase,
      title: 'Firebase',
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
          justifyContent={'center'}
          marginBlock={'50px'}
          gap={'20px'}
        >
          {skills.map(i => (
            <SkillCard key={i.id} image={i.image} title={i.title} />
          ))}
        </HStack>
      </Container>
    </div>
  );
};

export default Skills;
