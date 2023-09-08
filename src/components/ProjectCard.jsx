import React from 'react';
import { VStack,  Img, Text, HStack, Heading } from '@chakra-ui/react';
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
      filter={'drop-shadow(0 0 0.25rem #cfc7c6)'}
      // transition={'all 0.5s'}
      // _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
    >
      <Img
        src={image}
        h={'150px'}
        alt={'product-image'}
        cursor={'pointer'}
        transition={'all 0.5s'}
        filter={'drop-shadow(0 0 0.45rem #cfc7c6)'}
        _hover={{ transform: 'scale(1.02)' }}
        onClick = {() => {window.open(url, 'blank');}}
      />
      <VStack justifyContent={'space-between'} h={'full'}>
        <Heading
          fontSize={'1.2rem'}
          textTransform={'uppercase'}
          fontWeight={'500'}
          letterSpacing={'1px'}
        >
          {name}
        </Heading>
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
