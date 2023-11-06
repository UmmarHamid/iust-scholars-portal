import { Button } from '@chakra-ui/button';
import Link from 'next/link';
import { Box, Container, FormControl, FormLabel, Heading, Input, Text, Textarea } from '@chakra-ui/react';
import BackIcon from '@/components/BackIcon/BackIcon';
import InnerFooter from '@/components/InnerFooter/InnerFooter';
import Logout from '@/components/Logout/Logout';
import { useUser } from '@supabase/auth-helpers-react';
import { useState } from 'react';
import supabase from '@/utils/supabase';


export const Index = () => {

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
    scholars_id: loggedinUser?.id
  });

  const handleAddSynopsis = async () => {
    const { data, error } = await supabase
      .from('synopsis')
      .insert([formData])
      .select();

    console.log(formData)

    const synopsis = data ? data[0] : [];
    console.log(synopsis)

    if (synopsis) {
      console.log(`Synopsis Submitted`, synopsis);
      if (error) {
        console.log("Error Submitting Synopsis", error);
      }

    }
  }


  return (
    <>
      <title>Synopsis Details</title>
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
            onChange={(e) => setFormData({ ...formData, hypothesis: e.target.value })}
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
