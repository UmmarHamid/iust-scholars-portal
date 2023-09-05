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
import BackIcon from '@/components/BackIcon/BackIcon';
import InnerFooter from '@/components/InnerFooter/InnerFooter';
import Logout from '@/components/Logout/Logout';

const ImageStyled = styled(Image)`
  padding: 10px;
  border-radius: 16px;
`;

export const index = () => {
  return (
    <>
      <Head>
        <title> Assigned Supervisor</title>
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
          Assigned Supervisor
        </Heading>
        <Logout />
      </Box>
      <TableContainer>
        <Table
          display={'flex'}
          justifyContent={'space-around'}
          variant='simple'
          marginBottom={'20%'}
        >
          <Tbody>
            <Tr>
              <Td>
                <ImageStyled
                  alt='Not available yet'
                  width={200}
                  height={150}
                  src='/xz.jpg'
                />
              </Td>
              <Td>
                <Heading
                  as='h1'
                  fontFamily='Georgia'
                  fontWeight={'300'}
                  color='#4267B2'
                  mr={'100px'}
                >
                  Salman
                </Heading>
              </Td>
              <Td color='teal' fontWeight={300} fontSize={'30px'}>
                <Link href=''>Designation</Link>
              </Td>
              <Td color='teal' fontWeight={300} fontSize={'30px'}>
                <Link href=''>salman855@gmail.com</Link>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <InnerFooter />
    </>
  );
};
export default index;
