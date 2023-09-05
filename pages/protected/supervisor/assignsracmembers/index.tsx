import Head from 'next/head';
import { Box, Button, Container, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { Select } from '@chakra-ui/react';
import InnerFooter from '@/components/InnerFooter/InnerFooter';
import Logout from '@/components/Logout/Logout';
import BackIcon from '@/components/BackIcon/BackIcon';

export const Index = () => {
  return (
    <>
      <Head>
        <title>Assign SRAC</title>
      </Head>

      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Link href='/protected/supervisor'>
          <BackIcon />
        </Link>
        <Heading as={'h2'} color={'teal'} fontWeight={300}>
          Assign SRAC Members
        </Heading>
        <Logout />
      </Box>
      <Container maxWidth={'5xl'}>
        <Text fontSize={'3xl'} color={'#07443E'} letterSpacing={'5px'}>
          1. Zubair IUST0121014521 Face-recognition
        </Text>
        <Box
          marginTop='2%'
          marginBottom='2%'
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Select placeholder='Select SRAC 1' size='md' width={'40%'}>
            <option value=''>Dr. Zahid</option>
            <option value=''>Dr.Zubair</option>
            <option value=''>Dr. Saif</option>
            <option value=''>Dr. Shabia</option>
          </Select>
          <Select placeholder='Select SRAC 2' size='md' width={'40%'}>
            <option value=''>Dr. Ahsan</option>
            <option value=''>Dr.Shabana</option>
            <option value=''>Dr. Afnan</option>
            <option value=''>Dr. Zakir</option>
          </Select>
          <Button colorScheme='blue'>Submit</Button>
        </Box>
        <Text fontSize={'3xl'} color={'#07443E'} letterSpacing={'5px'}>
          2. Samin IUST0121014544 Voice-recognition
        </Text>
        <Box
          marginTop='2%'
          marginBottom={'23%'}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Select placeholder='Select SRAC 1' size='md' width={'40%'}>
            <option value=''>Dr. Zahid</option>
            <option value=''>Dr.Zubair</option>
            <option value=''>Dr. Saif</option>
            <option value=''>Dr. Shabia</option>
          </Select>
          <Select placeholder='Select SRAC 2' size='md' width={'40%'}>
            <option value=''>Dr. Ahsan</option>
            <option value=''>Dr.Shabana</option>
            <option value=''>Dr. Afnan</option>
            <option value=''>Dr. Zakir</option>
          </Select>
          <Button colorScheme='blue'>Submit</Button>
        </Box>
      </Container>
      <InnerFooter />
    </>
  );
};
export default Index;
