import React from 'react';
import { Img } from '@chakra-ui/react';

const SkillCard = ({ image, title }) => {
  return (
    <div
      style={{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
      }}
    >
      <Img
        src={image}
        alt={'skill-image'}
        h={['45px', '50px', '50px']}
        transition={'all 0.5s'}
        cursor={'pointer'}
        title={title}
      />
    </div>
  );
};

export default SkillCard;
