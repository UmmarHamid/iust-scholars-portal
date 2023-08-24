import { Button } from '@chakra-ui/button';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { BiArrowBack, BiLogOut } from 'react-icons/bi';
import Link from 'next/link';
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';

export const Index = () => {
  return (
    <>
      <title>Personal Details</title>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        height={'100px'}
      >
        <Link href={'/'}>
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
          Name
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          Father's Name
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          Mother's Name
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          Address
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          D.O.B
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          Phone
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          Email
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          Department
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          Registration No,
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          Joining Date
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          Qualified Exam
        </Text>
      </Box>
    </>
  );
};
export default Index;
