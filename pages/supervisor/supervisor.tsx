import { Button } from '@chakra-ui/button';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import Link from 'next/link';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { styled } from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-around;
`;
const StyledButton = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const supervisor = () => {
  return (
    <>
      <title>Supervisor</title>
      <Box
        w='65%'
        h='900px'
        bgGradient={[
          'linear(to-tr, teal.300, yellow.400)',
          'linear(to-t, blue.200, teal.500)',
          'linear(to-b, orange.100, purple.300)',
        ]}
        borderRadius={20}
        marginTop='2%'
        marginLeft='20%'
      >
        <StyledButton>
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
        </StyledButton>
        <StyledDiv>
          <Link href={'/login'}>
            <Box
              w='100%'
              h='100%'
              bgGradient={['linear-gradient(90deg,#ba8b02,#181818  )']}
              borderRadius={40}
              marginTop='10%'
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
              marginTop='10%'
              fontSize={36}
              padding='15%'
              textAlign='center'
              color='#fff'
              fontWeight={700}
            >
              Report Generation
            </Box>
          </Link>
        </StyledDiv>
        <StyledDiv>
          <Link href={'/login'}>
            <Box
              w='100%'
              h='100%'
              bgGradient={['linear-gradient(to right, #243949 , #517fa4 )']}
              borderRadius={40}
              marginTop='30%'
              fontSize={42}
              padding='15%'
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
              borderRadius={40}
              marginTop='30%'
              fontSize={38}
              padding='10%'
              textAlign='center'
              color='#fff'
              fontWeight={700}
            >
              Research Progress
            </Box>
          </Link>
        </StyledDiv>
      </Box>
    </>
  );
};
export default supervisor;
