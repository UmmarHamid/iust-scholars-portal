import styled from 'styled-components';
import { MdArrowBackIosNew } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';
import Head from 'next/head';
import Image from 'next/image';
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
const StyledIcon = styled.h1`
  font-size: 46px;
  font-weight: 700;
  color: #0c2b50;
  padding-left: 30%;
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
const ImageStyled = styled(Image)`
  padding: 10px;
  border-radius: 16px;
`;

export const index = () => {
  return (
    <>
      <Head>
        <title> Assigned Supervisor</title>
      </Head>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Link href='/scholars'>
          <StyledIcon>{<MdArrowBackIosNew size={36} />}</StyledIcon>
        </Link>
        <Heading as={'h2'} color={'teal'} fontWeight={300}>
          Assigned Supervisor
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
        >
          <Tbody>
            <Tr>
              <Td>
                <ImageStyled
                  alt='Not available yet'
                  width={200}
                  height={150}
                  src='/vc.jpg'
                />
              </Td>
              <Td>
                <Heading
                  as='h1'
                  fontFamily='Georgia'
                  fontWeight={'300'}
                  color='#4267B2'
                  mr={'100px'}
                >
                  Salman
                </Heading>
              </Td>
              <Td color='teal' fontWeight={300} fontSize={'30px'}>
                <Link href=''>Designation</Link>
              </Td>
              <Td color='teal' fontWeight={300} fontSize={'30px'}>
                <Link href=''>salman855@gmail.com</Link>
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
