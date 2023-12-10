import Head from 'next/head';
import Link from 'next/link';
import { Box, Container, Heading } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import supabase from '@/utils/supabase';
import InnerFooter from '@/components/InnerFooter/InnerFooter';
import Logout from '@/components/Logout/Logout';
import BackIcon from '@/components/BackIcon/BackIcon';
import { fetchUserDetails } from '@/utils/utils';
import { useUser } from '@supabase/auth-helpers-react';

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
  email: string;
  assigned_srac1: string | null;
  assigned_srac2: string | null;
  assigned_supervisor: string | null;
  credit_score: string | null;
};

export const index = ({ scholars }: any) => {
  const loggedinUser = useUser();
  return (
    <>
      <Head>
        <title>Report Generation</title>
      </Head>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Link href={`/protected/supervisor/${loggedinUser?.email}`}>
          <BackIcon />
        </Link>
        <Heading as={'h2'} color={'teal'} fontWeight={300}>
          Report Generation
        </Heading>
        <Logout />
      </Box>
      <Container maxW='5xl' marginBottom={'20%'}>
        {scholars?.map((scholar: ScholarProfile, index: number) => (
          <Link
            key={scholar.id}
            href={`/protected/supervisor/reportgenerationdetails?id=${scholar.id}`}
          >
            <Heading
              margin={'2%'}
              as={'h6'}
              color={'#07443E'}
              letterSpacing={'10px'}
            >
              {`${index + 1}- ${scholar.username} ${scholar.reg_no} `}
            </Heading>
          </Link>
        ))}
      </Container>
      <InnerFooter />
    </>
  );
};
export default index;

export const getServerSideProps: GetServerSideProps = async (params) => {
  const { data: scholarsResponse } = await supabase
    .from('scholars_profiles')
    .select('*');

  const userDetails = await fetchUserDetails(
    params?.query?.email?.toString() || ''
  );
  const scholars = scholarsResponse?.filter(
    (scholar) => scholar.assigned_supervisor == userDetails.id
  );

  return { props: { scholars } };
};
