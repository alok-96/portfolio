import { Container, HStack, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { BiPhone } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillInstagram,
  AiOutlineMail,
} from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div
      id="footer"
      style={{
        backgroundColor: '#212529',
        color: '#757575',
        paddingBlock: '30px',
        fontSize: '14px',
      }}
    >
      <Container maxW={'container.xl'}>
        <Stack
          direction={['column', 'column', 'row']}
          justifyContent={'space-between'}
          alignItems={'flex-start'}
          paddingBlock={'40px'}
          borderBottom={'1px solid #5e5d5d'}
        >
          <HStack>
            <BiPhone size={'30px'} color={'#db8574'} />
            <a href="tel:+919610958182">
              <Text color={'#757575'}>+91 9610958182</Text>
            </a>
          </HStack>
          <HStack>
            <AiOutlineMail size={'30px'} color={'#db8574'} />
            <a href="mailto:dwivedialok799@gmail.com">
              <Text color={'#757575'}>dwivedialok799@gmail.com</Text>
            </a>
          </HStack>
          <HStack>
            <MdLocationOn size={'30px'} color={'#db8574'} />
            <a
              href="http://maps.google.com/maps?q=Gwalior,+Madhya+Pradesh"
              target="blank"
            >
              <Text color={'#757575'}>Gwalior, Madhya Pradesh</Text>
            </a>
          </HStack>
        </Stack>

        <Stack
          direction={['column-reverse', 'column-reverse', 'row']}
          justifyContent={'space-between'}
          alignItems={'center'}
          paddingTop={'70px'}
        >
          <Text>
            &copy; 2023, All Right Reserved <b>Alok Dwivedi</b>{' '}
          </Text>
          <HStack gap={'20px'}>
            <a href="https://github.com/alok-96/" target="blank">
              <AiOutlineGithub size={'30px'} />
            </a>
            <a href="https://twitter.com/alokdwivedi99/" target="blank">
              <FaXTwitter size={'25px'} />
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
        </Stack>
      </Container>
    </div>
  );
};

export default Footer;
