import { Button } from '@chakra-ui/button';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { BiArrowBack, BiLogOut } from 'react-icons/bi';
import Link from 'next/link';
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import supabase from '../../../../utils/supabase';
import { GetServerSideProps } from 'next';
import { useUser } from '@supabase/auth-helpers-react';
import { styled } from 'styled-components';
import { MdArrowBackIosNew } from 'react-icons/md';

const StyledFooter = styled.footer`
  left: 0;
  bottom: 0;
  position: relative;
  width: 100%;
  background-color: #002147;
  color: #fff;
  text-align: center;
  line-height: 50px;
`;
const StyledIcon = styled.h1`
  font-size: 42px;
  font-weight: 700;
  color: #0c2b50;
`;

export const Index = ({ data, error }: any) => {
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
        <Link href={'/protected/scholars'}>
          <StyledIcon>{<MdArrowBackIosNew size={36} />}</StyledIcon>
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
      <StyledFooter>
        © 2023 - Islamic University of Science and Technology.
      </StyledFooter>
    </>
  );
};
export default Index;
export const getServerSideProps: GetServerSideProps = async () => {
  const { data, error } = await supabase.from('scholars_profiles').select('*');
  return { props: { data, error } };
};
