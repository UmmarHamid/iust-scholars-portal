import styled from 'styled-components';
import { MdArrowBackIosNew } from 'react-icons/md';
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { BiLogOut } from 'react-icons/bi';
import Head from 'next/head';
import Link from 'next/link';
const StyledIcon = styled.h1`
  font-size: 42px;
  font-weight: 700;
  color: #0c2b50;
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
export const index = () => {
  return (
    <>
      <Head>
        <title>Approve SRAC</title>
      </Head>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Link href='/drc'>
          <StyledIcon>{<MdArrowBackIosNew size={36} />}</StyledIcon>
        </Link>
        <Heading as={'h2'} color={'teal'} fontWeight={300}>
          Approve SRAC
        </Heading>
        <Button colorScheme='red' leftIcon={<BiLogOut />}>
          Logout
        </Button>
      </Box>
      <Container maxWidth={'5xl'}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Text fontSize={'2xl'} color={'#07443E'}>
            1. Zubair DOCS IUST0121014521
          </Text>
          <Link href='/'>
            <Stack direction={['row']} spacing={'2%'}>
              <Input padding={'0 10px'} placeholder='SRAC Member 1' size='xl' />
              <Input padding={'0 10px'} placeholder='SRAC Member 2' size='xl' />
              <Button padding={'10px 30px'} colorScheme='blue'>
                Approve
              </Button>
            </Stack>
          </Link>
        </Box>
        <Box
          marginTop='3%'
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Text fontSize={'2xl'} color={'#07443E'}>
            2. Samin DOCS IUST0121014533
          </Text>
          <Link href='/'>
            <Stack direction={['row']} spacing={'2%'}>
              <Input padding={'0 10px'} placeholder='SRAC Member 1' size='xl' />
              <Input padding={'0 10px'} placeholder='SRAC Member 2' size='xl' />
              <Button padding={'10px 30px'} colorScheme='blue'>
                Approve
              </Button>
            </Stack>
          </Link>
        </Box>
      </Container>
      <StyledFooter>
        © 2023 - Islamic University of Science and Technology.
      </StyledFooter>
    </>
  );
};
export default index;
