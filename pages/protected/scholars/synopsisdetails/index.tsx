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
    name: 'Shabir',
    registrationNumber: '123123',
    department: 'Astronomy',
    supervisor: 'Samin`s father',
    titleOfResearch: 'Aquatic Habitat',
    introduction:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry remained essentially unchanged.',
    reviewOfLiterature:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry remained essentially unchanged.',
    knowledgeGaps:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry remained essentially unchanged.',
    originalityOfTheWork:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry remained essentially unchanged.',
    hypothesis:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry remained essentially unchanged.',
    objectives:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry remained essentially unchanged.',
    methodology:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry remained essentially unchanged.',
    deliverables:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry remained essentially unchanged.',
    collaboration:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry remained essentially unchanged.',
  };
  return (
    <>
      <title>Synopsis Details</title>
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
          Synopsis Details
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
            {`Name: ${user.name}`}
          </Text>
          <Text fontWeight={300} fontSize={'30px'}>
            {`Registration No.: ${user.registrationNumber}`}
          </Text>
          <Text fontWeight={300} fontSize={'30px'}>
            {` Department: ${user.department}`}
          </Text>
          <Text fontWeight={300} fontSize={'30px'}>
            {`Supervisor: ${user.supervisor}`}
          </Text>
          <Text fontWeight={300} fontSize={'30px'}>
            {`Title of Research: ${user.titleOfResearch}`}
          </Text>
          <Text fontWeight={300} fontSize={'30px'}>
            Introduction:
          </Text>
          <Textarea fontWeight={300} fontSize={'20px'}>
            {` ${user.introduction}`}
          </Textarea>
          <Text fontWeight={300} fontSize={'30px'}>
            Review of Literature:
          </Text>
          <Textarea fontWeight={300} fontSize={'20px'}>
            {` ${user.reviewOfLiterature}`}
          </Textarea>
          <Text fontWeight={300} fontSize={'30px'}>
            Knowledge Gaps:
          </Text>
          <Textarea fontWeight={300} fontSize={'20px'}>
            {` ${user.knowledgeGaps}`}
          </Textarea>
          <Text fontWeight={300} fontSize={'30px'}>
            Originality of the Proposed Work:
          </Text>
          <Textarea fontWeight={300} fontSize={'20px'}>
            {` ${user.originalityOfTheWork}`}
          </Textarea>
          <Text fontWeight={300} fontSize={'30px'}>
            Hypothesis:
          </Text>
          <Textarea fontWeight={300} fontSize={'20px'}>
            {` ${user.hypothesis}`}
          </Textarea>
          <Text fontWeight={300} fontSize={'30px'}>
            Objectives:
          </Text>
          <Textarea fontWeight={300} fontSize={'20px'}>
            {` ${user.objectives}`}
          </Textarea>
          <Text fontWeight={300} fontSize={'30px'}>
            Methodology:
          </Text>
          <Textarea fontWeight={300} fontSize={'20px'}>
            {` ${user.methodology}`}
          </Textarea>
          <Text fontWeight={300} fontSize={'30px'}>
            Deliverables:
          </Text>
          <Textarea fontWeight={300} fontSize={'20px'}>
            {` ${user.deliverables}`}
          </Textarea>
          <Text fontWeight={300} fontSize={'30px'}>
            Collaboration with other dept/university:
          </Text>
          <Textarea fontWeight={300} fontSize={'20px'}>
            {` ${user.collaboration}`}
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
