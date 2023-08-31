import styled from 'styled-components';
import { MdArrowBackIosNew } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';
import Head from 'next/head';
import Link from 'next/link';
import { Box, Button, Container, Heading } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import supabase from '@/utils/supabase';
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
type ScholarProfile = {
  address: string | null;
  department: string | null;
  dob: string | null;
  father: string | null;
  id: string;
  join_date: string | null;
  mother: string | null;
  phone: number | null;
  qualified_exam: string | null;
  reg_no: string | null;
  registered_courses: string | null;
  user_role: string | null;
  username: string | null;
};

export const index = ({ scholars }: any) => {
  return (
    <>
      <Head>
        <title>Scholar Details</title>
      </Head>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Link href='/protected/drc'>
          <StyledIcon>{<MdArrowBackIosNew size={36} />}</StyledIcon>
        </Link>
        <Heading as={'h2'} color={'teal'} fontWeight={300}>
          Scholar Details
        </Heading>
        <Button colorScheme='red' leftIcon={<BiLogOut />}>
          Logout
        </Button>
      </Box>
      <Container maxW='5xl'>
        {scholars.map((scholar: ScholarProfile, index: number) => (
          <Heading
            key={scholar.id}
            margin={'2%'}
            as={'h6'}
            color={'#07443E'}
            letterSpacing={'10px'}
          >
            {`${index + 1}- ${scholar.username} ${scholar.reg_no} `}
          </Heading>
        ))}
      </Container>
      <StyledFooter>
        © 2023 - Islamic University of Science and Technology.
      </StyledFooter>
    </>
  );
};
export default index;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: scholars, error } = await supabase
    .from('scholars_profiles')
    .select('*');
  return { props: { scholars, error } };
};
