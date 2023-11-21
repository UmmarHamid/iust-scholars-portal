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
import InnerFooter from '@/components/InnerFooter/InnerFooter';
import { AiOutlineFolderView } from 'react-icons/ai';

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
        <Link href='/SOHS/BORS-SOHS.pdf'>
          <Button
            leftIcon={<AiOutlineFolderView />}
            colorScheme='green'
            variant='solid'
          >
            BORS
          </Button>
        </Link>
      </Box>
      <TableContainer>
        <Table marginBottom={'21%'}>
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
                <Link href='/SOHS/DOAL&L-Thrust.pdf'>Thrust Areas </Link>
              </Td>
              <Td color={'blue'}>
                <Link href='/SOHS/DOAL&L-Award.pdf'>PhD Awardees</Link>
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
                <Link href='/SOHS/DOELL-Award.pdf'>Degree/s Awarded </Link>
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
