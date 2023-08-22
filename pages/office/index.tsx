import Logo from '@/components/Logo/Logo';
import { Button, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import { styled } from 'styled-components';
import { BiLogOut, BiUserPlus } from 'react-icons/bi';
import Link from 'next/link';
import { RxUpdate } from 'react-icons/rx';
import { PiUserListFill } from 'react-icons/pi';
import { IoPeopleCircle } from 'react-icons/io5';
import { MdAssignment, MdAssignmentAdd, MdOutlineGroups } from 'react-icons/md';
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
          Department Of Computer Science
        </Heading>
        <Button colorScheme='red' leftIcon={<BiLogOut />} margin='2%'>
          Logout
        </Button>
      </StyledHead>
      <StyledDisplay>
        <StyledComponent>
          <Link href='/'>
            <StyledIcon> {<BiUserPlus />} </StyledIcon>
            <StyledText>Add Scholar</StyledText>
          </Link>
        </StyledComponent>
        <StyledComponent>
          <Link href='/'>
            <StyledIcon> {<PiUserListFill />} </StyledIcon>
            <StyledText>Scholars Details</StyledText>
          </Link>
        </StyledComponent>
        <StyledComponent>
          <Link href='/'>
            <StyledIcon> {<RxUpdate />} </StyledIcon>
            <StyledText>Update Details</StyledText>
          </Link>
        </StyledComponent>
      </StyledDisplay>
      <StyledDisplay>
        <StyledComponent>
          <Link href='/'>
            <StyledIcon> {<MdOutlineGroups />} </StyledIcon>
            <StyledText>Supervisors</StyledText>
          </Link>
        </StyledComponent>
        <StyledComponent>
          <Link href='/'>
            <StyledIcon> {<IoPeopleCircle />} </StyledIcon>
            <StyledText>SRAC Members</StyledText>
          </Link>
        </StyledComponent>
        <StyledComponent>
          <Link href='/'>
            <StyledIcon> {<MdAssignmentAdd />} </StyledIcon>
            <StyledText>Assign Supervisor</StyledText>
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
