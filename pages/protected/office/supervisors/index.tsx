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

const ImageStyled = styled(Image)`
  padding: 10px;
  border-radius: 16px;
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
          <StyledIcon>{<MdArrowBackIosNew size={36} />}</StyledIcon>
        </Link>
        <Heading as={'h2'} color={'teal'} fontWeight={300}>
          Supervisors
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
            {supervisors.map((supervisor: supervisorProfile) => (
              <Tr key={supervisor.id}>
                {/* <Td isNumeric>1</Td> */}
                {/* <Td>
                  <ImageStyled
                    alt='Image'
                    width={100}
                    height={75}
                    src='/r.jfif'
                  />
                </Td> */}
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
      <StyledFooter>
        © 2023 - Islamic University of Science and Technology.
      </StyledFooter>
    </>
  );
};
export default index;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: supervisors, error } = await supabase
    .from('supervisor_profiles')
    .select('*');
  return { props: { supervisors, error } };
};
