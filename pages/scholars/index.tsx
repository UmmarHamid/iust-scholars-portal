import Logo from '@/components/Logo/Logo';
import { Box, Button, Heading, SimpleGrid } from '@chakra-ui/react';
import Head from 'next/head';
import { styled } from 'styled-components';
import { BiLogOut, BiRegistered, BiSolidUserDetail } from 'react-icons/bi';
import { HiDocumentDuplicate } from 'react-icons/hi';
import { AiOutlineTeam } from 'react-icons/ai';
import { MdAssignmentInd, MdOutlineSaveAs } from 'react-icons/md';
import Link from 'next/link';

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

export const Index = () => {
  return (
    <>
      <Head>
        <title>office</title>
      </Head>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Logo
          alt='IUST-logo'
          href='google.com'
          width={300}
          height={75}
          imgSrc='/iustlogo.png'
        />
        <Heading
          as='h2'
          size='xl'
          fontFamily='Georgia'
          fontWeight='bold'
          color='teal'
        >
          Welcome User
        </Heading>
        <Button colorScheme='red' leftIcon={<BiLogOut />}>
          Logout
        </Button>
      </Box>
      <SimpleGrid
        columns={3}
        gap={'100px'}
        height={'calc(100vh - 150px)'}
        padding={'5%'}
        textAlign={'center'}
      >
        <LinkStyled href='/scholars/personaldetails'>
          <StyledIcon> {<BiSolidUserDetail />} </StyledIcon>
          <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
            Personal Details
          </Heading>
        </LinkStyled>
        <LinkStyled href='/'>
          <StyledIcon> {<BiRegistered />} </StyledIcon>
          <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
            Registered Courses
          </Heading>
        </LinkStyled>
        <LinkStyled href='/'>
          <StyledIcon> {<MdOutlineSaveAs />} </StyledIcon>
          <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
            Submission Details
          </Heading>
        </LinkStyled>

        <LinkStyled href='/'>
          <StyledIcon> {<MdAssignmentInd />} </StyledIcon>
          <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
            Assigned Supervisors
          </Heading>
        </LinkStyled>
        <LinkStyled href='/'>
          <StyledIcon> {<AiOutlineTeam />} </StyledIcon>
          <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
            Assigned SRAC Members
          </Heading>
        </LinkStyled>
        <LinkStyled href='/scholars/synopsisdetails'>
          <StyledIcon> {<HiDocumentDuplicate />} </StyledIcon>
          <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
            Synopsis Details
          </Heading>
        </LinkStyled>
      </SimpleGrid>
      <StyledFooter>
        © 2023 - Islamic University of Science and Technology.
      </StyledFooter>
    </>
  );
};
export default Index;
