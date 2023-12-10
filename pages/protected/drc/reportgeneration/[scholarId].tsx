import Link from 'next/link';
import {
  Box,
  Container,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from '@chakra-ui/react';
import supabase from '../../../../utils/supabase';
import { GetServerSideProps } from 'next';
import BackIcon from '@/components/BackIcon/BackIcon';
import Logout from '@/components/Logout/Logout';
import InnerFooter from '@/components/InnerFooter/InnerFooter';

export const ScholarDetails = ({
  userDetails,
  sracDetailsIst,
  sracDetails2nd,
  supervisorDetails,
  scholarScore,
  submittedSynopsis,
  submittedProgress,
}: any) => {
  const synopsis = submittedSynopsis ? 'Submitted' : 'Not Submitted';
  const progress = submittedProgress ? 'Submitted' : 'Not Submitted';
  return (
    <>
      <title>Report</title>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Link href={'/protected/drc/reportgeneration'}>
          <BackIcon />
        </Link>
        <Heading
          as='h2'
          size='xl'
          fontFamily='Georgia'
          fontWeight='bold'
          color='teal'
        >
          Detailed Report
        </Heading>
        <Logout />
      </Box>
      <Container maxWidth={'7xl'} marginBottom={'20%'}>
        <Text fontWeight={500} fontSize={'36px'} color={'royal blue'}>
          {`Name: ${userDetails.username}`}
        </Text>
        <TableContainer>
          <Table>
            <Tbody>
              <Tr fontSize={'26px'} color='teal'>
                <Td>Supervisor</Td>
                <Td>SRAC Members</Td>
                <Td>
                  Paper
                  <br />
                  <br /> Published
                </Td>
                <Td>
                  Confrenece
                  <br />
                  <br /> Attended
                </Td>
                <Td>Synopsis</Td>
                <Td>Progress Report</Td>
              </Tr>
              <Tr fontSize={'20px'} color='green'>
                <Td>{`${supervisorDetails?.name}`}</Td>
                <Td>
                  {`${sracDetailsIst?.name}`}
                  <br />
                  <br />
                  {`${sracDetails2nd?.name}`}
                </Td>
                <Td>{`${scholarScore?.paper_published}`}</Td>
                <Td>{`${scholarScore?.conference_attended}`}</Td>
                <Td>{`${synopsis}`}</Td>
                <Td>{`${progress}`}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
      <InnerFooter />
    </>
  );
};
export default ScholarDetails;
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  let scholarId = params?.scholarId;
  let { data: scholarData } = await supabase
    .from('scholars_profiles')
    .select('*')
    .eq('id', scholarId)
    .single();
  console.log('scholar data', scholarData);
  if (scholarData) {
    let { data: sracData } = await supabase
      .from('srac_profiles')
      .select('*')
      .eq('id', scholarData.assigned_srac1)
      .single();
    let { data: sracDataSecond } = await supabase
      .from('srac_profiles')
      .select('*')
      .eq('id', scholarData.assigned_srac2)
      .single();
    let { data: supervisorData } = await supabase
      .from('staff')
      .select('*')
      .eq('id', scholarData.assigned_supervisor)
      .single();
    let { data: scoreData } = await supabase
      .from('scholars_score')
      .select('*')
      .eq('id', scholarData.credit_score)
      .single();
    let { data: synopsisData } = await supabase
      .from('submitted_synopsis')
      .select('scholars_id')
      .eq('scholars_id', scholarData.id)
      .single();
    let { data: progressData } = await supabase
      .from('submitted_progress')
      .select('scholars_id')
      .eq('scholars_id', scholarData.id)
      .select();

    return {
      props: {
        userDetails: scholarData,
        sracDetailsIst: sracData,
        sracDetails2nd: sracDataSecond,
        supervisorDetails: supervisorData,
        scholarScore: scoreData,
        submittedSynopsis: synopsisData,
        submittedProgress: progressData,
      },
    };
  } else {
    return {
      props: {
        userDetails: [],
        sracDetails1st: [],
        sracDetails2nd: [],
        supervisorDetails: [],
        scholarScore: [],
        submittedSynopsis: [],
        submittedProgress: [],
      },
    };
  }
};
