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
        <title>SOS</title>
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
          Research Achievements By SOS
        </Heading>
        <Link href='/SOS/BORS-SOS.pdf'>
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
        <Table marginBottom={'26%'}>
          <Tbody>
            <Tr>
              <Td isNumeric>1</Td>
              <Td fontSize={'26px'}> Department of Chemistry</Td>{' '}
              <Td color={'blue'}>
                <Link href='/SOS/DOC-Thrust.pdf'>Thrust Areas </Link>
              </Td>
              <Td color={'blue'}>
                <Link href='/SOS/DOC-Dissertation.pdf'>Dissertation</Link>
              </Td>
              <Td color={'blue'}>
                <Link href='/SOS/DOC-Publications.pdf'>Publications</Link>
              </Td>
              <Td color={'blue'}>
                <Link href='/SOS/DOC-Books.pdf'>Books</Link>
              </Td>
              <Td color={'blue'}>
                <Link href='/SOS/DOC-ResearchProjects.pdf'>
                  Research Projects
                </Link>
              </Td>
            </Tr>
            <Tr>
              <Td isNumeric>2</Td>
              <Td fontSize={'26px'}> Department of Physics</Td>
              <Td color={'blue'}>
                <Link href='/SOS/DOP-Dissertation.pdf'>Dissertation </Link>
              </Td>
              <Td color={'blue'}>
                <Link href='/SOS/DOP-Thrust.pdf'>Thrust Areas </Link>
              </Td>
              <Td color={'blue'}>
                <Link href='/SOS/DOP-ResearchProjects.pdf'>
                  Research Projects
                </Link>
              </Td>
              <Td color={'blue'}>
                <Link href='/SOS/DOP-JournalPublication.pdf'>Publications</Link>
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
