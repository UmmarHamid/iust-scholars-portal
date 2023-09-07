import { BiArrowBack } from 'react-icons/bi';
import Head from 'next/head';
import {
  Box,
  Button,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from '@chakra-ui/react';
import Link from 'next/link';

import InnerFooter from '@/components/InnerFooter/InnerFooter';
export const Index = () => {
  return (
    <>
      <Head>
        <title>SOET</title>
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
          Research Achievements By SOET
        </Heading>
      </Box>
      <TableContainer display={'block'} maxWidth={'100%'} overflowX={'auto'}>
        <Table marginBottom={'5%'}>
          <Tbody>
            <Tr>
              <Td isNumeric>1</Td>
              <Td fontSize={'26px'}> Department of Civil Engineering</Td>{' '}
              <Td color={'blue'}>
                {' '}
                <Link href='/'>Publications </Link>
              </Td>{' '}
              <Td color={'blue'}>
                {' '}
                <Link href='/'>Research Projects</Link>
              </Td>
              <Td color={'blue'}>
                {' '}
                <Link href='/'>Collaborations </Link>{' '}
              </Td>
              <Td color={'blue'}>
                <Link href='/'>Dissertations </Link>
              </Td>
              <Td color={'blue'}>
                <Link href='https://scholar.google.com/citations?user=1OFoUYgAAAAJ&hl=en&authuser=1'>
                  Google Scholars
                </Link>
              </Td>
            </Tr>
            <br />

            <Tr>
              <Td isNumeric>2</Td>
              <Td fontSize={'26px'}> Department of Electrical Engineering</Td>
              <Td color={'blue'}>
                <Link href='/'>Thrust areas</Link>
              </Td>{' '}
              <Td color={'blue'}>
                <Link href='/'>Publications</Link>
              </Td>
              <Td color={'blue'}>
                <Link href='/'>Research Projects</Link>
              </Td>
              <Td color={'blue'}>
                <Link href='https://scholar.google.com/citations?hl=en&user=tQLtj4AAAAAJ'>
                  Google Scholars
                </Link>
              </Td>
            </Tr>
            <br />

            <Tr>
              <Td isNumeric>3</Td>
              <Td fontSize={'24px'}> Department of Mechanical Engineering</Td>
              <Td color={'blue'}>
                <Link href='/'>Thrust areas</Link>
              </Td>{' '}
              <Td color={'blue'}>
                <Link href='/'>Publications</Link>
              </Td>
              <Td color={'blue'}>
                <Link href='/'>Journals</Link>
              </Td>
              <Td color={'blue'}>
                <Link href='/'>Books</Link>
              </Td>
            </Tr>
            <br />

            <Tr>
              <Td isNumeric>4</Td>
              <Td fontSize={'24px'}> Department of Computer Science</Td>
              <Td color={'blue'}>
                <Link href='/'>Thrust areas</Link>
              </Td>{' '}
              <Td color={'blue'}>
                <Link href='/'>Publications</Link>
              </Td>
              <Td color={'blue'}>
                <Link href='/'>Journals</Link>
              </Td>
              <Td color={'blue'}>
                <Link href='/'>Research Projects</Link>
              </Td>
            </Tr>
            <br />
            <Tr>
              <Td isNumeric>5</Td>
              <Td fontSize={'26px'}>
                Department of Electronics <br />
                <br />
                and Communication Engineering
              </Td>
              <Td color={'blue'}>
                <Link href='/'>Thrust areas</Link>
              </Td>{' '}
              <Td color={'blue'}>
                <Link href='/'>Publications</Link>
              </Td>
              <Td color={'blue'}>
                <Link href='/'>Research Projects</Link>
              </Td>
              <Td color={'blue'}>
                <Link href='https://scholar.google.com/citations?hl=en&user=mDiLTIMAAAAJ'>
                  Google Scholar
                </Link>
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
