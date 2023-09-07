import Head from 'next/head';
import { Box, Button, Container, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { Select } from '@chakra-ui/react';
import BackIcon from '@/components/BackIcon/BackIcon';
import Logout from '@/components/Logout/Logout';
import InnerFooter from '@/components/InnerFooter/InnerFooter';
export const Index = () => {
  return (
    <>
      <Head>
        <title>Assign Supervisor</title>
      </Head>

      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Link href='/protected/office'>
          <BackIcon />
        </Link>
        <Heading as={'h2'} color={'teal'} fontWeight={300}>
          Assign Supervisor
        </Heading>
        <Logout />
      </Box>
      <Container maxWidth={'5xl'} marginBottom={'26%'}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Text fontSize={'2xl'} color={'#07443E'}>
            1. Zubair DOCS IUST0121014521
          </Text>
          <Select placeholder='Select option' size='md' width={'50%'}>
            <option value=''>Dr. Romana</option>
            <option value=''>Dr.Kaiser</option>
            <option value=''>Dr. Javaid</option>
            <option value=''>Dr. Muzafar</option>
          </Select>
          <Button colorScheme='blue'>Submit</Button>
        </Box>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Text fontSize={'2xl'} marginTop={'2%'} color={'#07443E'}>
            2. Nusrat DOCS IUST0121014444
          </Text>
          <Select placeholder='Select option' size='md' width={'50%'}>
            <option value=''>Dr. Romana</option>
            <option value=''>Dr.Kaiser</option>
            <option value=''>Dr. Javaid</option>
            <option value=''>Dr. Muzafar</option>
          </Select>
          <Button colorScheme='blue'>Submit</Button>
        </Box>
      </Container>
      <InnerFooter />
    </>
  );
};
export default Index;
