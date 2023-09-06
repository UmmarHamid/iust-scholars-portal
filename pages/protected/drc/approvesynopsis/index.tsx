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
import { AiOutlineFolderView } from 'react-icons/ai';
import Head from 'next/head';
import Link from 'next/link';
import BackIcon from '@/components/BackIcon/BackIcon';
import Logout from '@/components/Logout/Logout';

export const Index = () => {
  return (
    <>
      <Head>
        <title>Approve Synopsis</title>
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
          Approve Synopsis
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
          <Stack direction={['row']} spacing={'3%'}>
            <Button
              padding={'10px 30px'}
              leftIcon={<AiOutlineFolderView />}
              colorScheme='green'
            >
              {' '}
              View
            </Button>
            <Input padding={'0 10px'} placeholder='Remarks' size='xl' />
            <Button padding={'10px 30px'} colorScheme='blue'>
              Approve
            </Button>
            <Button padding={'10px 30px'} colorScheme='red'>
              Reject
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
            2. Suhail DOCS IUST0121014521
          </Text>
          <Stack direction={['row']} spacing={'3%'}>
            <Button
              padding={'10px 30px'}
              leftIcon={<AiOutlineFolderView />}
              colorScheme='green'
            >
              {' '}
              View
            </Button>
            <Input padding={'0 10px'} placeholder='Remarks' size='xl' />
            <Button padding={'10px 30px'} colorScheme='blue'>
              Approve
            </Button>
            <Button padding={'10px 30px'} colorScheme='red'>
              Reject
            </Button>
          </Stack>
        </Box>
      </Container>
      <InnerFooter />
    </>
  );
};
export default Index;
