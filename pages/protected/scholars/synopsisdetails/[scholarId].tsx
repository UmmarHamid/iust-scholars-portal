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
import BackIcon from '@/components/BackIcon/BackIcon';
import InnerFooter from '@/components/InnerFooter/InnerFooter';
import Logout from '@/components/Logout/Logout';
import { useUser } from '@supabase/auth-helpers-react';
import { useState } from 'react';
import supabase from '@/utils/supabase';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
// type scholarType = {
//   id: string;
// };
export const Index = ({ scholar }: any) => {
  const loggedinUser = useUser();

  const [formData, setFormData] = useState({
    introduction: '',
    reviewOfLiterature: '',
    knowledgeGaps: '',
    originalityOfTheWork: '',
    hypothesis: '',
    objectives: '',
    methodology: '',
    deliverables: '',
    collaboration: '',
    // scholars_id: '',
  });
  //   const formattedScholar : scholars.( scholars : any) => {
  //     return ( value: scholars.id );
  //   };
  const handleAddSynopsis = async () => {
    const { data, error } = await supabase
      .from('synopsis')
      .insert([formData])
      .select();

    const synopsis = data ? data[0] : [];
    console.log(scholar.id);
    console.log('synopsis ..id.....', synopsis.id);
    const scholarid = scholar.id;
    if (synopsis) {
      //   console.log(synopsisPayload);
      const { data, error } = await supabase
        .from('submitted_synopsis')
        .insert({ synopsis_id: synopsis.id, scholars_id: scholarid })
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
        <title>Synopsis Details</title>
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
          Synopsis Details
        </Heading>
        <Logout />
      </Box>
      <Container maxWidth={'6xl'}>
        <FormControl>
          <FormLabel>{`Introduction`}</FormLabel>
          <Textarea
            onChange={(e) =>
              setFormData({ ...formData, introduction: e.target.value })
            }
            mb={4}
          />
          <FormLabel>{`Review Of Literature`}</FormLabel>
          <Textarea
            onChange={(e) =>
              setFormData({ ...formData, reviewOfLiterature: e.target.value })
            }
            mb={4}
          />
          <FormLabel>{`Knowledge Gaps`}</FormLabel>
          <Textarea
            onChange={(e) =>
              setFormData({ ...formData, knowledgeGaps: e.target.value })
            }
            mb={4}
          />
          <FormLabel>{`Originality Of Work`}</FormLabel>
          <Textarea
            onChange={(e) =>
              setFormData({ ...formData, originalityOfTheWork: e.target.value })
            }
          />
          <FormLabel>{`Hypothesis`}</FormLabel>
          <Textarea
            onChange={(e) =>
              setFormData({ ...formData, hypothesis: e.target.value })
            }
            mb={4}
          />
          <FormLabel>{`Objectives`}</FormLabel>
          <Textarea
            onChange={(e) =>
              setFormData({ ...formData, objectives: e.target.value })
            }
            mb={4}
          />
          <FormLabel>{`Methodology`}</FormLabel>
          <Textarea
            onChange={(e) =>
              setFormData({ ...formData, methodology: e.target.value })
            }
            mb={4}
          />
          <FormLabel>{`Deliverables`}</FormLabel>
          <Textarea
            onChange={(e) =>
              setFormData({ ...formData, deliverables: e.target.value })
            }
            mb={4}
          />
          <FormLabel>{`Collaboration`}</FormLabel>
          <Textarea
            onChange={(e) =>
              setFormData({ ...formData, collaboration: e.target.value })
            }
            mb={4}
          />
        </FormControl>
        <Button
          onClick={handleAddSynopsis}
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
