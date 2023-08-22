import {
  Container,
  // Heading,
  Stack,
  Hide,
  Show,
  MenuButton,
  MenuItem,
  IconButton,
  Menu,
  MenuList,
  Img,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/logo.png'

function Header() {
  return (
    <Container
      maxW={'container.xl'}
      paddingTop={['10px', '20px', '40px']}
      height={['10vh', '15vh']}
      id="home"
    >
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Img src={logo} w={'30px'}/>
        <Hide breakpoint="(max-width: 650px)">
          <Stack
            direction={['column', 'row']}
            gap={'50px'}
            textDecoration={'none'}
            fontSize={'15px'}
            letterSpacing={'1px'}
          >
            <HashLink to={'#home'} smooth>
              Home
            </HashLink>
            <HashLink to={'#about'} smooth>
              About
            </HashLink>
            <HashLink to={'#work'} smooth>
              Work
            </HashLink>
            <HashLink to={'#skills'} smooth>
              Skills
            </HashLink>
            <HashLink to={'#contact'} smooth>
              Contact
            </HashLink>
          </Stack>
        </Hide>

        <Show breakpoint="(max-width: 650px)">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<AiOutlineMenu />}
              variant="none"
              border={'none'}
              color={'#222222'}
            />
            <MenuList bgColor={'#f4f2de'} w={'100vw'}>
              <MenuItem bgColor={'#f4f2de'} color={'#1a202c'}>
                <HashLink to={'#home'} smooth>
                  Home
                </HashLink>
              </MenuItem>
              <MenuItem bgColor={'#f4f2de'} color={'#1a202c'}>
                <HashLink to={'#about'} smooth>
                  About
                </HashLink>
              </MenuItem>
              <MenuItem bgColor={'#f4f2de'} color={'#1a202c'}>
                <HashLink to={'#work'} smooth>
                  Work
                </HashLink>
              </MenuItem>
              <MenuItem bgColor={'#f4f2de'} color={'#1a202c'}>
                <HashLink to={'#skills'} smooth>
                  Skills
                </HashLink>
              </MenuItem>
              <MenuItem bgColor={'#f4f2de'} color={'#1a202c'}>
                <HashLink to={'#contact'} smooth>
                  Contact
                </HashLink>
              </MenuItem>
            </MenuList>
          </Menu>
        </Show>
      </Stack>
    </Container>
  );
}

export default Header;
