import React from 'react';
import { Img } from '@chakra-ui/react';

const SkillCard = ({ image }) => {
  return (
    <Img
      src={image}
      alt={'skill-image'}
      h={['50px', '60px', '70px']}
      transition={'all 0.5s'}
      cursor={'pointer'}
      _hover={{ transform: 'scale(1.1)' }}
    />
  );
};

export default SkillCard;
