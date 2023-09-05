'use client';
import styled from 'styled-components';
import Select from 'react-select';
import { MdArrowBackIosNew } from 'react-icons/md';
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react';
import { BiLogOut } from 'react-icons/bi';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import supabase from '@/utils/supabase';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
const StyledIcon = styled.h1`
  font-size: 42px;
  font-weight: 700;
  color: #0c2b50;
`;

type courseType = {
  id: string;
  name: string;
  credits: number;
};
export const Index = ({ courses }: any) => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: '',
    father: '',
    mother: '',
    address: '',
    dob: '',
    phone: '',
    department: '',
    reg_no: '',
    join_date: '',
    qualified_exam: '',
    email: '',
  });
  const formattedCourses = courses.map((course: courseType) => {
    return { label: course.name, value: course.id };
  });

  const handleAddScholar = async () => {
    // TODO: Add form Validation here
    const { data, error } = await supabase
      .from('scholars_profiles')
      .insert([formData])
      .select();

    const scholar = data ? data[0] : [];

    if (scholar) {
      console.log(`User created successfully`, scholar);
      const coursesPayload = selectedCourses.map((course: any) => {
        return { course_id: course.value, scholar_id: scholar.id };
      });
      console.log(coursesPayload);
      const { data, error } = await supabase
        .from('scholar_registered_courses')
        .insert(coursesPayload)
        .select();

      console.log(data, error);
      // router.push('/protected/office');
    }
    if (error) {
      console.log('error creating new scholar');
    }
  };

  const [selectedCourses, setSelectedCourses] = useState(formattedCourses[0]);

  return (
    <>
      <Head>
        <title>Add Scholar</title>
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
          Add Scholar
        </Heading>
        <Button colorScheme='red' leftIcon={<BiLogOut />}>
          Logout
        </Button>
      </Box>
      <Container maxW='2xl' centerContent>
        <FormControl>
          <FormLabel>{`Full Name`}</FormLabel>
          <Input
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            type='Text'
            mb={4}
          />
          <FormLabel>{`Father's Name`}</FormLabel>
          <Input
            onChange={(e) =>
              setFormData({ ...formData, father: e.target.value })
            }
            type='Text'
            mb={4}
          />
          <FormLabel>{`Mother's Name`}</FormLabel>
          <Input
            onChange={(e) =>
              setFormData({ ...formData, mother: e.target.value })
            }
            type='Text'
            mb={4}
          />
          <FormLabel>{`Address`}</FormLabel>
          <Input
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            type='Text'
          />
          <FormLabel>{`D.O.B`}</FormLabel>
          <Input
            onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
            type='date'
            mb={4}
          />
          <FormLabel>{`Phone no.`}</FormLabel>
          <Input
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            type='number'
            mb={4}
          />
          <FormLabel>{`Email`}</FormLabel>
          <Input
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            type='email'
            mb={4}
          />
          <FormLabel>{`Registration No.`}</FormLabel>
          <Input
            onChange={(e) =>
              setFormData({ ...formData, reg_no: e.target.value })
            }
            type='Text'
            mb={4}
          />
          <FormLabel>{`Joining Date`}</FormLabel>
          <Input
            onChange={(e) =>
              setFormData({ ...formData, join_date: e.target.value })
            }
            type='Date'
            mb={4}
          />
          <FormLabel>{`Qualified Exam`}</FormLabel>
          <Input
            onChange={(e) =>
              setFormData({ ...formData, qualified_exam: e.target.value })
            }
            type='Text'
            mb={4}
          />
          <FormLabel>{`Selected Courses`}</FormLabel>
          <Box marginBottom={'16px'}>
            <Select
              options={formattedCourses}
              isMulti
              onChange={(values) => {
                setSelectedCourses(values);
              }}
              closeMenuOnSelect={false}
            />
          </Box>
        </FormControl>
        <Button
          onClick={handleAddScholar}
          fontSize={26}
          colorScheme='teal'
          size='lg'
          width={'50%'}
        >
          Submit
        </Button>
      </Container>
    </>
  );
};
export default Index;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: courses, error } = await supabase.from('courses').select('*');
  console.log(courses);
  return { props: { courses, error } };
};
