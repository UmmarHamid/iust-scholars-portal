import {
  Box,
  Container,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from '@chakra-ui/react';
import { ImCross } from 'react-icons/im';
import { FaCheck } from 'react-icons/fa';
import Head from 'next/head';
import Link from 'next/link';
import BackIcon from '@/components/BackIcon/BackIcon';
import Logout from '@/components/Logout/Logout';
import InnerFooter from '@/components/InnerFooter/InnerFooter';

export const index = () => {
  return (
    <>
      <Head>
        <title>Report Generation</title>
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
          Report Generation
        </Heading>
        <Logout />
      </Box>
      <Container maxWidth={'5xl'} marginBottom={'20%'}>
        <Text fontSize={'2xl'} color={'#07443E'}>
          1. Zubair DOCS IUST0121014521
        </Text>
        <TableContainer>
          <Table>
            <Tbody>
              <Tr fontSize={'26px'} color='teal'>
                <Td>Supervisor</Td>
                <Td>SRAC Members</Td>

                <Td>Synopsis</Td>
                <Td>Thesis</Td>
                <Td>Submission</Td>
                <Td>Viva</Td>
              </Tr>
              <Tr fontSize={'20px'} color='green'>
                <Td>Dr. Muzaffar</Td>
                <Td>
                  Dr. Asif <br />
                  <br />
                  Dr. Zahid
                </Td>

                <Td>
                  <ImCross />
                </Td>
                <Td>
                  <FaCheck />
                </Td>
                <Td>
                  <FaCheck />
                </Td>
                <Td>
                  <ImCross />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
      <InnerFooter />
    </>
  );
};
export default index;
