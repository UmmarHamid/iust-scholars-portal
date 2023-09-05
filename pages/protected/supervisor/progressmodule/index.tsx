import { Box, Button, Container, Heading, Input, Text } from '@chakra-ui/react';
import { AiOutlineFolderView } from 'react-icons/ai';
import Head from 'next/head';
import Link from 'next/link';
import InnerFooter from '@/components/InnerFooter/InnerFooter';
import BackIcon from '@/components/BackIcon/BackIcon';
import Logout from '@/components/Logout/Logout';

export const Index = () => {
  return (
    <>
      <Head>
        <title>Research Progress</title>
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
          Research Progress
        </Heading>
        <Logout />
      </Box>
      <Container maxWidth={'5xl'}>
        <Text fontSize={'2xl'} color={'#07443E'}>
          1. Zubair DOCS IUST0121014521
        </Text>
        <Box
          marginTop={'1%'}
          display={'flex'}
          justifyContent={'space-around'}
          alignItems={'center'}
        >
          <Button
            leftIcon={<AiOutlineFolderView />}
            padding={'10px 40px'}
            colorScheme='green'
          >
            View Synopsis
          </Button>
          <Input
            type='text'
            placeholder='Remarks'
            padding={'10px 30px'}
            size='2xl'
            margin={'20px 20px'}
          />
          <Button padding={'10px 30px'} colorScheme='blue' marginRight={'20px'}>
            Submit
          </Button>
        </Box>
        <Box
          marginTop={'1%'}
          display={'flex'}
          justifyContent={'space-around'}
          alignItems={'center'}
        >
          <Button
            leftIcon={<AiOutlineFolderView />}
            padding={'10px 40px'}
            colorScheme='green'
          >
            View Submission
          </Button>
          <Input
            type='text'
            placeholder='Remarks'
            padding={'10px 30px'}
            size='2xl'
            margin={'20px 20px'}
          />
          <Button padding={'10px 30px'} colorScheme='blue' marginRight={'20px'}>
            Submit
          </Button>
        </Box>
        <Text fontSize={'2xl'} color={'#07443E'}>
          2. Samin DOCS IUST0121014521
        </Text>
        <Box
          marginTop={'1%'}
          display={'flex'}
          justifyContent={'space-around'}
          alignItems={'center'}
        >
          <Button
            leftIcon={<AiOutlineFolderView />}
            padding={'10px 40px'}
            colorScheme='green'
          >
            View Synopsis
          </Button>
          <Input
            type='text'
            placeholder='Remarks'
            padding={'10px 30px'}
            size='2xl'
            margin={'20px 20px'}
          />
          <Button padding={'10px 30px'} colorScheme='blue' marginRight={'20px'}>
            Submit
          </Button>
        </Box>
        <Box
          marginTop={'1%'}
          display={'flex'}
          justifyContent={'space-around'}
          alignItems={'center'}
        >
          <Button
            leftIcon={<AiOutlineFolderView />}
            padding={'10px 40px'}
            colorScheme='green'
          >
            View Submission
          </Button>
          <Input
            type='text'
            placeholder='Remarks'
            padding={'10px 30px'}
            size='2xl'
            margin={'20px 20px'}
          />
          <Button padding={'10px 30px'} colorScheme='blue' marginRight={'20px'}>
            Submit
          </Button>
        </Box>
      </Container>
      <InnerFooter />
    </>
  );
};
export default Index;
