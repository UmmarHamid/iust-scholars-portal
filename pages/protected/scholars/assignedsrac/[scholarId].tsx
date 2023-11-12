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
export const Index = ({ srac }: any) => {
  const loggedinUser = useUser();
  return (
    <>
      <Head>
        <title> Assigned Srac</title>
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
          Assigned Srac
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
                  {`${srac.name}`}
                </Heading>
              </Td>
              <Td color='teal' fontWeight={300} fontSize={'30px'}>
                {`${srac.designation}`}
              </Td>
              <Td color='teal' fontWeight={300} fontSize={'30px'}>
                {`${srac.email}`}
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
  console.log(scholarId);
  let { data: scholarData } = await supabase
    .from('scholars_profiles')
    .select('id,assigned_srac1,assigned_srac2')
    .eq('id', scholarId)
    .single();

  // Check if the scholar record exists
  if (scholarData) {
    // Now, retrieve the srac information for the assigned srac
    let { data: sracData } = await supabase
      .from('srac_profiles')
      .select('*')
      .eq('id', scholarData.assigned_srac1)
      .single();
    // Check if the supervisor record exists
    console.log(sracData);
    return { props: { srac: sracData } };
  } else {
    return { props: { srac: [] } };
  }
};
