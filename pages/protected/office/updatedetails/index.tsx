import styled from 'styled-components';
import { MdArrowBackIosNew } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';
import Head from 'next/head';
import Link from 'next/link';
import { Box, Button, Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { RxUpdate } from 'react-icons/rx';
import { HiDocumentArrowUp } from 'react-icons/hi2';
const StyledIcon = styled.div`
  font-size: 7em;
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
const LinkStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
        <Link href='/protected/office'>
          <StyledIcon>{<MdArrowBackIosNew size={36} />}</StyledIcon>
        </Link>
        <Heading as={'h2'} color={'teal'} fontWeight={300}>
          Update Details
        </Heading>
        <Button colorScheme='red' leftIcon={<BiLogOut />}>
          Logout
        </Button>
      </Box>
      <SimpleGrid
        columns={2}
        gap={'100px'}
        height={'calc(100vh - 150px)'}
        padding={'5%'}
      >
        <LinkStyled href='/office/editscholar'>
          <StyledIcon> {<RxUpdate />} </StyledIcon>
          <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
            Edit Scholar
          </Heading>
        </LinkStyled>
        <LinkStyled href='/office/updateaward'>
          <StyledIcon> {<HiDocumentArrowUp />} </StyledIcon>
          <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
            Update Award
          </Heading>
        </LinkStyled>
      </SimpleGrid>
      <StyledFooter>
        © 2023 - Islamic University of Science and Technology.
      </StyledFooter>
    </>
  );
};
export default index;
