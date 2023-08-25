import { Button } from '@chakra-ui/button';
// import { BsFillHouseDoorFill } from 'react-icons/bs';
import { BiArrowBack, BiLogOut } from 'react-icons/bi';
import Link from 'next/link';
import { Box, Heading, Text, Textarea } from '@chakra-ui/react';

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
        justifyContent={'space-between'}
        alignItems={'center'}
        height={'100px'}
      >
        <Link href={'/scholars'}>
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
          Synopsis Details
        </Heading>
        <Button colorScheme='red' leftIcon={<BiLogOut />} marginRight={'20px'}>
          Logout
        </Button>
      </Box>
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
        <Text fontWeight={300} fontSize={'30px'} align={'center'}>
          Introduction:
        </Text>
        <Textarea fontWeight={300} fontSize={'20px'}>
          {` ${user.introduction}`}
        </Textarea>
        <Text fontWeight={300} fontSize={'30px'} align={'center'}>
          Review of Literature:
        </Text>
        <Textarea fontWeight={300} fontSize={'20px'}>
          {` ${user.reviewOfLiterature}`}
        </Textarea>
        <Text fontWeight={300} fontSize={'30px'} align={'center'}>
          Knowledge Gaps:
        </Text>
        <Textarea fontWeight={300} fontSize={'20px'}>
          {` ${user.knowledgeGaps}`}
        </Textarea>
        <Text fontWeight={300} fontSize={'30px'} align={'center'}>
          Originality of the Proposed Work:
        </Text>
        <Textarea fontWeight={300} fontSize={'20px'}>
          {` ${user.originalityOfTheWork}`}
        </Textarea>
        <Text fontWeight={300} fontSize={'30px'} align={'center'}>
          Hypothesis:
        </Text>
        <Textarea fontWeight={300} fontSize={'20px'}>
          {` ${user.hypothesis}`}
        </Textarea>
        <Text fontWeight={300} fontSize={'30px'} align={'center'}>
          Objectives:
        </Text>
        <Textarea fontWeight={300} fontSize={'20px'}>
          {` ${user.objectives}`}
        </Textarea>
        <Text fontWeight={300} fontSize={'30px'} align={'center'}>
          Methodology:
        </Text>
        <Textarea fontWeight={300} fontSize={'20px'}>
          {` ${user.methodology}`}
        </Textarea>
        <Text fontWeight={300} fontSize={'30px'} align={'center'}>
          Deliverables:
        </Text>
        <Textarea fontWeight={300} fontSize={'20px'}>
          {` ${user.deliverables}`}
        </Textarea>
        <Text fontWeight={300} fontSize={'30px'} align={'center'}>
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
    </>
  );
};
export default Index;
