import Link from 'next/link';
import { Box, Heading, Text } from '@chakra-ui/react';
import supabase from '../../../../utils/supabase';
import { GetServerSideProps } from 'next';
import { useUser } from '@supabase/auth-helpers-react';
import BackIcon from '@/components/BackIcon/BackIcon';
import InnerFooter from '@/components/InnerFooter/InnerFooter';
import Logout from '@/components/Logout/Logout';

export const ScholarDetails = ({ data, error }: any) => {
  const loggedinUser = useUser();
  const userDetails = data[0];
  return (
    <>
      <title>Personal Details</title>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Link href={'/protected/supervisor'}>
          <BackIcon />
        </Link>
        <Heading
          as='h2'
          size='xl'
          fontFamily='Georgia'
          fontWeight='bold'
          color='teal'
        >
          Personal Details
        </Heading>
        <Logout />
      </Box>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        flexDirection={'column'}
        marginLeft={'14%'}
      >
        <Text fontWeight={300} fontSize={'30px'}>
          {`Name: ${userDetails.username}`}
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          {`Father's Name: ${userDetails.father}`}
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          {` Mothers Name: ${userDetails.mother}`}
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          {`Address: ${userDetails.address}`}
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          {`Email: ${loggedinUser?.email}`}
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          {`D.O.B: ${userDetails.dob}`}
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          {`Phone: ${userDetails.phone}`}
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          {`Department: ${userDetails.department}`}
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          {`Registration No: ${userDetails.reg_no}`}
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          {`Joining Date: ${userDetails.join_date}`}
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          {`Qualified Exam: ${userDetails.qualified_exam}`}
        </Text>
      </Box>
      <InnerFooter />
    </>
  );
};
export default ScholarDetails;
export const getServerSideProps: GetServerSideProps = async () => {
  const { data, error } = await supabase.from('scholars_profiles').select('*');
  return { props: { data, error } };
};
