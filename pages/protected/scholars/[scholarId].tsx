import Logo from '@/components/Logo/Logo';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import Head from 'next/head';
import { styled } from 'styled-components';
import { BiRegistered, BiSolidUserDetail } from 'react-icons/bi';
import { HiDocumentDuplicate } from 'react-icons/hi';
import { AiOutlineTeam } from 'react-icons/ai';
import { MdAssignmentInd, MdOutlineSaveAs } from 'react-icons/md';
import Link from 'next/link';
import { useUser } from '@supabase/auth-helpers-react';
import { GetServerSideProps } from 'next';
import supabase from '@/utils/supabase';
import InnerFooter from '@/components/InnerFooter/InnerFooter';
import Logout from '@/components/Logout/Logout';

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

export const Index = ({ userId }: any) => {
  const user = useUser();
  return (
    <>
      <Head>
        <title>Scholar</title>
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
          Welcome User
        </Heading>
        <Logout />
      </Box>
      <SimpleGrid
        columns={3}
        gap={'100px'}
        height={'calc(100vh - 150px)'}
        padding={'5%'}
        textAlign={'center'}
        marginBottom={'10%'}
      >
        <LinkStyled href={`/protected/scholars/personaldetails/${userId}`}>
          <StyledIcon> {<BiSolidUserDetail />} </StyledIcon>
          <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
            Personal Details
          </Heading>
        </LinkStyled>
        <LinkStyled href={`/protected/scholars/registeredcourses/${userId}`}>
          <StyledIcon> {<BiRegistered />} </StyledIcon>
          <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
            Registered Courses
          </Heading>
        </LinkStyled>
        <LinkStyled href='/protected/scholars/progressreport'>
          <StyledIcon> {<MdOutlineSaveAs />} </StyledIcon>
          <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
            Progress Report
          </Heading>
        </LinkStyled>

        <LinkStyled href={`/protected/scholars/assignedsupervisor/${userId}`}>
          <StyledIcon> {<MdAssignmentInd />} </StyledIcon>
          <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
            Assigned Supervisor
          </Heading>
        </LinkStyled>
        <LinkStyled href='/protected/scholars/assignedsracmembers'>
          <StyledIcon> {<AiOutlineTeam />} </StyledIcon>
          <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
            Assigned SRAC Members
          </Heading>
        </LinkStyled>
        <LinkStyled href='/protected/scholars/synopsisdetails'>
          <StyledIcon> {<HiDocumentDuplicate />} </StyledIcon>
          <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
            Synopsis Details
          </Heading>
        </LinkStyled>
      </SimpleGrid>
      <InnerFooter />
    </>
  );
};
export default Index;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { data, error } = await supabase
    .from('scholars_profiles')
    .select('*')
    .eq('email', params?.scholarId);
  const userId = data ? data[0].id : null;
  return { props: { userId, error } };
};
