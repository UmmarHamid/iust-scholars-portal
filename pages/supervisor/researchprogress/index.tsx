import styled from 'styled-components';
import { MdArrowBackIosNew } from 'react-icons/md';
import { Box, Button, Container, Heading, Input, Text } from '@chakra-ui/react';
import { BiLogOut } from 'react-icons/bi';
import { AiOutlineFolderView } from 'react-icons/ai';
import Head from 'next/head';
import Link from 'next/link';
const StyledIcon = styled.h1`
  font-size: 42px;
  font-weight: 700;
  color: #0c2b50;
`;
const StyledFooter = styled.footer`
  bottom: 0;
  position: fixed;
  width: 100%;
  background-color: #002147;
  color: #fff;
  text-align: center;
  line-height: 50px;
`;
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
        <Link href='/supervisor'>
          <StyledIcon>{<MdArrowBackIosNew size={36} />}</StyledIcon>
        </Link>
        <Heading as={'h2'} color={'teal'} fontWeight={300}>
          Research Progress
        </Heading>
        <Button colorScheme='red' leftIcon={<BiLogOut />}>
          Logout
        </Button>
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
      <StyledFooter>
        © 2023 - Islamic University of Science and Technology.
      </StyledFooter>
    </>
  );
};
export default Index;
