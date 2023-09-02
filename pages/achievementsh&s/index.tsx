import styled from 'styled-components';
import { BiArrowBack } from 'react-icons/bi';
import Head from 'next/head';
import {
  Box,
  Button,
  Heading,
  TableContainer,
  Table,
  Tbody,
  Tr,
  Td,
} from '@chakra-ui/react';
import Link from 'next/link';

const StyledFooter = styled.footer`
  bottom: 0;
  position: fixed;
  width: 100%;
  background-color: #002147;
  color: #fff;
  text-align: center;
  line-height: 50px;
`;

export const Index = () => {
  return (
    <>
      <Head>
        <title>SOH&S</title>
      </Head>

      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
        marginLeft={'10%'}
        marginRight={'10%'}
      >
        <Link href='/'>
          <Button
            leftIcon={<BiArrowBack />}
            colorScheme='facebook'
            variant='solid'
          >
            Back
          </Button>
        </Link>
        <Heading as={'h2'} color={'teal'} fontWeight={500}>
          Research Achievements By SOH&S
        </Heading>
      </Box>
      <TableContainer>
        <Table>
          <Tbody>
            <Tr>
              <Td isNumeric>1</Td>
              <Td fontSize={'26px'}>
                {' '}
                Department of Arabic Language
                <br />
                <br />
                and Literature
              </Td>{' '}
              <Td color={'blue'}>
                <Link href='/'>Thrust Areas </Link>
              </Td>
              <Td color={'blue'}>
                <Link href='/'>PhD Awardees</Link>
              </Td>
            </Tr>
            <Tr>
              <Td isNumeric>2</Td>
              <Td fontSize={'26px'}>
                {' '}
                Department of English Language
                <br />
                <br />
                and Literature
              </Td>
              <Td color={'blue'}>
                <Link href='/'>Degree/s Awarded </Link>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <StyledFooter>
        © 2023 - Islamic University of Science and Technology.
      </StyledFooter>
    </>
  );
};
export default Index;
