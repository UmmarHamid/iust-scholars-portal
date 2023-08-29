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
export const index = () => {
  return (
    <>
      <Head>
        <title>Add Scholar</title>
      </Head>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Link href='/protected/office'>
          <StyledIcon>{<MdArrowBackIosNew size={36} />}</StyledIcon>
        </Link>
        <Heading as={'h2'} color={'teal'} fontWeight={300}>
          Add Scholar
        </Heading>
        <Button colorScheme='red' leftIcon={<BiLogOut />}>
          Logout
        </Button>
      </Box>
      <Container maxW='2xl' centerContent>
        <FormControl>
          <FormLabel>{`Full Name`}</FormLabel>
          <Input type='Text' mb={4} />
          <FormLabel>{`Father's Name`}</FormLabel>
          <Input type='Text' mb={4} />
          <FormLabel>{`Mother's Name`}</FormLabel>
          <Input type='Text' mb={4} />
          <FormLabel>{`Address`}</FormLabel>
          <Input type='Text' />
          <FormLabel>{`D.O.B`}</FormLabel>
          <Input type='date' mb={4} />
          <FormLabel>{`Phone no.`}</FormLabel>
          <Input type='number' mb={4} />
          <FormLabel>{`Email`}</FormLabel>
          <Input type='email' mb={4} />
          <FormLabel>{`Registration No.`}</FormLabel>
          <Input type='Text' mb={4} />
          <FormLabel>{`Joining Date`}</FormLabel>
          <Input type='Date' mb={4} />
          <FormLabel>{`Qualified Exam`}</FormLabel>
          <Input type='Text' mb={4} />
        </FormControl>
        <Button fontSize={26} colorScheme='teal' size='lg' width={'50%'}>
          Submit
        </Button>
      </Container>
    </>
  );
};
export default index;
