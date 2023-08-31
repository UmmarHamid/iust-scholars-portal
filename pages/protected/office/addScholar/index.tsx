import styled from 'styled-components';

import { MdArrowBackIosNew } from 'react-icons/md';
import {
  Box,
  Button,
  Container,
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
const StyledIcon = styled.h1`
  font-size: 42px;
  font-weight: 700;
  color: #0c2b50;
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
  });

  const handleAddScholar = async () => {
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
          marginBottom='10%'
        >
          Submit
        </Button>
      </Container>
      <StyledFooter>
        © 2023 - Islamic University of Science and Technology.
      </StyledFooter>
    </>
  );
};
export default Index;
