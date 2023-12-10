import Head from 'next/head';
import { useUser } from '@supabase/auth-helpers-react';
import {
  Box,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from '@chakra-ui/react';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import supabase from '@/utils/supabase';
import BackIcon from '@/components/BackIcon/BackIcon';
import InnerFooter from '@/components/InnerFooter/InnerFooter';
import Logout from '@/components/Logout/Logout';
export const Index = ({ supervisor }: any) => {
  const id = supervisor?.id;
  const loggedinUser = useUser();

  return (
    <>
      <Head>
        <title> Assigned Supervisor</title>
      </Head>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Link href={`/protected/scholars/${loggedinUser?.email}`}>
          <BackIcon />
        </Link>
        <Heading as={'h2'} color={'teal'} fontWeight={300}>
          Assigned Supervisor
        </Heading>
        <Logout />
      </Box>
      <TableContainer>
        <Table
          display={'flex'}
          justifyContent={'space-around'}
          variant='simple'
          marginBottom={'20%'}
        >
          <Tbody>
            <Tr>
              <Td></Td>
              <Td>
                <Heading
                  as='h1'
                  fontFamily='Georgia'
                  fontWeight={'300'}
                  color='#4267B2'
                  mr={'100px'}
                >
                  {`${supervisor?.name}`}
                </Heading>
              </Td>
              <Td color='teal' fontWeight={300} fontSize={'30px'}>
                {`${supervisor?.designation}`}
              </Td>
              <Td color='teal' fontWeight={300} fontSize={'30px'}>
                {`${supervisor?.email}`}
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      <InnerFooter />
    </>
  );
};
export default Index;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  let scholarId = params?.scholarId;
  let { data: scholarData } = await supabase
    .from('scholars_profiles')
    .select('*')
    .eq('id', scholarId)
    .single();

  // Check if the scholar record exists
  if (scholarData) {
    // Now, retrieve the supervisor information for the assigned supervisor
    let { data: supervisorData } = await supabase
      .from('staff')
      .select('*')
      .eq('id', scholarData.assigned_supervisor)
      .single();
    // Check if the supervisor record exists
    console.log(supervisorData);
    return { props: { supervisor: supervisorData } };
  } else {
    return { props: { supervisor: [] } };
  }
};
