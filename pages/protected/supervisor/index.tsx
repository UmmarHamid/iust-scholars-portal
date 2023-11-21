import Logo from '@/components/Logo/Logo';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import Head from 'next/head';
import { styled } from 'styled-components';
import Link from 'next/link';
import { GiArchiveResearch } from 'react-icons/gi';
import { MdAssignmentAdd } from 'react-icons/md';
import { FaClipboardList } from 'react-icons/fa';
import { AiOutlineFileDone } from 'react-icons/ai';
import InnerFooter from '@/components/InnerFooter/InnerFooter';
import Logout from '@/components/Logout/Logout';
import { fetchUserDetails } from '@/utils/utils';
import { useUser } from '@supabase/auth-helpers-react';
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

export const Index = () => {
  const user = useUser();
  return (
    <>
      <Head>
        <title>Supervisor</title>
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
          Name of Supervisor
        </Heading>
        <Logout />
      </Box>
      <SimpleGrid
        columns={2}
        rowGap={'50px'}
        columnGap={'200px'}
        height={'calc(100vh - 150px)'}
        padding={'5%'}
        marginBottom={'23%'}
      >
        <LinkStyled
          href={`/protected/supervisor/assignedscholars?email=${user?.email}`}
          style={{ gridColumn: 'span 2' }}
        >
          <StyledIcon> {<FaClipboardList />} </StyledIcon>
          <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
            Assigned Scholars
          </Heading>
        </LinkStyled>
        <LinkStyled
          href={`/protected/supervisor/reportgeneration?email=${user?.email}`}
        >
          <StyledIcon> {<MdAssignmentAdd />} </StyledIcon>
          <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
            Report Generation
          </Heading>
        </LinkStyled>
        <LinkStyled
          href={`/protected/supervisor/progressmodule?email=${user?.email}`}
        >
          <StyledIcon> {<GiArchiveResearch />} </StyledIcon>
          <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
            Progress Module
          </Heading>
        </LinkStyled>

        <LinkStyled
          href='/protected/supervisor/assignsracmembers'
          style={{ gridColumn: 'span 2' }}
        >
          <StyledIcon> {<AiOutlineFileDone />} </StyledIcon>
          <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
            Assign SRAC Members
          </Heading>
        </LinkStyled>
      </SimpleGrid>
      <InnerFooter />
    </>
  );
};
export default Index;
