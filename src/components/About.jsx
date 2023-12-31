import { Center, Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const about = () => {
  return (
    <div
      style={{ backgroundColor: '#f5f5f5', paddingBlock: '70px' }}
      id="about"
    >
      <Container maxW={'container.lg'}>
        <Heading paddingBottom={'50px'} textAlign={'center'}>
          About Me
        </Heading>
        <Text
          fontSize={[ '15px', '16px', '16.5px']}
          letterSpacing={'1px'}
          textAlign={['center', 'center', 'center']}
        >
          Hey, I am Alok Dwivedi, final year student of Computer Science &
          Engineering from Rustamji Institute of Technology, B.S.F. Academy,
          Gwalior, Madhya Pradesh. <br /> <br /> I am a Front-End developer
          having experience in HTML, CSS and JavaScript and React.js . I like to build real time projects that solves the problems
          of individual and as well as society. I also like to solve Data Structure and
          Algorithm's problem at various platforms like GFG, LeetCode and
          HackerRank. Apart from that I am core team member at  RJIT Geeks(Programming Club at RJIT).
        </Text>
        <Center>
          <a href='https://docs.google.com/document/d/1iH-2AKjGJVFmOpirEr3Ey2jUjqg_lHohSHPm8xSw_rw/edit?usp=sharing' target="blank">
            <button className="btn" style={{ fontSize: '16px' }}>
              Get Resume
            </button>
          </a>
        </Center>
      </Container>
    </div>
  );
};

export default about;
