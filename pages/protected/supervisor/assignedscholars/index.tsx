import { Button } from '@chakra-ui/button';
import { BiArrowBack, BiLogOut } from 'react-icons/bi';
import Link from 'next/link';
import { Box, Heading, Text } from '@chakra-ui/react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import styled from 'styled-components';

import { MdArrowBackIosNew } from 'react-icons/md';
const StyledIcon = styled.h1`
  font-size: 42px;
  font-weight: 700;
  color: #0c2b50;
`;
const StyledFooter = styled.footer`
  bottom: 0;
  position: fixed;
  width: 100%;
  background-color: #002147;
  color: #fff;
  text-align: center;
  line-height: 50px;
`;
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
          <StyledIcon>{<MdArrowBackIosNew size={36} />}</StyledIcon>
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
      <br />
      <br />
      <StyledFooter>
        © 2023 - Islamic University of Science and Technology.
      </StyledFooter>
    </>
  );
};
export default Index;
