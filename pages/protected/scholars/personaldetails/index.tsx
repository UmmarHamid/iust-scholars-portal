import { Button } from '@chakra-ui/button';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { BiArrowBack, BiLogOut } from 'react-icons/bi';
import Link from 'next/link';
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';

export const Index = () => {
  const user = {
    name: 'samin',
    father: 'Samin"s father',
    mother: 'Samin"s mother',
    address: 'Khrew',
    dob: '10-09-2010',
    phone: '9797979797',
    email: 'samin@something.com',
    department: 'Astronomy',
    registrationNumber: '123123',
    joiningDate: '20-07-2023',
    qualifiedExam: 'MBBS',
  };
  return (
    <>
      <title>Personal Details</title>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        height={'100px'}
      >
        <Link href={'/protected/scholars'}>
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
          {`Name: ${user.name}`}
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
          {`D.O.B: ${user.dob}`}
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          {`Phone: ${user.phone}`}
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          {`Email: ${user.email}`}
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          {`Department: ${user.department}`}
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          {`Registration No: ${user.registrationNumber}`}
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          {`Joining Date: ${user.joiningDate}`}
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          {`Qualified Exam: ${user.qualifiedExam}`}
        </Text>
      </Box>
    </>
  );
};
export default Index;
