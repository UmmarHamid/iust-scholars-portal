import Logo from '@/components/Logo/Logo';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import Head from 'next/head';
import { styled } from 'styled-components';
import Link from 'next/link';
import { RxCube } from 'react-icons/rx';
import { PiUserListFill } from 'react-icons/pi';
import { IoPeopleCircle } from 'react-icons/io5';
import { MdAssignmentAdd, MdOutlineGroups } from 'react-icons/md';
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

export const Index = () => {
  return (
    <>
      <Head>
        <title>DRC</title>
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
          DRC Member
        </Heading>
        <Logout />
      </Box>
      <SimpleGrid
        columns={2}
        rowGap={'50px'}
        columnGap={'200px'}
        height={'calc(100vh - 150px)'}
        padding={'5%'}
        marginBottom={'18%'}
      >
        <LinkStyled
          href='/protected/drc/scholardetails'
          style={{ gridColumn: 'span 2' }}
        >
          <StyledIcon> {<PiUserListFill />} </StyledIcon>
          <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
            Details of Scholars
          </Heading>
        </LinkStyled>
        <LinkStyled href='/protected/drc/approvesrac'>
          <StyledIcon> {<MdOutlineGroups />} </StyledIcon>
          <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
            Approve SRAC Members
          </Heading>
        </LinkStyled>
        <LinkStyled href='/protected/drc/approvesynopsis'>
          <StyledIcon> {<RxCube />} </StyledIcon>
          <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
            Approve Synopsis
          </Heading>
        </LinkStyled>

        <LinkStyled href='/protected/drc/reportgeneration'>
          <StyledIcon> {<MdAssignmentAdd />} </StyledIcon>
          <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
            Report Generation
          </Heading>
        </LinkStyled>
        <LinkStyled href='/protected/drc/reportremarks'>
          <StyledIcon> {<IoPeopleCircle />} </StyledIcon>
          <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
            Report Remarks
          </Heading>
        </LinkStyled>
      </SimpleGrid>
      <InnerFooter />
    </>
  );
};
export default Index;
