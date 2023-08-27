import Logo from '@/components/Logo/Logo';
import { Box, Button, Heading, SimpleGrid } from '@chakra-ui/react';
import Head from 'next/head';
import { styled } from 'styled-components';
import { BiLogOut } from 'react-icons/bi';
import Link from 'next/link';
import { RxCube } from 'react-icons/rx';
import { PiUserListFill } from 'react-icons/pi';
import { IoPeopleCircle } from 'react-icons/io5';
import { MdAssignmentAdd, MdOutlineGroups } from 'react-icons/md';

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
          Name of DRC person
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
      >
        <LinkStyled href='/' style={{ gridColumn: 'span 2' }}>
          <StyledIcon> {<PiUserListFill />} </StyledIcon>
          <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
            Details of Scholars
          </Heading>
        </LinkStyled>
        <LinkStyled href='/drc/approvesrac'>
          <StyledIcon> {<MdOutlineGroups />} </StyledIcon>
          <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
            Approve SRAC Members
          </Heading>
        </LinkStyled>
        <LinkStyled href='/drc/approvesynopsis'>
          <StyledIcon> {<RxCube />} </StyledIcon>
          <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
            Approve Synopsis
          </Heading>
        </LinkStyled>

        <LinkStyled href='/drc/reportgeneration'>
          <StyledIcon> {<MdAssignmentAdd />} </StyledIcon>
          <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
            Report Generation
          </Heading>
        </LinkStyled>
        <LinkStyled href='/drc/approvesubmission'>
          <StyledIcon> {<IoPeopleCircle />} </StyledIcon>
          <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
            Approve Submission
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
