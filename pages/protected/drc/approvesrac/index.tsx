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
import InnerFooter from '@/components/InnerFooter/InnerFooter';
import Logout from '@/components/Logout/Logout';
import BackIcon from '@/components/BackIcon/BackIcon';
import { GetServerSideProps } from 'next';
import supabase from '@/utils/supabase';
import { ScholarProfile } from '../scholardetails';

export const Index = ({ scholar, srac }: any) => {
  const handleApproveSrac = async (scholarId: any, status: any) => {
    supabase
      .from('scholars_profiles')
      .update({ ['approved_sracs']: status })
      .eq('id', scholarId)
      .then((response) => {
        alert('Updated Successfully');
      });
  };
  return (
    <>
      <Head>
        <title>Approve SRAC</title>
      </Head>

      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Link href='/protected/drc'>
          <BackIcon />
        </Link>
        <Heading as={'h2'} color={'teal'} fontWeight={300}>
          Approve SRAC Members
        </Heading>
        <Logout />
      </Box>
      <Container maxW='5xl' marginBottom={'20%'}>
        {scholar.map((scholar: ScholarProfile, index: number) => {
          return (
            <SimpleGrid key={scholar.id} columns={3} gap={4} mb={8}>
              <Text fontSize={'2xl'} color={'#07443E'}>
                {`${index + 1} - ${scholar.username} ${scholar.reg_no}`}
              </Text>
              <Text
                fontFamily='Georgia'
                fontSize={'xl'}
                color='#4267B2'
                mr={'100px'}
              >
                {srac
                  .filter(
                    (sracObj: any) => sracObj.id === scholar.assigned_srac1
                  )
                  .map((filteredSrac: any) => (
                    <Text key={filteredSrac.id}>{filteredSrac.name}</Text>
                  ))}
              </Text>
              <Text
                fontFamily='Georgia'
                fontSize={'xl'}
                color='#4267B2'
                mr={'100px'}
              >
                {srac
                  .filter(
                    (sracObj: any) => sracObj.id === scholar.assigned_srac2
                  )
                  .map((filteredSrac: any) => (
                    <Text key={filteredSrac.id}>{filteredSrac.name}</Text>
                  ))}
              </Text>
              <Button
                padding={'10px 30px'}
                margin={'0 10px'}
                colorScheme='blue'
                onClick={() => handleApproveSrac(scholar.id, 'approve')}
              >
                Approve
              </Button>
              <Button
                padding={'10px 30px'}
                margin={'0 10px'}
                colorScheme='red'
                onClick={() => handleApproveSrac(scholar.id, 'reject')}
              >
                Reject
              </Button>
            </SimpleGrid>
          );
        })}
      </Container>
      <InnerFooter />
    </>
  );
};
export default Index;

export const getServerSideProps: GetServerSideProps = async () => {
  let { data: scholarData } = await supabase
    .from('scholars_profiles')
    .select('*');
  if (scholarData) {
    let { data: sracData } = await supabase.from('srac_profiles').select('*');
    return {
      props: {
        scholar: scholarData,
        srac: sracData,
      },
    };
  } else {
    return { props: { scholar: [], srac: [] } };
  }
};
