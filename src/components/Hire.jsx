import { Container, Heading, Stack, Box } from '@chakra-ui/react';
import React from 'react';

const Hire = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', paddingBlock: '50px' }}>
      <Container maxW={'container.xl'}>
        <Stack
          direction={['column', 'column', 'column', 'row']}
          alignItems={'center'}
          justifyContent={'space-evenly'}
          gap={'30px'}
        >
          <Heading textAlign={['center', 'center', 'left']}>Is there anything I can help you with?</Heading>
          <Box>
            <a
              href="https://www.linkedin.com/in/alok-dwivedi-4347801b8/"
              target="_blank"
              rel="noopener noreferrer"                 
            >
              <button
                className="btn"
                style={{ marginBlock: 0, fontSize: '16px' }}
              >
                Hire Me
              </button>
            </a>
          </Box>
        </Stack>
      </Container>
    </div>
  );
};

export default Hire;
