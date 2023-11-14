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
import InnerFooter from '@/components/InnerFooter/InnerFooter';
import Logout from '@/components/Logout/Logout';
import BackIcon from '@/components/BackIcon/BackIcon';
import { GetServerSideProps } from 'next';
import supabase from '@/utils/supabase';
import { ScholarProfile } from '../assignedscholars';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';

export const Index = ({ scholars, srac }: any) => {
  const [sracAssignmentsFirst, setSracAssignmentsFirst] = useState<any>({});
  const [sracAssignmentsSecond, setSracAssignmentsSecond] = useState<any>({});

  const handleSracChangeFirst = (
    e: ChangeEvent<HTMLSelectElement>,
    scholarId: string
  ) => {
    const selectedSracId1 = e.target.value;
    // Update the supervisorAssignments state with the selected supervisor for the scholar
    setSracAssignmentsFirst((prevState: any) => ({
      ...prevState,
      [scholarId]: selectedSracId1,
    }));
  };
  const handleSracChangeSecond = (
    t: ChangeEvent<HTMLSelectElement>,
    scholarId: string
  ) => {
    const selectedSracId2 = t.target.value;
    // Update the supervisorAssignments state with the selected supervisor for the scholar
    setSracAssignmentsSecond((prevState: any) => ({
      ...prevState,
      [scholarId]: selectedSracId2,
    }));
  };
  const router = useRouter();
  const handleSubmitSrac = async (scholarId: string) => {
    const sracId1 = sracAssignmentsFirst[scholarId];
    const sracId2 = sracAssignmentsSecond[scholarId];

    try {
      // Make an update query to update the supervisor assignment in the Supabase table
      const { error } = await supabase
        .from('scholars_profiles') // Replace with your table name
        .update({ assigned_srac1: sracId1, assigned_srac2: sracId2 })
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
        <title>Assign SRAC</title>
      </Head>

      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Link href='/protected/supervisor'>
          <BackIcon />
        </Link>
        <Heading as={'h2'} color={'teal'} fontWeight={300}>
          Assign SRAC Members
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
              onChange={(e) => handleSracChangeFirst(e, scholar.id)}
            >
              {srac.map((srac: any) => (
                <option key={srac.id} value={srac.id}>
                  {`${srac.name}`}
                </option>
              ))}
            </Select>
            <Select
              placeholder='Select option'
              size='md'
              width={'100%'}
              onChange={(t) => handleSracChangeSecond(t, scholar.id)}
            >
              {srac.map((srac: any) => (
                <option key={srac.id} value={srac.id}>
                  {`${srac.name}`}
                </option>
              ))}
            </Select>

            <Button
              marginLeft={'200'}
              paddingLeft={'300'}
              paddingRight={'300'}
              size='lg'
              colorScheme='blue'
              onClick={() => handleSubmitSrac(scholar.id)}
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
  const { data: srac } = await supabase.from('srac_profiles').select('*');
  return { props: { srac, scholars } };
};
