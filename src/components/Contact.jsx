import {
  Center,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { toast } from 'react-hot-toast';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [disableButton, setDisableButton] = useState(false);

  const submitHandler = async e => {
    e.preventDefault();
    setDisableButton(true);
    try {
      await addDoc(collection(db, 'contacts'), {
        name,
        email,
        message,
      });
      toast.success('Message sent successfully.');
      setName('');
      setEmail('');
      setMessage('');
      setDisableButton(false);
    } catch (error) {
      toast.error('Error ! Message not sent.');
      setDisableButton(false);
    }
  };

  return (
    <div id="contact" style={{ paddingBlock: '70px' }}>
      <Container maxW={'container.xl'}>
        <Heading textAlign={'center'}>Send me a message!</Heading>
        <Text
          textAlign={'center'}
          fontSize={'20px'}
          paddingBlock={'30px'}
          letterSpacing={'1px'}
        >
          Got a question or want to collab with a project, or just want to say
          hello? Go ahead.
        </Text>

        <form onSubmit={submitHandler}>
          <Container maxW={'container.md'} paddingTop={'70px'}>
            <Stack direction={['column', 'row']} gap={'50px'}>
              <VStack alignItems={'flex-start'} w={['100%', '50%']}>
                <Text>Your Name</Text>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </VStack>

              <VStack alignItems={'flex-start'} w={['100%', '50%']}>
                <Text>Your Email</Text>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </VStack>
            </Stack>

            <Text paddingTop={'50px'}>Your Message</Text>
            <input
              type="text"
              placeholder="Enter your message here"
              required
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <br />
            <Center>
              <button className={disableButton ? "disableBtn btn" : "btn"} type="submit"  >
                <HStack alignItems={'center'} gap={'15px'}>
                  <Text fontSize={'18px'}>Shoot</Text>
                  <BsArrowRight size={35} />
                </HStack>
              </button>
            </Center>
          </Container>
        </form>
      </Container>
    </div>
  );
};

export default Contact;
