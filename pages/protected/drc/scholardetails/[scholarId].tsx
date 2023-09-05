import { Button } from '@chakra-ui/button';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { BiArrowBack, BiLogOut } from 'react-icons/bi';
import Link from 'next/link';
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import supabase from '../../../../utils/supabase';
import { GetServerSideProps } from 'next';
import { useUser } from '@supabase/auth-helpers-react';

export const ScholarDetails = ({ data: userDetails, error }: any) => {
  const loggedinUser = useUser();
  return (
    <>
      <title>Personal Details</title>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        height={'100px'}
      >
        <Link href={'/protected/drc/scholardetails'}>
          <Button
            leftIcon={<BiArrowBack />}
            colorScheme='facebook'
            variant='solid'
            marginLeft={'20px'}
          >
            Back
          </Button>
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
        <Button colorScheme='red' leftIcon={<BiLogOut />} marginRight={'20px'}>
          Logout
        </Button>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        flexDirection={'column'}
        margin={'20px'}
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
    </>
  );
};
export default ScholarDetails;
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { data, error } = await supabase
    .from('scholars_profiles')
    .select('*')
    .eq('email', params?.scholarId);
  return { props: { data: data ? data[0] : [], error } };
};
