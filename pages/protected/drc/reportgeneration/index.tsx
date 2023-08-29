import styled from 'styled-components';
import { MdArrowBackIosNew } from 'react-icons/md';
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from '@chakra-ui/react';
import { BiLogOut } from 'react-icons/bi';
import { ImCross } from 'react-icons/im';
import { FaCheck } from 'react-icons/fa';
import Head from 'next/head';
import Link from 'next/link';
const StyledIcon = styled.h1`
  font-size: 42px;
  font-weight: 700;
  color: #0c2b50;
`;
const StyledFooter = styled.footer`
  bottom: 0;
  position: fixed;
  width: 100%;
  background-color: #002147;
  color: #fff;
  text-align: center;
  line-height: 50px;
`;
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
        <Link href='/protected/drc'>
          <StyledIcon>{<MdArrowBackIosNew size={36} />}</StyledIcon>
        </Link>
        <Heading as={'h2'} color={'teal'} fontWeight={300}>
          Report Generation
        </Heading>
        <Button colorScheme='red' leftIcon={<BiLogOut />}>
          Logout
        </Button>
      </Box>
      <Container maxWidth={'5xl'}>
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
      <StyledFooter>
        © 2023 - Islamic University of Science and Technology.
      </StyledFooter>
    </>
  );
};
export default index;
