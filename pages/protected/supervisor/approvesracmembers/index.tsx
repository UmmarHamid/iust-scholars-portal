import styled from 'styled-components';
import { MdArrowBackIosNew } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';
import Head from 'next/head';
import { Box, Button, Container, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { Select } from '@chakra-ui/react';
const StyledIcon = styled.h1`
  font-size: 46px;
  font-weight: 700;
  color: #0c2b50;
  padding-left: 30%;
`;
const StyledFooter = styled.footer`
  bottom: 0;
  position: fixed;
  width: 100%;
  background-color: #002147;
  color: #fff;
  text-align: center;
  line-height: 50px;
`;
const StyledList = styled.select`
  background: transparent;
  padding: 0 10px;
  height: 40px;
  border: 1px solid #d8d8d8;
  width: 350px;
  margin-right: 20px;
  border-radius: 10px;
`;
export const Index = () => {
  return (
    <>
      <Head>
        <title>Assign SRAC</title>
      </Head>

      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Link href='/protected/supervisor'>
          <StyledIcon>{<MdArrowBackIosNew size={36} />}</StyledIcon>
        </Link>
        <Heading as={'h2'} color={'teal'} fontWeight={300}>
          Assign SRAC Members
        </Heading>
        <Button colorScheme='red' leftIcon={<BiLogOut />}>
          Logout
        </Button>
      </Box>
      <Container maxWidth={'5xl'}>
        <Text fontSize={'3xl'} color={'#07443E'} letterSpacing={'5px'}>
          1. Zubair IUST0121014521 Face-recognition
        </Text>
        <Box
          marginTop='2%'
          marginBottom='2%'
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Select placeholder='Select SRAC 1' size='md' width={'40%'}>
            <option value=''>Dr. Zahid</option>
            <option value=''>Dr.Zubair</option>
            <option value=''>Dr. Saif</option>
            <option value=''>Dr. Shabia</option>
          </Select>
          <Select placeholder='Select SRAC 2' size='md' width={'40%'}>
            <option value=''>Dr. Ahsan</option>
            <option value=''>Dr.Shabana</option>
            <option value=''>Dr. Afnan</option>
            <option value=''>Dr. Zakir</option>
          </Select>
          <Button colorScheme='blue'>Submit</Button>
        </Box>
        <Text fontSize={'3xl'} color={'#07443E'} letterSpacing={'5px'}>
          2. Samin IUST0121014544 Voice-recognition
        </Text>
        <Box
          marginTop='2%'
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Select placeholder='Select SRAC 1' size='md' width={'40%'}>
            <option value=''>Dr. Zahid</option>
            <option value=''>Dr.Zubair</option>
            <option value=''>Dr. Saif</option>
            <option value=''>Dr. Shabia</option>
          </Select>
          <Select placeholder='Select SRAC 2' size='md' width={'40%'}>
            <option value=''>Dr. Ahsan</option>
            <option value=''>Dr.Shabana</option>
            <option value=''>Dr. Afnan</option>
            <option value=''>Dr. Zakir</option>
          </Select>
          <Button colorScheme='blue'>Submit</Button>
        </Box>
      </Container>
      <StyledFooter>
        © 2023 - Islamic University of Science and Technology.
      </StyledFooter>
    </>
  );
};
export default Index;
