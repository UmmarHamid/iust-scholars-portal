import { useUser } from '@supabase/auth-helpers-react';
import BackIcon from '@/components/BackIcon/BackIcon';
import InnerFooter from '@/components/InnerFooter/InnerFooter';
import Logout from '@/components/Logout/Logout';
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

type coursesType = Array<{ id: string; name: string; credits: number }>;

export const Index = ({ scholarCourses }: any) => {
  const courses = scholarCourses as coursesType;

  const loggedinUser = useUser();

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
        <Link href={`/protected/scholars/${loggedinUser?.email}`}>
          <BackIcon />
        </Link>
        <Heading as={'h2'} color={'teal'} fontWeight={300}>
          Registered Courses
        </Heading>
        <Logout />
      </Box>
      <TableContainer>
        <Table
          display={'flex'}
          justifyContent={'space-around'}
          variant='simple'
          marginBottom={'34%'}
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
      <InnerFooter />
    </>
  );
};
export default Index;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  let scholarId = params?.scholarId;
  let { data, error } = await supabase
    .from('courses')
    .select(
      'id, name, credits, scholar_registered_courses(course_id, scholar_id)'
    );

  let filteredCourses = data?.filter((course) => {
    return course.scholar_registered_courses.some(
      (entry) => entry.scholar_id === scholarId
    );
  });

  return { props: { scholarCourses: filteredCourses, error } };
};
