import Head from 'next/head';
import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { Select } from '@chakra-ui/react';
import BackIcon from '@/components/BackIcon/BackIcon';
import Logout from '@/components/Logout/Logout';
import InnerFooter from '@/components/InnerFooter/InnerFooter';
import { GetServerSideProps } from 'next';
import supabase from '@/utils/supabase';
import { ScholarProfile } from '../scholardetails';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
export const Index = ({ scholars, supervisors }: any) => {
  const [supervisorAssignments, setSupervisorAssignments] = useState<any>({});

  const handleSupervisorChange = (
    e: ChangeEvent<HTMLSelectElement>,
    scholarId: string
  ) => {
    const selectedSupervisorId = e.target.value;

    // Update the supervisorAssignments state with the selected supervisor for the scholar
    setSupervisorAssignments((prevState: any) => ({
      ...prevState,
      [scholarId]: selectedSupervisorId,
    }));
  };
  const router = useRouter();
  const handleSubmitSupervisor = async (scholarId: string) => {
    const supervisorId = supervisorAssignments[scholarId];

    try {
      // Make an update query to update the supervisor assignment in the Supabase table
      const { error } = await supabase
        .from('scholars_profiles') // Replace with your table name
        .update({ assigned_supervisor: supervisorId })
        .eq('id', scholarId);

      if (error) {
        throw error;
      }

      // Success! You can also update the local state if needed.
      // For example, set a message to indicate success.
      console.log(`Supervisor assigned for scholar ${scholarId}`);
    } catch (error) {
      console.error('Error assigning supervisor:', error);
    }
  };

  return (
    <>
      <Head>
        <title>Assign Supervisor</title>
      </Head>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Link href='/protected/office'>
          <BackIcon />
        </Link>
        <Heading as={'h2'} color={'teal'} fontWeight={300}>
          Scholar Details
        </Heading>
        <Logout />
      </Box>
      <Container maxW='5xl' marginBottom={'20%'}>
        {scholars.map((scholar: ScholarProfile, index: number) => (
          <SimpleGrid key={scholar.id} columns={3} gap={4} mb={8}>
            <Text fontSize={'2xl'} color={'#07443E'}>
              {`${index + 1} - ${scholar.username} ${scholar.reg_no}`}
            </Text>

            {/* TODO: Add default value for the selectors */}
            <Select
              placeholder='Select option'
              size='md'
              width={'100%'}
              onChange={(e) => handleSupervisorChange(e, scholar.id)}
            >
              {supervisors.map((supervisor: any) => (
                <option key={supervisor.id} value={supervisor.id}>
                  {`${supervisor.name}`}
                </option>
              ))}
            </Select>
            <Button
              colorScheme='blue'
              onClick={() => handleSubmitSupervisor(scholar.id)}
            >
              Submit
            </Button>
          </SimpleGrid>
        ))}
      </Container>
      <InnerFooter />
    </>
  );
};
export default Index;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: scholars } = await supabase
    .from('scholars_profiles')
    .select('*');
  const { data: supervisors } = await supabase
    .from('staff')
    .select('*')
    .eq('role', 'supervisor');
  return { props: { scholars, supervisors } };
};
