import { Button } from '@chakra-ui/button';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import Link from 'next/link';
import { Box, SimpleGrid } from '@chakra-ui/react';

export const Index = () => {
  return (
    <>
      <title>Supervisor</title>
      <Box
        w='100%'
        h='100vh'
        bgGradient={[
          'linear(to-tr, teal.300, yellow.400)',
          'linear(to-t, blue.200, teal.500)',
          'linear(to-b, orange.100, purple.300)',
        ]}
      >
        <Box display={'flex'} justifyContent={'space-between'}>
          <Link href={'/'}>
            <Button
              leftIcon={<BsFillHouseDoorFill />}
              colorScheme='facebook'
              variant='solid'
              size='lg'
              margin={10}
            >
              Home
            </Button>
          </Link>

          <Button colorScheme='red' leftIcon={<BiLogOut />} margin={10}>
            Logout
          </Button>
        </Box>
        <SimpleGrid
          height={'calc(100vh - 128px)'}
          padding={'5%'}
          columns={2}
          spacing={'100px'}
        >
          <Link href={'/login'}>
            <Box
              w='100%'
              h='100%'
              bgGradient={['linear-gradient(90deg,#ba8b02,#181818  )']}
              borderRadius={40}
              fontSize={36}
              padding='20%'
              textAlign='center'
              color='#fff'
              fontWeight={700}
            >
              Assigned Scholars
            </Box>
          </Link>
          <Link href={'/login'}>
            <Box
              w='100%'
              h='100%'
              bgGradient={['linear-gradient(#84fab0,#8fd3f4  )']}
              borderRadius={40}
              fontSize={36}
              padding='15%'
              textAlign='center'
              color='#fff'
              fontWeight={700}
            >
              Report Generation
            </Box>
          </Link>

          <Link href={'/login'}>
            <Box
              w='100%'
              h='100%'
              bgGradient={['linear-gradient(to right, #243949 , #517fa4 )']}
              borderRadius={40}
              fontSize={42}
              padding='18%'
              textAlign='center'
              color='#fff'
              fontWeight={700}
            >
              SRAC Members
            </Box>
          </Link>
          <Link href={'/login'}>
            <Box
              w='100%'
              h='100%'
              bgGradient={['linear-gradient(to right, #434343 , black   )']}
              borderRadius={38}
              fontSize={38}
              padding='15%'
              textAlign='center'
              color='#fff'
              fontWeight={700}
            >
              Research Progress
            </Box>
          </Link>
        </SimpleGrid>
      </Box>
    </>
  );
};
export default Index;
