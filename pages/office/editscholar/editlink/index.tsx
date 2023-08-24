import styled from 'styled-components';
import { MdArrowBackIosNew } from 'react-icons/md';
import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react';
import { BiLogOut } from 'react-icons/bi';
import Head from 'next/head';
import Link from 'next/link';
const StyledHeading = styled.div``;
const StyledIcon = styled.h1`
  font-size: 42px;
  font-weight: 700;
  color: #0c2b50;
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
        <title>Edit </title>
      </Head>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Link href='/office/editscholar'>
          <StyledIcon>{<MdArrowBackIosNew />}</StyledIcon>
        </Link>
        <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
          Edit Information
        </Heading>
        <Button colorScheme='red' leftIcon={<BiLogOut />}>
          Logout
        </Button>
      </Box>
      <Container maxW='2xl' centerContent>
        <FormControl>
          <FormLabel>Full Name</FormLabel>
          <Input type='Text' />
          <FormLabel>Father's Name</FormLabel>
          <Input type='Text' />
          <FormLabel>Mother's Name</FormLabel>
          <Input type='Text' />
          <FormLabel>Address</FormLabel>
          <Input type='Text' />
          <FormLabel>D.O.B</FormLabel>
          <Input type='date' />
          <FormLabel>Phone no.</FormLabel>
          <Input type='number' />
          <FormLabel>Email</FormLabel>
          <Input type='email' />
          <FormLabel>Registration No.</FormLabel>
          <Input type='Text' />
          <FormLabel>Joining Date</FormLabel>
          <Input type='Date' />
          <FormLabel>Qualified Exam</FormLabel>
          <Input type='Text' />
        </FormControl>
        <Button
          fontSize={26}
          paddingLeft='25%'
          paddingRight='25%'
          colorScheme='teal'
          size='lg'
          margin='5%'
        >
          Submit
        </Button>
      </Container>
      <StyledFooter>
        © 2023 - Islamic University of Science and Technology.
      </StyledFooter>
    </>
  );
};
export default index;
