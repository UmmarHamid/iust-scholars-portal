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
import { Document } from '@react-pdf/renderer';
import InnerFooter from '@/components/InnerFooter/InnerFooter';
import { AiOutlineFolderView } from 'react-icons/ai';
export const Index = () => {
  return (
    <>
      <Head>
        <title>SOBS</title>
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
          Research Achievements By SOBS
        </Heading>
        <Link href='/SOBS/BORS-SOBS.pdf'>
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
              <Td fontSize={'26px'}> Department of Management Studies</Td>{' '}
              <Td color={'blue'}>
                <Link href='/SOBS/DOMS-Publications.pdf'>Publications</Link>
              </Td>
              <Td color={'blue'}>
                <Link href='/SOBS/DOMS-Projects.pdf'>Projects</Link>
              </Td>
            </Tr>
            <Tr>
              <Td isNumeric>2</Td>
              <Td fontSize={'26px'}> Department of Economics</Td>
              <Td color={'blue'}>
                <Link href='/SOBS/DOE-Publications.pdf'>Publications </Link>
              </Td>
              <Td color={'blue'}>
                <Link href='/SOBS/DOE-Projects.pdf'>Projects</Link>
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
