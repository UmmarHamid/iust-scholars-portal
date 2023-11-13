import { Button } from '@chakra-ui/button';
import Link from 'next/link';
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react';
import Logout from '@/components/Logout/Logout';
import BackIcon from '@/components/BackIcon/BackIcon';
import InnerFooter from '@/components/InnerFooter/InnerFooter';
import { useUser } from '@supabase/auth-helpers-react';
import { useState } from 'react';
import supabase from '@/utils/supabase';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
export const Index = ({ scholar }: any) => {
  const loggedinUser = useUser();

  const [formData, setFormData] = useState({
    titleOfResearch: '',
    period: '',
    detailedProgressReport: '',
    summaryOfProgressReport: '',
  });
  const handleAddProgress = async () => {
    const { data, error } = await supabase
      .from('progress_report')
      .insert([formData])
      .select();

    const progress = data ? data[0] : [];
    const scholarid = scholar.id;
    console.log(progress.id);
    if (progress) {
      const { data, error } = await supabase
        .from('submitted_progress')
        .insert({ progress_id: progress.id, scholars_id: scholarid })
        .select();

      console.log(data, error);
      // router.push('/protected/office');
    }
    if (error) {
      console.log('error creating new scholar');
    }
  };
  return (
    <>
      <Head>
        <title>Progress Report</title>
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
          Progress Report
        </Heading>
        <Logout />
      </Box>
      <Container maxWidth={'6xl'}>
        <FormControl>
          <FormLabel>{`Title Of Research`}</FormLabel>
          <Textarea
            onChange={(e) =>
              setFormData({ ...formData, titleOfResearch: e.target.value })
            }
            mb={4}
          />
          <FormLabel>{`Six Month progress report for the period of:`}</FormLabel>
          <Textarea
            onChange={(e) =>
              setFormData({ ...formData, period: e.target.value })
            }
            mb={4}
          />
          <FormLabel>{` Detailed Progress Report`}</FormLabel>
          <Textarea
            onChange={(e) =>
              setFormData({
                ...formData,
                detailedProgressReport: e.target.value,
              })
            }
            mb={4}
          />
          <FormLabel>{`Summary Of Progress Report`}</FormLabel>
          <Textarea
            onChange={(e) =>
              setFormData({
                ...formData,
                summaryOfProgressReport: e.target.value,
              })
            }
          />
        </FormControl>
        <Button
          onClick={handleAddProgress}
          fontSize={26}
          colorScheme='teal'
          size='lg'
          width={'30%'}
          marginBottom={'10%'}
        >
          Submit
        </Button>
      </Container>
      <InnerFooter />
    </>
  );
};
export default Index;
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  let scholarId = params?.scholarId;
  let { data: scholarData } = await supabase
    .from('scholars_profiles')
    .select('id')
    .eq('id', scholarId)
    .single();
  console.log(scholarData);

  return { props: { scholar: scholarData } };
};
