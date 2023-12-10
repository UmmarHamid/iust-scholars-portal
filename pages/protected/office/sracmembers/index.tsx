import styled from 'styled-components';
import Head from 'next/head';
import Image from 'next/image';
import {
  Text,
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
import InnerFooter from '@/components/InnerFooter/InnerFooter';
import BackIcon from '@/components/BackIcon/BackIcon';
import Logout from '@/components/Logout/Logout';

type sracProfile = {
  designation: string | null;
  email: string;
  id: string;
  name: string | null;
};
export const index = ({ srac }: any) => {
  return (
    <>
      <Head>
        <title>Srac Member</title>
      </Head>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Link href='/protected/office'>
          <BackIcon />
        </Link>
        <Heading as={'h2'} color={'teal'} fontWeight={300}>
          SRAC
        </Heading>
        <Logout />
      </Box>
      <TableContainer>
        <Table
          display={'flex'}
          justifyContent={'space-around'}
          variant='simple'
          marginBottom={'18%'}
        >
          <Tbody>
            {srac?.map((srac: sracProfile) => (
              <Tr key={srac.id}>
                {/* <Td isNumeric>1</Td> */}
                <Td></Td>
                <Td>
                  <Heading color={'teal'}>{srac.name}</Heading>
                  <Text>{srac.designation}</Text>
                  <Text color={'blue'}>{srac.email}</Text>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <InnerFooter />
    </>
  );
};
export default index;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: srac, error } = await supabase
    .from('srac_profiles')
    .select('*');
  return { props: { srac, error } };
};
