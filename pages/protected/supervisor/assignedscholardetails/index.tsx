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
  const user = data[0];
  return (
    <>
      <title>Personal Details</title>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Link href={`/protected/supervisor/assignedscholars?email=${loggedinUser.email}`}>
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
        margin={'20px'}
        marginLeft={'14%'}
        marginBottom={'5%'}
      >
        <Text fontWeight={300} fontSize={'30px'}>
          {`Name: ${user.username}`}
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          {`Father's Name: ${user.father}`}
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          {` Mothers Name: ${user.mother}`}
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          {`Address: ${user.address}`}
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          {`Email: ${user?.email}`}
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          {`D.O.B: ${user.dob}`}
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          {`Phone: ${user.phone}`}
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          {`Department: ${user.department}`}
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          {`Registration No: ${user.reg_no}`}
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          {`Joining Date: ${user.join_date}`}
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          {`Qualified Exam: ${user.qualified_exam}`}
        </Text>
      </Box>
      <InnerFooter />
    </>
  );
};
export default ScholarDetails;
export const getServerSideProps: GetServerSideProps = async (params) => {
  const scholarId = params?.query?.id?.toString();
  const { data, error } = await supabase
    .from('scholars_profiles')
    .select('*')
    .eq('id', scholarId);

  return { props: { data, error } };
};
