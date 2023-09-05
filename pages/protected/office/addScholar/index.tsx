import styled from 'styled-components';
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
import { useState } from 'react';
import supabase from '@/utils/supabase';
import { useRouter } from 'next/router';
import InnerFooter from '@/components/InnerFooter/InnerFooter';
import BackIcon from '@/components/BackIcon/BackIcon';
import Logout from '@/components/Logout/Logout';
export const Index = () => {
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

  const handleAddScholar = async () => {
    // TODO: Add form Validation here
    const { data, error } = await supabase
      .from('scholars_profiles')
      .insert([formData])
      .select();

    if (data) {
      alert(`User with name ${data[0].username} created successfully`);
      router.push('/protected/office');
    }
    if (error) {
      alert(`Some error occurred`);
    }
  };

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
          <BackIcon />
        </Link>
        <Heading as={'h2'} color={'teal'} fontWeight={300}>
          Add Scholar
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
        </FormControl>
        <Button
          onClick={handleAddScholar}
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
export default Index;
