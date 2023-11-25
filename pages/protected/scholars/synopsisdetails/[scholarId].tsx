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
export const Index = ({ scholar, synopsis }: any) => {
  const loggedinUser = useUser();
  const heading = {
    fontSize: '20px',
    fontWeight: '700',
    margin: '8px 0',
    textTransform: 'capitalize',
  };
  const text = {
    fontSize: '18px',
    lineHeight: '30px',
    letterSpacing: '1px',
    fontWeight: '400',
  };
  const [synopsisStatus, setsynopsisStatus] = useState(
    Object.keys(synopsis).length === 0
  );
  const [formData, setFormData] = useState({
    introduction: synopsis ? synopsis.introduction : '',
    reviewOfLiterature: synopsis ? synopsis.reviewOfLiterature : '',
    knowledgeGaps: synopsis ? synopsis.knowledgeGaps : '',
    originalityOfTheWork: synopsis ? synopsis.originalityOfTheWork : '',
    hypothesis: synopsis ? synopsis.hypothesis : '',
    objectives: synopsis ? synopsis.objectives : '',
    methodology: synopsis ? synopsis.methodology : '',
    deliverables: synopsis ? synopsis.deliverables : '',
    collaboration: synopsis ? synopsis.collaboration : '',
    // scholars_id: synopsis ? synopsis.scholars_id : '',
  });
  //   const formattedScholar : scholars.( scholars : any) => {
  //     return ( value: scholars.id );
  //   };
  const handleAddSynopsis = async () => {
    if (Object.keys(synopsis).length === 0) {
      const { data, error } = await supabase
        .from('synopsis')
        .insert([formData])
        .select();

      const synopsisData = data ? data[0] : [];
      console.log('response', synopsisData);

      const scholarid = scholar.id;
      if (synopsisData) {
        console.log('synopsisPayload');
        const { data, error } = await supabase
          .from('submitted_synopsis')
          .insert({ synopsis_id: synopsisData.id, scholars_id: scholarid })
          .select();

        setsynopsisStatus(false);

        console.log(data, error);
        // router.push('/protected/office');
      }
      if (error) {
        console.log('error creating new scholar');
      }
    } else {
      synopsis.supervisor_remarks = 'Pending';
      synopsis.drc_remarks = 'Pending';
      synopsis.drc_approval = 'Pending';

      supabase
        .from('synopsis')
        .update({
          introduction: formData.introduction,
          reviewOfLiterature: formData.reviewOfLiterature,
          knowledgeGaps: formData.knowledgeGaps,
          originalityOfTheWork: formData.originalityOfTheWork,
          hypothesis: formData.hypothesis,
          objectives: formData.objectives,
          methodology: formData.methodology,
          deliverables: formData.deliverables,
          collaboration: formData.collaboration,
          supervisor_remarks: 'Pending',
          drc_approval: 'pending',
          drc_remarks: 'Pending',
        })
        .eq('id', synopsis.id)
        .then((response) => {
          if (response.error) {
            console.error(response.error.message);
          } else {
            console.log('Update successful:', response.data);
            setsynopsisStatus(false);
          }
        });
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
      {synopsisStatus ? (
        <Container maxWidth={'6xl'}>
          <FormControl>
            <FormLabel>{`Introduction`}</FormLabel>
            <Textarea
              value={formData.introduction}
              onChange={(e) =>
                setFormData({ ...formData, introduction: e.target.value })
              }
              mb={4}
            />
            <FormLabel>{`Review Of Literature`}</FormLabel>
            <Textarea
              value={formData.reviewOfLiterature}
              onChange={(e) =>
                setFormData({ ...formData, reviewOfLiterature: e.target.value })
              }
              mb={4}
            />
            <FormLabel>{`Knowledge Gaps`}</FormLabel>
            <Textarea
              value={formData.knowledgeGaps}
              onChange={(e) =>
                setFormData({ ...formData, knowledgeGaps: e.target.value })
              }
              mb={4}
            />
            <FormLabel>{`Originality Of Work`}</FormLabel>
            <Textarea
              value={formData.originalityOfTheWork}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  originalityOfTheWork: e.target.value,
                })
              }
            />
            <FormLabel>{`Hypothesis`}</FormLabel>
            <Textarea
              value={formData.hypothesis}
              onChange={(e) =>
                setFormData({ ...formData, hypothesis: e.target.value })
              }
              mb={4}
            />
            <FormLabel>{`Objectives`}</FormLabel>
            <Textarea
              value={formData.objectives}
              onChange={(e) =>
                setFormData({ ...formData, objectives: e.target.value })
              }
              mb={4}
            />
            <FormLabel>{`Methodology`}</FormLabel>
            <Textarea
              value={formData.methodology}
              onChange={(e) =>
                setFormData({ ...formData, methodology: e.target.value })
              }
              mb={4}
            />
            <FormLabel>{`Deliverables`}</FormLabel>
            <Textarea
              value={formData.deliverables}
              onChange={(e) =>
                setFormData({ ...formData, deliverables: e.target.value })
              }
              mb={4}
            />
            <FormLabel>{`Collaboration`}</FormLabel>
            <Textarea
              value={formData.collaboration}
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
      ) : (
        <>
          <Box
            display={'flex'}
            justifyContent={'space-around'}
            alignItems={'center'}
            flexDirection={'column'}
            height={'100px'}
            marginTop={'100px'}
          >
            <h1 style={heading}>Synopsis Submitted</h1>

            <h2 style={heading}>
              Supervisor Remarks: &nbsp;{' '}
              <span style={text}>{synopsis.supervisor_remarks}</span>{' '}
            </h2>

            <h2 style={heading}>
              DRC Remarks: &nbsp;{' '}
              <span style={text}>{synopsis.supervisor_remarks}</span>{' '}
            </h2>

            <h2 style={heading}>
              Synopsis Status: &nbsp;{' '}
              <span style={text}>{synopsis.drc_approval}</span>{' '}
            </h2>
            {synopsis.drc_approval == 'reject' ? (
              <Button
                onClick={setsynopsisStatus}
                fontSize={26}
                colorScheme='red'
                size='sm'
                width={'30%'}
                padding={'20px 0'}
                margin={'30px 0'}
              >
                Edit
              </Button>
            ) : (
              <></>
            )}
          </Box>
        </>
      )}

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

  const { data: synopsisData } = await supabase
    .from('submitted_synopsis')
    .select('*');
    
  let synopsis = {};
  const d = await synopsisData?.filter((el) => el.scholars_id == scholarId);
  if (d.length !== 0) {
    const { data: synopsisDetails } = await supabase
      .from('synopsis')
      .select('*')
      .eq('id', d[0].synopsis_id)
      .single();

    synopsis = synopsisDetails ? synopsisDetails : JSON.stringify([]);
  }

  return { props: { scholar: scholarData, synopsis: synopsis } };
};
