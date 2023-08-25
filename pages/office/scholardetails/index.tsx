import styled from 'styled-components';
import { MdArrowBackIosNew } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';
import Head from 'next/head';
import Link from 'next/link';
import { Box, Button, Container, Heading } from '@chakra-ui/react';
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
export const index = () => {
  return (
    <>
      <Head>
        <title>Scholar Details</title>
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
        <Heading as={'h2'} color={'teal'} fontWeight={300}>
          Scholar Details
        </Heading>
        <Button colorScheme='red' leftIcon={<BiLogOut />}>
          Logout
        </Button>
      </Box>
      <Container maxW='5xl'>
        <Heading
          margin={'2%'}
          as={'h6'}
          color={'#07443E'}
          letterSpacing={'10px'}
        >
          1.Zubair DOCS IUST0121014521
        </Heading>
        <Heading
          margin={'2%'}
          as={'h6'}
          color={'#07443E'}
          letterSpacing={'10px'}
        >
          2.Samin DOCS IUST0121014544
        </Heading>
      </Container>
      <StyledFooter>
        © 2023 - Islamic University of Science and Technology.
      </StyledFooter>
    </>
  );
};
export default index;
