import Head from 'next/head';
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import BackIcon from '@/components/BackIcon/BackIcon';
import Logout from '@/components/Logout/Logout';
import InnerFooter from '@/components/InnerFooter/InnerFooter';
export const index = () => {
  return (
    <>
      <Head>
        <title>Update Awards</title>
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
          Update awards
        </Heading>
        <Logout />
      </Box>
      <Container maxWidth={'5xl'} marginBottom={'26%'}>
        <Box
          display={'flex'}
          justifyContent={'space-around'}
          alignItems={'center'}
        >
          <Text fontSize={'2xl'} color={'#07443E'}>
            1. Zubair DOCS IUST0121014521
          </Text>
          <Link href='/'>
            <Stack direction={['row']} spacing={'2%'}>
              <Input padding={'0 10px'} placeholder='Viva' size='xl' />
              <Input padding={'0 10px'} placeholder='credit' size='xl' />
              <Button colorScheme='blue' padding={'10px 30px'}>
                Submit
              </Button>
            </Stack>
          </Link>
        </Box>
        <Box
          display={'flex'}
          justifyContent={'space-around'}
          alignItems={'center'}
        >
          <Text fontSize={'2xl'} marginTop={'2%'} color={'#07443E'}>
            2. SUhail DOCS IUST0121014444
          </Text>
          <Link href='/'>
            <Stack direction={['row']} spacing={'2%'}>
              <Input padding={'0 10px'} placeholder='viva' size='xl' />
              <Input padding={'0 10px'} placeholder='credit' size='xl' />
              <Button padding={'10px 30px'} colorScheme='blue'>
                Submit
              </Button>
            </Stack>
          </Link>
        </Box>
      </Container>
      <InnerFooter />
    </>
  );
};
export default index;
