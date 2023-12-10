import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import supabase from '@/utils/supabase';
import { GetServerSideProps } from 'next';
import InnerFooter from '@/components/InnerFooter/InnerFooter';
import BackIcon from '@/components/BackIcon/BackIcon';
import Logout from '@/components/Logout/Logout';
import { MeetingProfile } from '../sracmeeting';
export const Index = ({ srac }: any) => {
  return (
    <>
      <Head>
        <title>Meeting List</title>
      </Head>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Link href='/protected/office/sracmeeting'>
          <BackIcon />
        </Link>
        <Heading as={'h2'} color={'teal'} fontWeight={300}>
          Meeting List
        </Heading>
        <Logout />
      </Box>
      <Container maxW='5xl' marginBottom={'20%'}>
        {srac.map((sracs: MeetingProfile, index: number) => (
          <Flex alignItems='center' justifyContent={'space-between'}>
            <Link
              href={`/protected/office/accessmeetings/${sracs.id}`}
              style={{ flexBasis: '70%' }}
            >
              <Heading
                margin={'2%'}
                as={'h6'}
                color={'#07443E'}
                letterSpacing={'10px'}
              >
                {`${index + 1}- ${sracs.date}, ${sracs.time} ${
                  sracs.location
                } `}
              </Heading>
            </Link>
          </Flex>
        ))}
      </Container>
      <InnerFooter />
    </>
  );
};

export default Index;
export const getServerSideProps: GetServerSideProps = async ({}) => {
  const { data: srac, error } = await supabase.from('srac_meeting').select('*');
  return { props: { srac, error } };
};
