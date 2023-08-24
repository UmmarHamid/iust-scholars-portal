import styled from 'styled-components';
import { MdArrowBackIosNew } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';
import Head from 'next/head';
import ImageFormat from '@/components/Image/image';
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
const StyledIcon = styled.h1`
  font-size: 46px;
  font-weight: 700;
  color: #0c2b50;
  padding-left: 30%;
`;
export const index = () => {
  return (
    <>
      <Head>
        <title>Supervisors</title>
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
          Supervisors
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
                <ImageFormat
                  alt='Image'
                  width={100}
                  height={75}
                  imgSrc='/r.jfif'
                />
              </Td>
              <Td>
                <Heading>Dr. Rumaan Bashir</Heading>
                <Text>Associate Professor</Text>
                <Text>rumaan.bashir@islamicuniversity.edu.in</Text>
              </Td>
              <Td color='blue'>
                <Link href='https://scholar.google.co.in/citations?user=tEdj4wQAAAAJ'>
                  Google Scholar
                </Link>
              </Td>
              <Td color='blue'>
                <Link href='https://orcid.org/my-orcid?orcid=0000-0001-6656-005X'>
                  ORCID
                </Link>
              </Td>
            </Tr>
            <Tr>
              <Td isNumeric>2</Td>
              <Td>
                <ImageFormat
                  alt='Image'
                  width={100}
                  height={75}
                  imgSrc='/k.jfif'
                />
              </Td>
              <Td>
                <Heading>Dr. Kaisar Javeed</Heading>
                <Text>Associate Professor</Text>
                <Text>kaiser.giri@islamicuniversity.edu.in</Text>
              </Td>
              <Td color='blue'>
                <Link href='https://scholar.google.com/citations?hl=en&authuser=1&user=UVAOMYMAAAAJ'>
                  <Text>Google Scholar </Text>
                </Link>
                <Link href='https://www.scopus.com/authid/detail.uri?authorId=56031665200'>
                  <Text> Scopus</Text>
                </Link>
              </Td>
              <Td color='blue'>
                <Link href='https://orcid.org/0000-0001-8792-5011'>
                  <Text>ORCID</Text>
                </Link>
                <Link href='https://www.webofscience.com/wos/author/rid/ABG-6767-2020'>
                  <Text>Web Of Science</Text>
                </Link>
              </Td>
              <Td color='blue'>
                <Link href='https://www.researchgate.net/profile/Kaiser-Giri'>
                  Research Gate
                </Link>
              </Td>
            </Tr>
            <Tr>
              <Td isNumeric>3</Td>
              <Td>
                <ImageFormat
                  alt='Image'
                  width={100}
                  height={75}
                  imgSrc='/j.jfif'
                />
              </Td>
              <Td>
                <Heading>Dr. Javaid Iqbal Bhat</Heading>
                <Text>Associate Professor</Text>
                <Text>javaid.iqbal@islamicuniversity.edu.in</Text>
              </Td>
              <Td color='blue'>
                <Link href='https://scholar.google.com/citations?user=iv_GX-IAAAAJ&hl=en'>
                  <Text>Google Scholar </Text>
                </Link>
                <Link href='https://www.scopus.com/authid/detail.uri?authorId=57210726736'>
                  <Text> Scopus</Text>
                </Link>
              </Td>
              <Td color='blue'>
                <Link href='https://orcid.org/0000-0003-0312-4888'>
                  <Text>ORCID</Text>
                </Link>
                <Link href='https://www.webofscience.com/wos/author/rid/ABG-7683-2020'>
                  <Text>Web Of Science</Text>
                </Link>
              </Td>
              <Td color='blue'>
                <Link href='https://www.researchgate.net/profile/Javaid-Bhat-5'>
                  Research Gate
                </Link>
              </Td>
            </Tr>
            <Tr>
              <Td isNumeric>4</Td>
              <Td>
                <ImageFormat
                  alt='Image'
                  width={100}
                  height={75}
                  imgSrc='/m.jfif'
                />
              </Td>
              <Td>
                <Heading> Dr. Muzafar Rasool Bhat</Heading>
                <Text>Assistant Professor</Text>
                <Text>muzafar.rasool@islamicuniversity.edu.in</Text>
              </Td>
              <Td color='blue'>
                <Link href='https://scholar.google.com/citations?user=WNvjdtoAAAAJ&hl=en'>
                  <Text>Google Scholar </Text>
                </Link>
                <Link href='https://id.elsevier.com/settings/redirect?code=gojjHCLUbsEImgOgo7cnOvR25HR4dAPusbMTqKee#'>
                  <Text> Scopus</Text>
                </Link>
              </Td>
              <Td color='blue'>
                <Link href='https://orcid.org/0000-0003-0592-0781'>
                  <Text>ORCID</Text>
                </Link>
                <Link href='https://www.webofscience.com/wos/author/record/2144274'>
                  <Text>Web Of Science</Text>
                </Link>
              </Td>
              <Td color='blue'>
                <Link href='https://www.researchgate.net/profile/Muzafar-Bhat-4'>
                  Research Gate
                </Link>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
export default index;
