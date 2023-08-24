import { Button } from '@chakra-ui/button';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { BiArrowBack, BiLogOut } from 'react-icons/bi';
import Link from 'next/link';
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';

export const Index = () => {
  return (
    <>
      <title>Assigned Scholars</title>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Link href={'/'}>
          <Button
            leftIcon={<BiArrowBack />}
            colorScheme='facebook'
            variant='solid'
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
          Assigned Scholars
        </Heading>
        <Button colorScheme='red' leftIcon={<BiLogOut />}>
          Logout
        </Button>
      </Box>
      {/* <SimpleGrid
        columns={3}
        gap={'100px'}
        height={'calc(100vh - 150px)'}
        padding={'5%'}
      > */}
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Text fontWeight={300} fontSize={'30px'}>
          Samin
        </Text>

        <Text fontWeight={300} fontSize={'30px'}>
          723897487
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          Astronomy
        </Text>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Text fontWeight={300} fontSize={'30px'}>
          Samin
        </Text>

        <Text fontWeight={300} fontSize={'30px'}>
          723897487
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          Astronomy
        </Text>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Text fontWeight={300} fontSize={'30px'}>
          Samin
        </Text>

        <Text fontWeight={300} fontSize={'30px'}>
          723897487
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          Astronomy
        </Text>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Text fontWeight={300} fontSize={'30px'}>
          Samin
        </Text>

        <Text fontWeight={300} fontSize={'30px'}>
          58094859
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          Astronomy
        </Text>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Text fontWeight={300} fontSize={'30px'}>
          Samin
        </Text>

        <Text fontWeight={300} fontSize={'30px'}>
          723897487
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          Astronomy
        </Text>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Text fontWeight={300} fontSize={'30px'}>
          Samin
        </Text>

        <Text fontWeight={300} fontSize={'30px'}>
          723897487
        </Text>
        <Text fontWeight={300} fontSize={'30px'}>
          Astronomy
        </Text>
      </Box>
    </>
  );
};
export default Index;
