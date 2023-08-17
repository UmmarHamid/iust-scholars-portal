// 'use client';
import { Stack, HStack, VStack } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { MdBuild, MdCall } from 'react-icons/md';

const Login = () => {
  return (
    <Stack direction='row' spacing={4}>
      <Button leftIcon={<MdBuild />} colorScheme='pink' variant='solid'>
        Settings
      </Button>
      <Button rightIcon={<MdCall />} colorScheme='blue' variant='outline'>
        Call us
      </Button>
      <Button colorScheme='blue'>Button</Button>
    </Stack>
  );
};

export default Login;
