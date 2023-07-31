import {
  Container,
  Heading,
  HStack,
  Img,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from 'react-icons/ai';
import image from '../assets/image.jpg';

const Home = () => {
  return (
    <Container maxW={'container.xl'} height={['90vh', '85vh']}>
      <Stack
        direction={['column-reverse', 'column-reverse', 'row']}
        alignItems="center"
        height={'full'}
        justifyContent={[ 'space-evenly', 'space-evenly', 'space-between']}
      >
        <VStack
          width={['100%', '100%', '50%']}
          gap={'50px'}
          alignItems={['center', 'center', 'start']}
          textAlign={['center', 'center', 'left']}
        >
          <Heading
            fontSize={['2rem', '2.5rem', '3rem', '3.5rem']}
            fontWeight="700"
            letterSpacing="1px"
          >
            Hi, I am <br />
            Alok Dwivedi
          </Heading>

          <Text fontSize={'17px'} letterSpacing={'1px'}>
            I like to craft solid and scalable frontend products with great user
            experiences and also like to write clean and reusabe source code.
          </Text>

          <HStack gap={'20px'} paddingBottom={'10px'}>
            <a href="https://github.com/alok-96/" target="blank">
              <AiOutlineGithub size={'30px'} />
            </a>
            <a href="https://twitter.com/alokdwivedi99/" target="blank">
              <AiOutlineTwitter size={'30px'} />
            </a>
            <a
              href="https://www.linkedin.com/in/alok-dwivedi-4347801b8/"
              target="blank"
            >
              <AiFillLinkedin size={'30px'} />
            </a>
            <a href="https://www.instagram.com/_its_alok_07_/" target="blank">
              <AiFillInstagram size={'30px'} />
            </a>
          </HStack>
        </VStack>
        <Img
          src={image}
          alt="alok-image"
          borderRadius={'35% 65% 60% 40% / 30% 45% 55% 70% '}
          height={['250px', '300px', '400px']}
          width={['250px', '300px', '400px']}
        />
      </Stack>
    </Container>
  );
};

export default Home;
