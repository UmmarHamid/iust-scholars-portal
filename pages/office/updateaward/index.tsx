import styled from 'styled-components';
import { MdArrowBackIosNew } from 'react-icons/md';
import { BiLogOut, BiSolidPencil } from 'react-icons/bi';
import Head from 'next/head';
import { Box, Button, Heading, Input, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
const StyledIcon = styled.h1`
  font-size: 46px;
  font-weight: 700;
  color: #0c2b50;
  padding-left: 30%;
`;
const StyledFooter = styled.footer`
  left: 0;
  bottom: 0;
  position: relative;
  width: 100%;
  background-color: #002147;
  color: #fff;
  text-align: center;
  line-height: 50px;
`;
export const index = () => {
  return (
    <>
      <Head>
        <title>Update</title>
      </Head>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Link href='/office'>
          <StyledIcon>{<MdArrowBackIosNew />}</StyledIcon>
        </Link>
        <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
          Update award
        </Heading>
        <Button colorScheme='red' leftIcon={<BiLogOut />}>
          Logout
        </Button>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        // height={'100px'}
      >
        <Text
          fontSize={'2xl'}
          //   margin={'1%'}
          color={'#07443E'}
        >
          1. Zubair DOCS IUST0121014521
        </Text>
        <Link href='/'>
          <Stack direction={['row']} spacing={'2%'}>
            <Input placeholder='Viva' size='xl' />
            <Input placeholder='credit' size='xl' />
            <Button colorScheme='blue'>Submit</Button>
          </Stack>
        </Link>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        // height={'100px'}
      >
        <Text fontSize={'2xl'} marginTop={'2%'} color={'#07443E'}>
          2. Samin DOCS IUST0121014444
        </Text>
        <Link href='/'>
          <Stack direction={['row']} spacing={'2%'}>
            <Input placeholder='viva' size='xl' />
            <Input placeholder='credit' size='xl' />
            <Button colorScheme='blue'>Submit</Button>
          </Stack>
        </Link>
      </Box>
      <StyledFooter>
        © 2023 - Islamic University of Science and Technology.
      </StyledFooter>
    </>
  );
};
export default index;
