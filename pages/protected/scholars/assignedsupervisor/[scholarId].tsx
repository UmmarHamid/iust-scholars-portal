import styled from 'styled-components';
import { MdArrowBackIosNew } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';
import Head from 'next/head';
import Image from 'next/image';
import { useUser } from '@supabase/auth-helpers-react';
import {
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

export const Index = ({ supervisor }: any) => {
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
          <StyledIcon>{<MdArrowBackIosNew size={36} />}</StyledIcon>
        </Link>
        <Heading as={'h2'} color={'teal'} fontWeight={300}>
          Assigned Supervisor
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
            <Tr>
              <Td>
                <ImageStyled
                  alt='Not available yet'
                  width={200}
                  height={150}
                  src='/vc.jpg'
                />
              </Td>
              <Td>
                <Heading
                  as='h1'
                  fontFamily='Georgia'
                  fontWeight={'300'}
                  color='#4267B2'
                  mr={'100px'}
                >
                  {`${supervisor.name}`}
                </Heading>
              </Td>
              <Td color='teal' fontWeight={300} fontSize={'30px'}>
                {`${supervisor.designation}`}
              </Td>
              <Td color='teal' fontWeight={300} fontSize={'30px'}>
                {`${supervisor.email}`}
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <StyledFooter>
        © 2023 - Islamic University of Science and Technology.
      </StyledFooter>
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
      .from('supervisor_profiles')
      .select('*')
      .eq('id', scholarData.assigned_supervisor)
      .single();
    // Check if the supervisor record exists

    return { props: { supervisor: supervisorData } };
  } else {
    return { props: { supervisor: [] } };
  }
};
