import Head from 'next/head';
import {
  Box,
  Button,
  Container,
  FormControl,
  Heading,
  Input,
  SimpleGrid,
  Text,
  Textarea,
} from '@chakra-ui/react';
import Link from 'next/link';
import { Select } from '@chakra-ui/react';
import InnerFooter from '@/components/InnerFooter/InnerFooter';
import Logout from '@/components/Logout/Logout';
import BackIcon from '@/components/BackIcon/BackIcon';
import { GetServerSideProps } from 'next';
import supabase from '@/utils/supabase';
import { ScholarProfile } from '../scholardetails';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';

export const Index = ({ scholars }: any) => {
  const [formData, setFormData] = useState({
    viva_score: '',
    credit_score: '',
    paper_published: '',
    confrence_attended: '',
  });
  const handleSubmitScore = async (scholarId: string) => {
    const { data, error } = await supabase
      .from('scholars_score')
      .insert([formData])
      .select();
    const score = data ? data[0] : [];
    console.log('score id is ...', score.id);
    // const router = useRouter();
    try {
      // Make an update query to update the supervisor assignment in the Supabase table
      const { error } = await supabase
        .from('scholars_profiles') // Replace with your table name
        .update({ credit_score: score.id })
        .eq('id', scholarId);

      if (error) {
        throw error;
      }

      // Success! You can also update the local state if needed.
      // For example, set a message to indicate success.
      console.log(`Score assigned for scholar ${scholarId}`);
    } catch (error) {
      console.error('Error assigning score:', error);
    }
    alert('Progess has been updated');
    window.location.reload();
  };
  return (
    <>
      <Head>
        <title>Research Progress</title>
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
          Research Progress
        </Heading>
        <Logout />
      </Box>
      <Container maxW='5xl' marginBottom={'20%'}>
        {scholars.map((scholar: ScholarProfile, index: number) => (
          <SimpleGrid key={scholar.id} columns={0} gap={0} mb={8}>
            <Text fontSize={'2xl'} color={'#07443E'}>
              {`${index + 1} - ${scholar.username} ${scholar.reg_no}`}
            </Text>
            {/* TODO: Add default value for the selectors */}
            <SimpleGrid
              marginTop={2}
              display='flex'
              flexDirection='row'
              alignItems='center'
              justifyContent='space-around'
            >
              <FormControl>
                <Input
                  variant='outline'
                  padding={7}
                  htmlSize={30}
                  marginRight={4}
                  width='auto'
                  placeholder='Viva Score'
                  onChange={(e) =>
                    setFormData({ ...formData, viva_score: e.target.value })
                  }
                  mb={2}
                />
                <Input
                  variant='outline'
                  padding={7}
                  marginRight={4}
                  htmlSize={30}
                  width='auto'
                  placeholder='Credit Score'
                  onChange={(e) =>
                    setFormData({ ...formData, credit_score: e.target.value })
                  }
                  mb={2}
                />
                <Input
                  variant='outline'
                  padding={7}
                  marginRight={4}
                  htmlSize={30}
                  width='auto'
                  placeholder='Paper Published'
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      paper_published: e.target.value,
                    })
                  }
                  mb={2}
                />
                <Input
                  variant='outline'
                  padding={7}
                  marginRight={4}
                  htmlSize={30}
                  width='auto'
                  placeholder='Confrence Attended'
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confrence_attended: e.target.value,
                    })
                  }
                  mb={2}
                />
              </FormControl>

              <Button
                size='lg'
                colorScheme='blue'
                onClick={() => handleSubmitScore(scholar.id)}
              >
                Submit
              </Button>
            </SimpleGrid>
          </SimpleGrid>
        ))}
      </Container>
      <InnerFooter />
    </>
  );
};
export default Index;
export const getServerSideProps: GetServerSideProps = async () => {
  const { data: scholars } = await supabase
    .from('scholars_profiles')
    .select('*');
  return { props: { scholars } };
};
