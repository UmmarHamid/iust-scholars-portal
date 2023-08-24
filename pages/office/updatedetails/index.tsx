import styled from 'styled-components';
import { MdArrowBackIosNew } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';
import Head from 'next/head';
import Link from 'next/link';
import { Box, Button, Container, Heading } from '@chakra-ui/react';
import { RxUpdate } from 'react-icons/rx';
import { HiDocumentArrowUp } from 'react-icons/hi2';
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
const LinkStyled = styled(Link)``;
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
          Update Details
        </Heading>
        <Button colorScheme='red' leftIcon={<BiLogOut />}>
          Logout
        </Button>
      </Box>
      <Box margin={'5%'} display={'flex'} justifyContent={'space-around'}>
        <LinkStyled href='/'>
          <StyledIcon> {<RxUpdate />} </StyledIcon>
          <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
            Edit Scholar
          </Heading>
        </LinkStyled>
        <LinkStyled href='/'>
          <StyledIcon> {<HiDocumentArrowUp />} </StyledIcon>
          <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
            Update Award
          </Heading>
        </LinkStyled>
      </Box>
      <StyledFooter>
        © 2023 - Islamic University of Science and Technology.
      </StyledFooter>
    </>
  );
};
export default index;
