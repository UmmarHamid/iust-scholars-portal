import styled from 'styled-components';
import { MdArrowBackIosNew } from 'react-icons/md';
import { BiLogOut, BiSolidPencil } from 'react-icons/bi';
import Head from 'next/head';
import { Box, Button, Heading } from '@chakra-ui/react';
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
          Edit Details
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
        <Heading
          margin={'2%'}
          as={'h6'}
          color={'#07443E'}
          letterSpacing={'10px'}
        >
          1. Zubair DOCS IUST0121014521
        </Heading>
        <Link href='/office/editscholar/editlink'>
          <Button colorScheme='blue' leftIcon={<BiSolidPencil />}>
            Edit
          </Button>
        </Link>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        // height={'100px'}
      >
        <Heading
          margin={'2%'}
          as={'h6'}
          color={'#07443E'}
          letterSpacing={'10px'}
        >
          2. Samin DOCS IUST0121014444
        </Heading>
        <Link href='/office/editscholar/editlink'>
          <Button colorScheme='blue' leftIcon={<BiSolidPencil />}>
            Edit
          </Button>
        </Link>
      </Box>
      <StyledFooter>
        © 2023 - Islamic University of Science and Technology.
      </StyledFooter>
    </>
  );
};
export default index;
