import {
  Box,
  Button,
  HStack,
  Heading,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box p={20} backgroundColor='#002147' color='white'>
      <Heading pb={10} fontSize='27px' fontWeight={500}>
        Contact Us
      </Heading>
      <UnorderedList spacing={6} listStyleType='none' m={0}>
        <ListItem>1-University Avenue, Awantipora, Pulwama</ListItem>
        <ListItem> Pin: 192122, Jammu and Kashmir</ListItem>
        <ListItem>GPO (Srinagar) Post Box No. 89</ListItem>
        <ListItem>Phone: +91 (01933) 247954 / 247955</ListItem>
        <ListItem>Email: ditss@iust.ac.in</ListItem>
      </UnorderedList>

      <Heading py={10} fontSize='27px' fontWeight={500}>
        Social Media
      </Heading>

      <HStack spacing={8}>
        <Link href='https://www.facebook.com/iustjk'>
          <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
            Facebook
          </Button>
        </Link>
        <Link href='https://www.twitter.com/iustjk'>
          <Button colorScheme='twitter' leftIcon={<FaTwitter />}>
            Twitter
          </Button>
        </Link>
        <Link href='https://www.youtube.com/iustjk'>
          <Button colorScheme='red' leftIcon={<FaYoutube />}>
            Youtube
          </Button>
        </Link>
        <Link href='https://www.linkedin.com/school/iustjk'>
          <Button colorScheme='blue' leftIcon={<FaLinkedin />}>
            LinkedIn
          </Button>
        </Link>
      </HStack>
    </Box>
  );
};

export default Footer;
