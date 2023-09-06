import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { RxUpdate } from 'react-icons/rx';
import { HiDocumentArrowUp } from 'react-icons/hi2';
import BackIcon from '@/components/BackIcon/BackIcon';
import Logout from '@/components/Logout/Logout';
import InnerFooter from '@/components/InnerFooter/InnerFooter';
const StyledIcon = styled.div`
  font-size: 7em;
  color: #0c2b50;
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
          <BackIcon />
        </Link>
        <Heading as={'h2'} color={'teal'} fontWeight={300}>
          Update Details
        </Heading>
        <Logout />
      </Box>
      <SimpleGrid
        columns={2}
        gap={'100px'}
        height={'calc(100vh - 150px)'}
        padding={'5%'}
      >
        <LinkStyled href='/protected/office/editscholar'>
          <StyledIcon> {<RxUpdate />} </StyledIcon>
          <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
            Edit Scholar
          </Heading>
        </LinkStyled>
        <LinkStyled href='/protected/office/updateaward'>
          <StyledIcon> {<HiDocumentArrowUp />} </StyledIcon>
          <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
            Update Award
          </Heading>
        </LinkStyled>
      </SimpleGrid>
      <InnerFooter />
    </>
  );
};
export default index;
