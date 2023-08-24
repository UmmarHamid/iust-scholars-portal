import styled from 'styled-components';
import { MdArrowBackIosNew } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';
import Head from 'next/head';
import {
  Text,
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
import Logo from '@/components/Logo/Logo';
const StyledIcon = styled.h1`
  font-size: 46px;
  font-weight: 700;
  color: #0c2b50;
  padding-left: 30%;
`;
const StyledFooter = styled.footer`
  left: 0;
  bottom: 0;
  position: relative;
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
        <title>Srac Members</title>
      </Head>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Link href='/office'>
          <StyledIcon>{<MdArrowBackIosNew />}</StyledIcon>
        </Link>
        <Heading as={'h2'} color={'teal'} paddingTop={'2%'} fontWeight={300}>
          Srac Members
        </Heading>
        <Button colorScheme='red' leftIcon={<BiLogOut />}>
          Logout
        </Button>
      </Box>
      <TableContainer>
        <Table
          display={'flex'}
          justifyContent={'space-around'}
          variant='simple'
          border='none'
        >
          <Tbody>
            <Tr>
              <Td isNumeric>1</Td>
              <Td>
                <Logo
                  href='/'
                  alt='Not available yet'
                  width={100}
                  height={75}
                  imgSrc='/'
                />
              </Td>
              <Td>
                <Heading>Not available yet</Heading>
                <Text></Text>
                <Text></Text>
              </Td>
              <Td color='blue'>
                <Link href=''>Not available yet</Link>
              </Td>
              <Td color='blue'>
                <Link href=''>Not available yet</Link>
              </Td>
            </Tr>
            <Tr>
              <Td isNumeric>2</Td>
              <Td>
                <Logo
                  href='/'
                  alt='Not available yet'
                  width={100}
                  height={75}
                  imgSrc='/'
                />
              </Td>
              <Td>
                <Heading>Not available yet</Heading>
                <Text></Text>
                <Text></Text>
              </Td>
              <Td color='blue'>
                <Link href=''>
                  <Text>Not available yet </Text>
                </Link>
                {/* <Link href='https://www.scopus.com/authid/detail.uri?authorId=56031665200'> */}
                {/* </Td><Text> Scopus</Text> */}
                {/* </Link> */}
              </Td>
              <Td color='blue'>
                <Link href=''>
                  <Text>Not available yet</Text>
                </Link>
                {/* <Link href='https://www.webofscience.com/wos/author/rid/ABG-6767-2020'> */}
                {/* <Text>Web Of Science</Text> */}
                {/* </Link> */}
              </Td>
              <Td color='blue'>
                <Link href=''>Not available yet</Link>
              </Td>
            </Tr>
            <Tr>
              <Td isNumeric>2</Td>
              <Td>
                <Logo
                  href='/'
                  alt='Not available yet'
                  width={100}
                  height={75}
                  imgSrc='/'
                />
              </Td>
              <Td>
                <Heading>Not available yet</Heading>
                <Text></Text>
                <Text></Text>
              </Td>
              <Td color='blue'>
                <Link href=''>
                  <Text>Not available yet </Text>
                </Link>
                {/* <Link href='https://www.scopus.com/authid/detail.uri?authorId=56031665200'> */}
                {/* </Td><Text> Scopus</Text> */}
                {/* </Link> */}
              </Td>
              <Td color='blue'>
                <Link href=''>
                  <Text>Not available yet</Text>
                </Link>
                {/* <Link href='https://www.webofscience.com/wos/author/rid/ABG-6767-2020'> */}
                {/* <Text>Web Of Science</Text> */}
                {/* </Link> */}
              </Td>
              <Td color='blue'>
                <Link href=''>Not available yet</Link>
              </Td>
            </Tr>
            <Tr>
              <Td isNumeric>2</Td>
              <Td>
                <Logo
                  href='/'
                  alt='Not available yet'
                  width={100}
                  height={75}
                  imgSrc='/'
                />
              </Td>
              <Td>
                <Heading>Not available yet</Heading>
                <Text></Text>
                <Text></Text>
              </Td>
              <Td color='blue'>
                <Link href=''>
                  <Text>Not available yet </Text>
                </Link>
                {/* <Link href='https://www.scopus.com/authid/detail.uri?authorId=56031665200'> */}
                {/* </Td><Text> Scopus</Text> */}
                {/* </Link> */}
              </Td>
              <Td color='blue'>
                <Link href=''>
                  <Text>Not available yet</Text>
                </Link>
                {/* <Link href='https://www.webofscience.com/wos/author/rid/ABG-6767-2020'> */}
                {/* <Text>Web Of Science</Text> */}
                {/* </Link> */}
              </Td>
              <Td color='blue'>
                <Link href=''>Not available yet</Link>
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
export default index;
