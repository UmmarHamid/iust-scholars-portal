import styled from 'styled-components';
import { MdArrowBackIosNew } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';
import Head from 'next/head';
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
interface courseType {
  courses: Array<{ id: string; name: string; credits: number }>;
}

export const Index = ({ courses }: courseType) => {
  return (
    <>
      <Head>
        <title>Registered Courses</title>
      </Head>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Link href='/protected/scholars'>
          <StyledIcon>{<MdArrowBackIosNew size={36} />}</StyledIcon>
        </Link>
        <Heading as={'h2'} color={'teal'} fontWeight={300}>
          Registered Courses
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
            {courses.map((course, index) => (
              <Tr key={course.id}>
                <Td isNumeric>{index + 1}</Td>
                <Td>
                  <Heading
                    as='h2'
                    fontFamily='Georgia'
                    fontWeight={'300'}
                    color='teal'
                    mr={'550px'}
                  >
                    {course.name}
                  </Heading>
                </Td>
                <Td color='teal' fontWeight={300} fontSize={'30px'}>
                  <Link href=''>{`Credits: ${course.credits}`}</Link>
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
export default Index;

export const getServerSideProps: GetServerSideProps = async () => {
  let { data, error } = await supabase.from('courses').select(`*`);
  const courses = data ? Array(data[0].courses) : [];
  return { props: { courses, error } };
};
