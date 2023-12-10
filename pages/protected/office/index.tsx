import Logo from '@/components/Logo/Logo';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import Head from 'next/head';
import { styled } from 'styled-components';
import Link from 'next/link';
import { RxUpdate } from 'react-icons/rx';
import { PiUserListFill } from 'react-icons/pi';
import { IoPeopleCircle } from 'react-icons/io5';
import { MdAssignmentAdd, MdOutlineGroups } from 'react-icons/md';
import Logout from '@/components/Logout/Logout';
import InnerFooter from '@/components/InnerFooter/InnerFooter';
import { BiUserPlus } from 'react-icons/bi';
import { FaPeopleLine } from 'react-icons/fa6';
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

export const Index = () => (
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
        href='/'
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
        Department Of Computer Science
      </Heading>
      <Logout />
    </Box>
    <SimpleGrid
      columns={3}
      gap={'100px'}
      height={'calc(100vh - 150px)'}
      padding={'5%'}
      marginBottom={'30%'}
    >
      <LinkStyled href='/protected/office/addScholar'>
        <StyledIcon> {<BiUserPlus />} </StyledIcon>
        <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
          Add Scholar
        </Heading>
      </LinkStyled>
      <LinkStyled href='/protected/office/scholardetails'>
        <StyledIcon> {<PiUserListFill />} </StyledIcon>
        <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
          Scholars Details
        </Heading>
      </LinkStyled>
      <LinkStyled href='/protected/office/researchprogress'>
        <StyledIcon> {<RxUpdate />} </StyledIcon>
        <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
          Research Progress.
        </Heading>
      </LinkStyled>

      <LinkStyled href='/protected/office/supervisors'>
        <StyledIcon> {<MdOutlineGroups />} </StyledIcon>
        <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
          Supervisors
        </Heading>
      </LinkStyled>
      <LinkStyled href='/protected/office/sracmembers'>
        <StyledIcon> {<IoPeopleCircle />} </StyledIcon>
        <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
          SRAC Members
        </Heading>
      </LinkStyled>
      <LinkStyled href='/protected/office/assignsupervisor'>
        <StyledIcon> {<MdAssignmentAdd />} </StyledIcon>
        <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
          Assign Supervisor
        </Heading>
      </LinkStyled>
      <LinkStyled href='/protected/office/sracmeeting'>
        <StyledIcon> {<FaPeopleLine />} </StyledIcon>
        <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
          SRAC Meeting
        </Heading>
      </LinkStyled>
    </SimpleGrid>
    <InnerFooter />
  </>
);
export default Index;
