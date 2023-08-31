import Logo from '@/components/Logo/Logo';
import { Box, Button, Heading, SimpleGrid } from '@chakra-ui/react';
import Head from 'next/head';
import { styled } from 'styled-components';
import { BiLogOut } from 'react-icons/bi';
import Link from 'next/link';
import { RxCube } from 'react-icons/rx';
import { PiUserListFill } from 'react-icons/pi';
import { GiArchiveResearch } from 'react-icons/gi';
import { IoPeopleCircle } from 'react-icons/io5';
import { MdAssignmentAdd, MdOutlineGroups } from 'react-icons/md';
import { FaClipboardList } from 'react-icons/fa';
import { AiOutlineFileDone } from 'react-icons/ai';

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
        <Button colorScheme='red' leftIcon={<BiLogOut />}>
          Logout
        </Button>
      </Box>
      <SimpleGrid
        columns={2}
        rowGap={'50px'}
        columnGap={'200px'}
        height={'calc(100vh - 150px)'}
        padding={'5%'}
        marginBottom={'20%'}
      >
        <LinkStyled
          href='/protected/supervisor/assignedscholars'
          style={{ gridColumn: 'span 2' }}
        >
          <StyledIcon> {<FaClipboardList />} </StyledIcon>
          <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
            Assigned Scholars
          </Heading>
        </LinkStyled>
        <LinkStyled href='/protected/drc/reportgeneration'>
          <StyledIcon> {<MdAssignmentAdd />} </StyledIcon>
          <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
            Report Generation
          </Heading>
        </LinkStyled>
        <LinkStyled href='/protected/supervisor/researchprogress'>
          <StyledIcon> {<GiArchiveResearch />} </StyledIcon>
          <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
            Progress Module
          </Heading>
        </LinkStyled>

        <LinkStyled
          href='/protected/supervisor/approvesracmembers'
          style={{ gridColumn: 'span 2' }}
        >
          <StyledIcon> {<AiOutlineFileDone />} </StyledIcon>
          <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
            Approve SRAC Members
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
