import Link from 'next/link';
import { Box, Heading, Text } from '@chakra-ui/react';
import supabase from '../../../../utils/supabase';
import { GetServerSideProps } from 'next';
import { useUser } from '@supabase/auth-helpers-react';
import InnerFooter from '@/components/InnerFooter/InnerFooter';
import BackIcon from '@/components/BackIcon/BackIcon';
import Logout from '@/components/Logout/Logout';
export const Index = ({ data: userDetails }: any) => {
  return (
    <>
      <title>Detailed Meetings</title>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Link href={'/protected/office/accessmeetings'}>
          <BackIcon />
        </Link>
        <Heading
          as='h2'
          size='xl'
          fontFamily='Georgia'
          fontWeight='bold'
          color='teal'
        >
          Detailed Meeting
        </Heading>
        <Logout />
      </Box>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        flexDirection={'column'}
        margin={'20px'}
        marginLeft={'15%'}
        marginBottom={'5%'}
      >
        <Text fontWeight={500} fontSize={'36px'} color={'teal'}>
          Date:
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          {`${userDetails.date}`}
        </Text>
        <Text fontWeight={500} fontSize={'36px'} color={'teal'}>
          Time:
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          {`${userDetails.time}`}
        </Text>
        <Text fontWeight={500} fontSize={'36px'} color={'teal'}>
          Location:
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          {`${userDetails.location}`}
        </Text>
        <Text fontWeight={500} fontSize={'36px'} color={'teal'}>
          Committee Members Present:
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          {`${userDetails.committee_members_present}`}
        </Text>
        <Text fontWeight={500} fontSize={'36px'} color={'teal'}>
          Agenda Items:
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          {` ${userDetails.agenda_items}`}
        </Text>
        <Text fontWeight={500} fontSize={'36px'} color={'teal'}>
          Meeting Notes:
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          {`${userDetails.meeting_notes}`}
        </Text>
      </Box>
      <InnerFooter />
    </>
  );
};
export default Index;
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { data, error } = await supabase
    .from('srac_meeting')
    .select('*')
    .eq('id', params?.sracId)
    .single();
  return {
    props: { data: data ? data : [], error },
  };
};
