import styled from 'styled-components';
import { MdArrowBackIosNew } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';
import Head from 'next/head';
import Image from 'next/image';
import {
  Text,
  Box,
  Button,
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
const StyledIcon = styled.h1`
  font-size: 46px;
  font-weight: 700;
  color: #0c2b50;
  padding-left: 30%;
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
          <StyledIcon>{<MdArrowBackIosNew size={36} />}</StyledIcon>
        </Link>
        <Heading as={'h2'} color={'teal'} fontWeight={300}>
          SRAC Members
        </Heading>
        <Button colorScheme='red' leftIcon={<BiLogOut />}>
          Logout
        </Button>
      </Box>
      <TableContainer>
        <Table
          display={'flex'}
          justifyContent={'space-around'}
          variant='simple'
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
                    src='/r.jfif'
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
      <StyledFooter>
        © 2023 - Islamic University of Science and Technology.
      </StyledFooter>
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
