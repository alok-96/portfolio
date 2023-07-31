import React from 'react';
import { VStack,  Img, Text, HStack } from '@chakra-ui/react';
import { AiFillGithub,  } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';

const ProjectCard = ({ id, name, image, description, githubLink, url }) => {
  return (
    <VStack
      w={'300px'}
      h={'380px'}
      border={'1px solid #e0e0e0'}
      margin={'20px'}
      bgColor={'#ffffff'}
      padding={'15px'}
      alignItems={'center'}
      gap={'20px'}
      transition={'all 0.5s'}
      _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
    >
      <Img src={image} alt={'product-image'} h={'150px'} />
      <VStack justifyContent={'space-between'} h={'full'}  >
        <Text
          fontSize={'1.2rem'}
          textTransform={'uppercase'}
          fontWeight={'400'}
          letterSpacing={'1px'}
        >
          {name}
        </Text>
        <Text fontSize={'15px'} textAlign={'center'} paddingInline={'4'}>
          {description}
        </Text>
        <HStack gap={'40px'}>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <AiFillGithub size={'25px'} />
          </a>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <BiLinkExternal size={'25px'} />
          </a>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default ProjectCard;
