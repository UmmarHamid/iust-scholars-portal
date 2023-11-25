import Link from 'next/link';
import { Box, Heading, Text } from '@chakra-ui/react';
import supabase from '../../../../utils/supabase';
import { GetServerSideProps } from 'next';
import { useUser } from '@supabase/auth-helpers-react';
import BackIcon from '@/components/BackIcon/BackIcon';
import Logout from '@/components/Logout/Logout';
import InnerFooter from '@/components/InnerFooter/InnerFooter';
export const ScholarDetails = ({
  data: userDetails,
  srac,
  supervisor,
  error,
}: any) => {
  const loggedinUser = useUser();
  return (
    <>
      <title>Personal Details</title>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Link href={'/protected/office/scholardetails'}>
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
        marginLeft={'17%'}
        marginBottom={'5%'}
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
          {`Email: ${userDetails.email}`}
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
        <Text fontWeight={300} fontSize={'30px'}>
          Assigned supervisor:
          {supervisor
            .filter(
              (supervisorObj: any) =>
                supervisorObj.id === userDetails.assigned_supervisor
            )
            .map((filteredSupervisor: any) => (
              <Text key={filteredSupervisor.id}>{filteredSupervisor.name}</Text>
            ))}
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          Assigned Srac Members:
          {srac
            .filter((sracObj: any) => sracObj.id === userDetails.assigned_srac1)
            .map((filteredSrac: any) => (
              <Text key={filteredSrac.id}>{filteredSrac.name}</Text>
            ))}
          {srac
            .filter((sracObj: any) => sracObj.id === userDetails.assigned_srac2)
            .map((filteredSrac: any) => (
              <Text key={filteredSrac.id}>{filteredSrac.name}</Text>
            ))}
        </Text>
      </Box>
      <InnerFooter />
    </>
  );
};
export default ScholarDetails;
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { data, error } = await supabase
    .from('scholars_profiles')
    .select('*')
    .eq('email', params?.scholarId);
  let { data: sracData } = await supabase.from('srac_profiles').select('*');
  let { data: supervisorData } = await supabase.from('staff').select('*');

  return {
    props: {
      data: data ? data[0] : [],
      srac: sracData,
      supervisor: supervisorData,
      error,
    },
  };
};
