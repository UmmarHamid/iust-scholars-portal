import Logo from '@/components/Logo/Logo';
import { Button, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import { styled } from 'styled-components';
import {
  BiLogOut,
  BiRegistered,
  BiSolidUserDetail,
  BiUserPlus,
} from 'react-icons/bi';
import Link from 'next/link';
import { IoPeopleCircle } from 'react-icons/io5';
import { HiDocumentDuplicate } from 'react-icons/hi';
import { AiOutlineTeam } from 'react-icons/ai';
import { MdAssignmentInd, MdOutlineSaveAs } from 'react-icons/md';
const StyledHead = styled.div`
  display: flex;
  justify-content: space-around;
  background-image: linear-gradient(43deg, #2c5364, #203a43, #0f2027);
`;
const StyledDisplay = styled.div`
  display: flex;
  justify-content: space-around;
`;
const StyledIcon = styled.div`
  font-size: 7em;
  padding-left: 25%;
  color: #0c2b50;
`;
const StyledComponent = styled.div`
  margin: 5%;
`;
const StyledText = styled.h2`
  font-size: 36px;
  color: #2f77cd;
  font-weight: 300;
  padding-top: 2%;
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

export const index = () => {
  return (
    <>
      <Head>
        <title>office</title>
      </Head>
      <StyledHead>
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
          color='#fff'
          mb={15}
          padding='2%'
        >
          Welcome Zubair
        </Heading>
        <Button colorScheme='red' leftIcon={<BiLogOut />} margin='2%'>
          Logout
        </Button>
      </StyledHead>
      <StyledDisplay>
        <StyledComponent>
          <Link href='/'>
            <StyledIcon> {<BiSolidUserDetail />} </StyledIcon>
            <StyledText>Personal Details</StyledText>
          </Link>
        </StyledComponent>
        <StyledComponent>
          <Link href='/'>
            <StyledIcon> {<BiRegistered />} </StyledIcon>
            <StyledText>Registered Courses</StyledText>
          </Link>
        </StyledComponent>
        <StyledComponent>
          <Link href='/'>
            <StyledIcon> {<MdOutlineSaveAs />} </StyledIcon>
            <StyledText>Submission Details</StyledText>
          </Link>
        </StyledComponent>
      </StyledDisplay>
      <StyledDisplay>
        <StyledComponent>
          <Link href='/'>
            <StyledIcon> {<MdAssignmentInd />} </StyledIcon>
            <StyledText> Assigned Supervisors</StyledText>
          </Link>
        </StyledComponent>
        <StyledComponent>
          <Link href='/'>
            <StyledIcon> {<AiOutlineTeam />} </StyledIcon>
            <StyledText>Assigned SRAC Members </StyledText>
          </Link>
        </StyledComponent>
        <StyledComponent>
          <Link href='/'>
            <StyledIcon> {<HiDocumentDuplicate />} </StyledIcon>
            <StyledText>Synopsis Details</StyledText>
          </Link>
        </StyledComponent>
      </StyledDisplay>
      <StyledFooter>
        © 2023 - Islamic University of Science and Technology.
      </StyledFooter>
    </>
  );
};
export default index;
