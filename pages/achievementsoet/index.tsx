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
import { AiOutlineFolderView } from 'react-icons/ai';
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
        <Link href='/SOET/BORS-SOET.pdf'>
          <Button
            leftIcon={<AiOutlineFolderView />}
            colorScheme='green'
            variant='solid'
          >
            BORS
          </Button>
        </Link>
      </Box>
      <TableContainer display={'block'} maxWidth={'100%'} overflowX={'auto'}>
        <Table marginBottom={'5%'}>
          <Tbody>
            <Tr>
              <Td isNumeric>1</Td>
              <Td fontSize={'26px'}> Department of Civil Engineering</Td>{' '}
              <Td color={'blue'}>
                {' '}
                <Link href='/SOET/DOCE-Publications.pdf'>Publications </Link>
              </Td>{' '}
              <Td color={'blue'}>
                {' '}
                <Link href='/SOET/DOCE-ResearchProjects.pdf'>
                  Research Projects
                </Link>
              </Td>
              <Td color={'blue'}>
                {' '}
                <Link href='/SOET/DOCE-Collaboration.pdf'>
                  Collaborations{' '}
                </Link>{' '}
              </Td>
              <Td color={'blue'}>
                <Link href='https://scholar.google.com/citations?user=1OFoUYgAAAAJ&hl=en&authuser=1'>
                  Google Scholars
                </Link>
              </Td>
            </Tr>

            <Tr>
              <Td isNumeric>2</Td>
              <Td fontSize={'26px'}> Department of Electrical Engineering</Td>
              <Td color={'blue'}>
                <Link href='/SOET/DOEE-Thrust.pdf'>Thrust areas</Link>
              </Td>{' '}
              <Td color={'blue'}>
                <Link href='/SOET/DOEE-Publications.pdf'>Publications</Link>
              </Td>
              <Td color={'blue'}>
                <Link href='/SOET/DOEE-ResearchProjects.pdf'>
                  Research Projects
                </Link>
              </Td>
              <Td color={'blue'}>
                <Link href='https://scholar.google.com/citations?hl=en&user=tQLtj4AAAAAJ'>
                  Google Scholars
                </Link>
              </Td>
            </Tr>

            <Tr>
              <Td isNumeric>3</Td>
              <Td fontSize={'24px'}> Department of Mechanical Engineering</Td>
              <Td color={'blue'}>
                <Link href='/SOET/DOME-Thrust.pdf'>Thrust areas</Link>
              </Td>{' '}
              <Td color={'blue'}>
                <Link href='https://scholar.google.co.in/citations?hl=en&authuser=1&user=DYT2fEUAAAAJ'>
                  Publications
                </Link>
              </Td>
              <Td color={'blue'}>
                <Link href='/SOET/DOME-Jornals.pdf'>Journals</Link>
              </Td>
              <Td color={'blue'}>
                <Link href='/SOET/DOME-Books.pdf'>Books</Link>
              </Td>
            </Tr>

            <Tr>
              <Td isNumeric>4</Td>
              <Td fontSize={'24px'}> Department of Computer Science</Td>
              <Td color={'blue'}>
                <Link href='/SOET/DOCS-Thrust.pdf'>Thrust areas</Link>
              </Td>{' '}
              <Td color={'blue'}>
                <Link href='/SOET/DOCS-Publications.pdf'>Publications</Link>
              </Td>
              <Td color={'blue'}>
                <Link href='https://ugccare.unipune.ac.in/apps1/home/index'>
                  Journals
                </Link>
              </Td>
              <Td color={'blue'}>
                <Link href='/SOET/DOCS-ResearchProjects.pdf'>
                  Research Projects
                </Link>
              </Td>
            </Tr>
            <Tr>
              <Td isNumeric>5</Td>
              <Td fontSize={'26px'}>
                Department of Electronics <br />
                <br />
                and Communication Engineering
              </Td>
              <Td color={'blue'}>
                <Link href='/SOET/DOEE&C-Thrust.pdf'>Thrust areas</Link>
              </Td>{' '}
              <Td color={'blue'}>
                <Link href='/SOET/DOEE&C-Publications.pdf'>Publications</Link>
              </Td>
              <Td color={'blue'}>
                <Link href='/SOET/DOEE&C-ResearchProjects.pdf'>
                  Research Projects
                </Link>
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
