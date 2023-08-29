import Head from 'next/head';
import Logo from '@/components/Logo/Logo';
import { Button } from '@chakra-ui/button';
import { Box, Heading, Stack } from '@chakra-ui/react';
import { styled } from 'styled-components';
import { BsFillPencilFill, BsFillPersonFill } from 'react-icons/bs';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import Image from 'next/image';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const DepartmentsContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 3%;
  font-size: 24px;
  color: #ffff;
`;
const StyledDeptFirst = styled.div`
  height: 300px;
  width: 260px;
  border-radius: 10px;
  background-image: linear-gradient(43deg, #000000, #434343);
  padding: 2%;
`;
const StyledDeptSecond = styled.div`
  height: 300px;
  width: 260px;
  border-radius: 10px;
  background-image: linear-gradient(43deg, #1d2b64, #f8cdda);
  padding: 2%;
`;
const StyledDeptThird = styled.div`
  height: 300px;
  width: 260px;
  border-radius: 10px;
  background-image: linear-gradient(43deg, #0f2027, #203a43, #2c5364);
  padding: 2%;
`;
const StyledDeptFourth = styled.div`
  height: 300px;
  width: 260px;
  border-radius: 10px;
  background-image: linear-gradient(to right, #00b4db, #0083b0);
  padding: 2%;
`;
const VCSectionStyled = styled.div`
  background-color: #dddee5;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 2%;
  height: 100%;
  width: 62%;
  border-radius: 20px;
`;
const StyledHeading = styled.h1`
  font-size: 28px;
  font-weight: bold;
`;
const StyledHeadingNew = styled.h1`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
`;
const StyledSpotlight = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin: 2%;
`;
const StyledBg1 = styled.div`
  background-image: url('/1.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 297px;
  height: 250px;
  text-align: center;
  border-radius: 15px;
`;
const StyledBg2 = styled.div`
  background-image: url('/2.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 297px;
  height: 250px;
  text-align: center;
  border-radius: 15px;
`;
const StyledBg3 = styled.div`
  background-image: url('/3.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 297px;
  height: 250px;
  text-align: center;
  border-radius: 15px;
`;
const StyledBg4 = styled.div`
  background-image: url('/4.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 297px;
  height: 250px;
  text-align: center;
  border-radius: 15px;
`;
const StyledSpotlightText1 = styled.h1`
  padding-top: 15%;
  font-size: 36px;
  font-weight: 600;
  line-height: 24px;
  color: #fff;
`;
const StyledSpotlightText2 = styled.h1`
  padding: 10%;
  font-size: 74px;
  font-weight: 600;
  line-height: 24px;
  color: #00bcd4;
`;

export const Homepage = () => {
  return (
    <>
      <Head>
        <title>HomePage</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main>
        {/* Header Section */}
        <StyledHeader>
          <Logo
            alt='IUST-logo'
            href='google.com'
            width={300}
            height={75}
            imgSrc='/iustlogo.png'
          />

          <Stack direction='row' spacing={10} pt={4}>
            <Link href={'/login'}>
              <Button
                leftIcon={<BsFillPersonFill />}
                colorScheme='red'
                variant='solid'
              >
                Employee Login
              </Button>
            </Link>
            <Link href={'/login'}>
              <Button
                leftIcon={<BsFillPersonFill />}
                colorScheme='blue'
                variant='solid'
              >
                Student Login
              </Button>
            </Link>
            <Link href={'/signup'}>
              <Button
                rightIcon={<BsFillPencilFill />}
                colorScheme='whatsapp'
                variant='outline'
              >
                Sign Up
              </Button>
            </Link>
          </Stack>
        </StyledHeader>
        {/* Photo Gallery Section */}
        <Box
          mx='3%'
          display='flex'
          alignItems={'center'}
          height={300}
          border='3px solid black'
          borderRadius={15}
          mt={10}
        >
          <Heading size={'2xl'} mx={'auto'}>
            Photo Gallery
          </Heading>
        </Box>

        {/* Departments Section */}
        {/* TODO: Make this section dynamic */}
        <DepartmentsContainerStyled>
          <StyledDeptFirst>
            <Link href='/researchachievementsoet'>
              Research Achievements by School of Engineering and Technology
            </Link>
          </StyledDeptFirst>
          <StyledDeptSecond>
            <Link href='google.com'>
              Research Achievements by School of Business Studies
            </Link>
          </StyledDeptSecond>
          <StyledDeptThird>
            <Link href='google.com'>
              Research Achievements by School of Humanities and Social Sciences
            </Link>
          </StyledDeptThird>
          <StyledDeptFourth>
            <Link href='google.com'>
              Research Achievements by School of Humanities and Social Sciences
            </Link>
          </StyledDeptFourth>
        </DepartmentsContainerStyled>

        {/* VC Section */}
        <VCSectionStyled>
          <Image alt='Vc' width={134} height={144} src={'/vc.jpg'} />

          <StyledHeading>Vc Message</StyledHeading>
          <p>
            I am delighted to welcome you to Islamic University of Science and
            Technology (IUST). IUST is committed to shoulder the responsibility
            of quality education, pursue research in important areas, and engage
            in activities that advance the good of society in order to find
            solutions to societal issues. We are guided by the 2021-26 strategic
            plan to make IUST a leading university in the country. Our mission
            is to foster a capable human resource that can make the University a
            place of intellectual curiosity and inquisitiveness and bring
            together bright minds to address the issues of today while taking
            their rightful place in shaping the future. We aim to foster a high
            degree of expertise, creativity and diversity in our students, so
            that they will become the next generation of creative researchers,
            leaders, nation-builders, artists, policy- and decision-makers. Ours
            is a university centered on our students’ success, providing them
            with right experiences, putting them on right career paths and
            fostering their skills and mind-set to make them ready for
            successful careers and professional advancement. Once the students
            graduate from here, they would have the career direction and the
            confidence required for success in their chosen fields.
          </p>
        </VCSectionStyled>

        {/* Research Section */}
        {/* TODO: Make this section dynamic */}
        <StyledHeadingNew> RESEARCH SPOTLIGHT</StyledHeadingNew>
        <StyledSpotlight>
          <StyledBg1>
            <StyledSpotlightText1>PUBLICATIONS</StyledSpotlightText1>
            <StyledSpotlightText2>1967+</StyledSpotlightText2>
          </StyledBg1>
          <StyledBg2>
            <StyledSpotlightText1>PROJECTS</StyledSpotlightText1>
            <StyledSpotlightText2>126+</StyledSpotlightText2>
          </StyledBg2>
          <StyledBg3>
            <StyledSpotlightText1>PATENTS</StyledSpotlightText1>
            <StyledSpotlightText2>29+</StyledSpotlightText2>
          </StyledBg3>
          <StyledBg4>
            <StyledSpotlightText1>CONSULTANCES</StyledSpotlightText1>
            <StyledSpotlightText2>1+</StyledSpotlightText2>
          </StyledBg4>
        </StyledSpotlight>

        <Footer />
      </main>
    </>
  );
};
export default Homepage;
