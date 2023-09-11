'use client';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import supabase from '@/utils/supabase';
import { GetServerSideProps } from 'next';
import InnerFooter from '@/components/InnerFooter/InnerFooter';
import BackIcon from '@/components/BackIcon/BackIcon';
import Logout from '@/components/Logout/Logout';
import { useState } from 'react';
import { useRouter } from 'next/router';
type courseType = {
  id: string;
  name: string;
  credits: number;
};

export const ScholarDetails = ({ data }: any) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: data.username,
    father: data.father,
    mother: data.mother,
    address: data.address,
    dob: data.dob,
    phone: data.phone,
    department: data.department,
    reg_no: data.reg_no,
    join_date: data.join_data,
    qualified_exam: data.qualified_exam,
    email: data.email,
  });

  const handleEditScholar = async () => {
    // TODO: Add form Validation here
    const { data: updatedScholar, error } = await supabase
      .from('scholars_profiles')
      .update([formData])
      .eq('email', data.email)
      .select()
      .single();
    if (updatedScholar) {
      router.push(`/protected/office/scholardetails/${updatedScholar.email}`);
    }
    if (error) {
      console.log('error updating  scholar');
    }
  };

  return (
    <>
      <Head>
        <title>Edit Scholar</title>
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
          Edit Scholar
        </Heading>
        <Logout />
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
            defaultValue={data.username}
          />
          <FormLabel>{`Father's Name`}</FormLabel>
          <Input
            onChange={(e) =>
              setFormData({ ...formData, father: e.target.value })
            }
            type='Text'
            mb={4}
            defaultValue={data.father}
          />
          <FormLabel>{`Mother's Name`}</FormLabel>
          <Input
            onChange={(e) =>
              setFormData({ ...formData, mother: e.target.value })
            }
            type='Text'
            mb={4}
            defaultValue={data.mother}
          />
          <FormLabel>{`Address`}</FormLabel>
          <Input
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            type='Text'
            mb={4}
            defaultValue={data.address}
          />
          <FormLabel>{`D.O.B`}</FormLabel>
          <Input
            onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
            type='date'
            mb={4}
            defaultValue={data.dob}
          />
          <FormLabel>{`Phone no.`}</FormLabel>
          <Input
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            type='number'
            mb={4}
            defaultValue={data.phone}
          />
          <FormLabel>{`Email`}</FormLabel>
          <Input
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            type='email'
            mb={4}
            defaultValue={data.email}
          />
          <FormLabel>{`Registration No.`}</FormLabel>
          <Input
            onChange={(e) =>
              setFormData({ ...formData, reg_no: e.target.value })
            }
            type='Text'
            mb={4}
            defaultValue={data.reg_no}
          />
          <FormLabel>{`Joining Date`}</FormLabel>
          <Input
            onChange={(e) =>
              setFormData({ ...formData, join_date: e.target.value })
            }
            type='Date'
            mb={4}
            defaultValue={data.join_date}
          />
          <FormLabel>{`Qualified Exam`}</FormLabel>
          <Input
            onChange={(e) =>
              setFormData({ ...formData, qualified_exam: e.target.value })
            }
            type='Text'
            mb={4}
            defaultValue={data.qualified_exam}
          />
        </FormControl>
        <Button
          onClick={handleEditScholar}
          fontSize={26}
          colorScheme='teal'
          size='lg'
          width={'50%'}
          marginBottom={'2%'}
        >
          Submit
        </Button>
      </Container>
      <InnerFooter />
    </>
  );
};
export default ScholarDetails;
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { data, error } = await supabase
    .from('scholars_profiles')
    .select('*')
    .eq('email', params?.scholarId);
  return { props: { data: data ? data[0] : [], error } };
};
