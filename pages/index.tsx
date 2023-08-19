import { BsFillPencilFill, BsFillPersonFill } from 'react-icons/bs';
import styled from 'styled-components';
import Head from 'next/head';
import Logo from '@/components/Logo/Logo';
import { Button } from '@chakra-ui/button';
import { Stack } from '@chakra-ui/react';
const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: space-around;
`;
const StyledButton = styled.div`
  padding-top: 15px;
`;

export const index = () => {
  return (
    <div>
      <Head>
        <title>HomePage</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <header>
        <StyledHeader>
          <Logo
            alt='IUST-logo'
            href='google.com'
            width={300}
            height={75}
            imgSrc='/iustlogo.png'
          />
          <StyledButton>
            <Stack direction='row' spacing={10}>
              <Button
                leftIcon={<BsFillPersonFill />}
                colorScheme='red'
                variant='solid'
              >
                Employee Login
              </Button>
              <Button
                leftIcon={<BsFillPersonFill />}
                colorScheme='blue'
                variant='solid'
              >
                Student Login
              </Button>
              <Button
                rightIcon={<BsFillPencilFill />}
                colorScheme='whatsapp'
                variant='outline'
              >
                Sign Up
              </Button>
            </Stack>
          </StyledButton>
        </StyledHeader>
      </header>
    </div>
  );
};
export default index;
