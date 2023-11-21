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
const ImageStyled = styled(Image)`
  padding: 10px;
  border-radius: 16px;
`;

type supervisorProfile = {
  assigned_scholars: string | null;
  designation: string | null;
  expertise: string[] | null;
  id: string;
  name: string | null;
};
export const index = ({ supervisors }: any) => {
  return (
    <>
      <Head>
        <title>Supervisors</title>
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
          Supervisors
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
            {supervisors?.map((supervisor: supervisorProfile) => (
              <Tr key={supervisor.id}>
                {/* <Td isNumeric>1</Td> */}
                <Td></Td>
                <Td>
                  <Heading>{supervisor.name}</Heading>
                  <Text>{supervisor.designation}</Text>
                </Td>
                <Td color='teal'>
                  {supervisor.expertise?.map((subject) => (
                    <li key={subject}>{subject}</li>
                  ))}
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
  const { data: supervisors, error } = await supabase
    .from('staff')
    .select('*')
    .eq('role', 'supervisor');
  return { props: { supervisors, error } };
};
