import { VStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { GiTalk } from 'react-icons/gi';
import { BiBookAlt } from 'react-icons/bi';
import { BsCardHeading } from 'react-icons/bs';
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  return (
    <div id="home">
      <VStack
        style={{
          backdropFilter: 'blur(3px)',
          background: 'rgba(0, 0, 0, 0.01)',
          filter: 'drop-shadow(0 0 0.75rem #db8574)',
          color: '#db8574',
          borderRadius: '40px',
          gap: '2rem',
          width: 'max-content',
          padding: '1rem ',
          position: 'fixed',
          top: '50%',
          transform: 'translateY(-50%)',
          right: '1rem',
          cursor: 'pointer',
          zIndex: '1',
        }}
      >
        <HashLink to={'#home'} smooth>
          <AiOutlineHome size={'1.2rem'} className={'icon'} title={'Home'} />
        </HashLink>
        <HashLink to={'#about'} smooth>
          <AiOutlineUser
            size={'1.2rem'}
            className={'icon'}
            title={'About Me'}
          />
        </HashLink>
        <HashLink to={'#work'} smooth>
          <BsCardHeading
            size={'1.2rem'}
            className={'icon'}
            title={'Projects'}
          />
        </HashLink>
        <HashLink to={'#skills'} smooth>
          <BiBookAlt size={'1.2rem'} className={'icon'} title={'Skills'} />
        </HashLink>
        <HashLink to={'#contact'} smooth>
          <GiTalk size={'1.2rem'} className={'icon'} title={'Contact'} />
        </HashLink>
      </VStack>
    </div>
  );
}

export default Navbar;
