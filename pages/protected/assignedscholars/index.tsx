import { Button } from '@chakra-ui/button';
import { BiArrowBack, BiLogOut } from 'react-icons/bi';
import Link from 'next/link';
import { Box, Heading, Text } from '@chakra-ui/react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

export const Index = () => {
  const scholarsList = [
    {
      name: 'Samin',
      regNumber: '723897487',
      researchTitle: 'Astronomy',
    },
    {
      name: 'Samin',
      regNumber: '723897487',
      researchTitle: 'Astronomy',
    },
    {
      name: 'Samin',
      regNumber: '723897487',
      researchTitle: 'Astronomy',
    },
    {
      name: 'Samin',
      regNumber: '723897487',
      researchTitle: 'Astronomy',
    },
    {
      name: 'Samin',
      regNumber: '723897487',
      researchTitle: 'Astronomy',
    },
    {
      name: 'Samin',
      regNumber: '723897487',
      researchTitle: 'Astronomy',
    },
  ];

  const supabaseClient = useSupabaseClient();
  return (
    <>
      <title>Assigned Scholars</title>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Link href={'/protected/supervisor'}>
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
        <Button
          colorScheme='red'
          leftIcon={<BiLogOut />}
          onClick={() => supabaseClient.auth.signOut()}
        >
          Logout
        </Button>
      </Box>

      {scholarsList.map((scholar) => (
        <Box
          key={scholar.regNumber}
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
      ))}
    </>
  );
};
export default Index;
