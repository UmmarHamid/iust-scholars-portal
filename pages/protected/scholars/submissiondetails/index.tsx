import { Button } from '@chakra-ui/button';
import { BiLogOut } from 'react-icons/bi';
import Link from 'next/link';
import { Box, Container, Heading, Text, Textarea } from '@chakra-ui/react';
import styled from 'styled-components';
import { MdArrowBackIosNew } from 'react-icons/md';

const StyledIcon = styled.h1`
  font-size: 42px;
  font-weight: 700;
  color: #0c2b50;
`;

export const Index = () => {
  const user = {
    name: 'Zubair',
    supervisor: 'Samin`s father',
    registrationNumber: '123123',
    department: 'Astronomy',
    titleOfResearch: 'Aquatic Habitat',
    startingDate: '14/06/2023',
    endDate: '14/12/2023',
    labelthesis:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry remained essentially unchanged.',
    summary:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry remained essentially unchanged.',
  };
  return (
    <>
      <title>Submission Details</title>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Link href='/protected/scholars'>
          <StyledIcon>{<MdArrowBackIosNew size={36} />}</StyledIcon>
        </Link>
        <Heading as={'h2'} color={'teal'} fontWeight={300}>
          Submission Details
        </Heading>
        <Button colorScheme='red' leftIcon={<BiLogOut />}>
          Logout
        </Button>
      </Box>
      <Container maxWidth={'6xl'}>
        <Box
          display={'flex'}
          flexDirection={'column'}
          gap={'20px'}
          margin={'20px'}
        >
          <Text fontWeight={300} fontSize={'30px'}>
            {`Name of the Scholar: ${user.name}`}
          </Text>
          <Text fontWeight={300} fontSize={'30px'}>
            {`Name of the Supervisor: ${user.supervisor}`}
          </Text>
          <Text fontWeight={300} fontSize={'30px'}>
            {`Title of Research: ${user.titleOfResearch}`}
          </Text>
          <Text fontWeight={300} fontSize={'30px'}>
            {` Six monthly progress report for the period from: ${user.startingDate} to ${user.endDate}`}
          </Text>

          <Text fontWeight={300} fontSize={'30px'}>
            Thesis:
          </Text>
          <Textarea rows={5} fontWeight={300} fontSize={'20px'}>
            {` ${user.labelthesis}`}
          </Textarea>
          <Text fontWeight={300} fontSize={'30px'}>
            Summary of Progress Report:
          </Text>
          <Textarea rows={5} fontWeight={300} fontSize={'20px'}>
            {` ${user.summary}`}
          </Textarea>
          <Button
            colorScheme='green'
            variant='solid'
            mt={10}
            margin={'auto'}
            width={'50%'}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </>
  );
};
export default Index;
