import styled from 'styled-components';
import InnerFooter from '@/components/InnerFooter/InnerFooter';
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import BackIcon from '@/components/BackIcon/BackIcon';
import Logout from '@/components/Logout/Logout';

export const Index = () => {
  return (
    <>
      <Head>
        <title>Approve SRAC</title>
      </Head>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Link href='/protected/drc'>
          <BackIcon />
        </Link>
        <Heading as={'h2'} color={'teal'} fontWeight={300}>
          Approve SRAC
        </Heading>
        <Logout />
      </Box>
      <Container maxWidth={'5xl'} marginBottom={'25%'}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Text fontSize={'2xl'} color={'#07443E'}>
            1. Zubair DOCS IUST0121014521
          </Text>
          <Stack direction={['row']} spacing={'2%'}>
            <Input padding={'0 10px'} placeholder='SRAC Member 1' size='xl' />
            <Input padding={'0 10px'} placeholder='SRAC Member 2' size='xl' />
            <Button padding={'10px 30px'} colorScheme='blue'>
              Approve
            </Button>
          </Stack>
        </Box>
        <Box
          marginTop='3%'
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Text fontSize={'2xl'} color={'#07443E'}>
            2. Samin DOCS IUST0121014533
          </Text>
          <Stack direction={['row']} spacing={'2%'}>
            <Input padding={'0 10px'} placeholder='SRAC Member 1' size='xl' />
            <Input padding={'0 10px'} placeholder='SRAC Member 2' size='xl' />
            <Button padding={'10px 30px'} colorScheme='blue'>
              Approve
            </Button>
          </Stack>
        </Box>
      </Container>
      <InnerFooter />
    </>
  );
};
export default Index;
