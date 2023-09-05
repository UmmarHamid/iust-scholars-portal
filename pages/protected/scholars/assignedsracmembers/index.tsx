import styled from 'styled-components';
import Head from 'next/head';
import Image from 'next/image';
import {
  Box,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from '@chakra-ui/react';
import Link from 'next/link';
import Logout from '@/components/Logout/Logout';
import BackIcon from '@/components/BackIcon/BackIcon';
import InnerFooter from '@/components/InnerFooter/InnerFooter';

const ImageStyled = styled(Image)`
  padding: 10px;
  border-radius: 16px;
`;

export const Index = () => {
  return (
    <>
      <Head>
        <title> Assigned Srac Members</title>
      </Head>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Link href='/protected/scholars'>
          <BackIcon />
        </Link>
        <Heading as={'h2'} color={'teal'} fontWeight={300}>
          Assigned SRAC Members
        </Heading>
        <Logout />
      </Box>
      <TableContainer>
        <Table
          display={'flex'}
          justifyContent={'space-around'}
          variant='simple'
          marginBottom={'17%'}
        >
          <Tbody>
            <Tr>
              <Td isNumeric>1</Td>
              <Td>
                <ImageStyled
                  alt='Not available yet'
                  width={100}
                  height={75}
                  src='/x.jfif'
                />
              </Td>
              <Td>
                <Heading
                  as='h2'
                  fontFamily='Georgia'
                  fontWeight={'300'}
                  color='#4267B2'
                  mr={'100px'}
                >
                  Romania
                </Heading>
              </Td>
              <Td color='teal' fontWeight={300} fontSize={'30px'}>
                <Link href=''>Designation</Link>
              </Td>
              <Td color='teal' fontWeight={300} fontSize={'30px'}>
                <Link href=''>romania344@gmail.com</Link>
              </Td>
            </Tr>
            <Tr>
              <Td isNumeric>2</Td>
              <Td>
                <ImageStyled
                  alt='Not available yet'
                  width={100}
                  height={75}
                  src='/tt.jfif'
                />
              </Td>
              <Td>
                <Heading
                  as='h2'
                  fontFamily='Georgia'
                  fontWeight={'300'}
                  color='#4267B2'
                  mr={'100px'}
                >
                  Faiza
                </Heading>
              </Td>
              <Td color='teal' fontWeight={300} fontSize={'30px'}>
                <Link href=''>Designation</Link>
              </Td>
              <Td color='teal' fontWeight={300} fontSize={'30px'}>
                <Link href=''>faiza855@gmail.com</Link>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <InnerFooter />
    </>
  );
};
export default Index;
