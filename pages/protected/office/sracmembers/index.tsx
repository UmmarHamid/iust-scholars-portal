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
import BackIcon from '@/components/BackIcon/BackIcon';
import Logout from '@/components/Logout/Logout';
import InnerFooter from '@/components/InnerFooter/InnerFooter';

const ImageStyled = styled(Image)`
  padding: 10px;
  border-radius: 16px;
`;

type sracMember = {
  designation: string | null;
  email: string | null;
  id: string;
  name: string | null;
};
export const index = ({ members }: any) => {
  return (
    <>
      <Head>
        <title>Srac Members</title>
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
          SRAC Members
        </Heading>
        <Logout />
      </Box>
      <TableContainer>
        <Table
          display={'flex'}
          justifyContent={'space-around'}
          variant='simple'
          marginBottom={'25%'}
        >
          <Tbody>
            {members?.map((member: sracMember, index: number) => (
              <Tr key={member.id}>
                <Td isNumeric>{index + 1}</Td>
                <Td>
                  <ImageStyled
                    alt='Not available yet'
                    width={100}
                    height={75}
                    src='/.jfif'
                  />
                </Td>
                <Td>
                  <Heading>{member.name}</Heading>
                  <Text></Text>
                  <Text></Text>
                </Td>
                <Td color='teal'>{member.designation}</Td>
                <Td color='teal'>{member.email}</Td>
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
  const { data: members, error } = await supabase
    .from('srac_profiles')
    .select('*');
  return { props: { members, error } };
};
