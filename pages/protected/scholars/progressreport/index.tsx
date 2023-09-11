import { Button } from '@chakra-ui/button';
import Link from 'next/link';
import { Box, Container, Heading, Text, Textarea } from '@chakra-ui/react';
import Logout from '@/components/Logout/Logout';
import BackIcon from '@/components/BackIcon/BackIcon';
import InnerFooter from '@/components/InnerFooter/InnerFooter';
import { useUser } from '@supabase/auth-helpers-react';

export const Index = () => {
  const loggedinUser = useUser();

  const user = {
    name: 'Zubair',
    supervisor: 'Dr Muzafar Rasool',
    registrationNumber: 'IUST0121014521',
    department: 'DOCS',
    titleOfResearch: '-----',
    startingDate: '14/07/2023',
    endDate: '14/10/2023',
    labelthesis:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry remained essentially unchanged.',
    summary:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry remained essentially unchanged.',
  };
  return (
    <>
      <title>Progress Report</title>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Link href={`/protected/scholars/${loggedinUser?.email}`}>
          <BackIcon />
        </Link>
        <Heading as={'h2'} color={'teal'} fontWeight={300}>
          Progress Report
        </Heading>
        <Logout />
      </Box>
      <Container maxWidth={'6xl'}>
        <Box
          display={'flex'}
          flexDirection={'column'}
          gap={'20px'}
          margin={'20px'}
          marginBottom={'6%'}
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
            Detailed Progress Report
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
      <InnerFooter />
    </>
  );
};
export default Index;
