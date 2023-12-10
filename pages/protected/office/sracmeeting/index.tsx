'use client';
import Select from 'react-select';
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Textarea,
} from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import supabase from '@/utils/supabase';
import InnerFooter from '@/components/InnerFooter/InnerFooter';
import BackIcon from '@/components/BackIcon/BackIcon';
import Logout from '@/components/Logout/Logout';
export type MeetingProfile = {
  id: string;
  date: string | null;
  time: string | null;
  location: string | null;
  committee_members_present: string | null;
  agenda_items: string | null;
  meeting_notes: string | null;
};
export const Index = ({ srac }: any) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    location: '',
    committee_members_present: '',
    agenda_items: '',
    meeting_notes: '',
  });

  const handleAddMinutes = async () => {
    // TODO: Add form Validation here
    const { data, error } = await supabase
      .from('srac_meeting')
      .insert([formData])
      .select();
    alert('All Meeting Minutes has been added');
    window.location.reload();
  };
  console.log(srac);
  return (
    <>
      <Head>
        <title>Srac Meeting</title>
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
          Srac Meeting Minutes
        </Heading>
        <Logout />
      </Box>
      <Container maxW='2xl' centerContent marginBottom={'5%'}>
        <FormControl>
          <FormLabel>{`Date`}</FormLabel>
          <Textarea
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            mb={4}
          />
          <FormLabel>{`Time`}</FormLabel>
          <Textarea
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            mb={4}
          />
          <FormLabel>{`Location`}</FormLabel>
          <Textarea
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
            mb={4}
          />
          <FormLabel>{`Committee Members Present`}</FormLabel>
          <Textarea
            onChange={(e) =>
              setFormData({
                ...formData,
                committee_members_present: e.target.value,
              })
            }
          />
          <FormLabel>{`Agenda Items`}</FormLabel>
          <Textarea
            onChange={(e) =>
              setFormData({ ...formData, agenda_items: e.target.value })
            }
            mb={4}
          />
          <FormLabel>{`Meeting Notes`}</FormLabel>
          <Textarea
            onChange={(e) =>
              setFormData({ ...formData, meeting_notes: e.target.value })
            }
            mb={4}
          />
        </FormControl>
        <Button
          onClick={handleAddMinutes}
          fontSize={26}
          colorScheme='teal'
          size='lg'
          width={'50%'}
          marginBottom={'2%'}
        >
          Submit
        </Button>
        <Link href={'/protected/office/accessmeetings'}>
          <Button
            fontSize={26}
            colorScheme='green'
            size='lg'
            marginBottom={'2%'}
          >
            View Meetings
          </Button>
        </Link>
      </Container>

      <InnerFooter />
    </>
  );
};
export default Index;
