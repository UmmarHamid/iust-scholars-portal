import Head from 'next/head';
import Logo from '@/components/Logo/Logo';
import { Button } from '@chakra-ui/button';
import { Container, Heading, Stack, Box } from '@chakra-ui/react';
import { styled } from 'styled-components';
import { BsFillPersonFill } from 'react-icons/bs';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useUser } from '@supabase/auth-helpers-react';
import Logout from '@/components/Logout/Logout';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const settings = {
  swipeToSlide: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 7000,
  cssEase: 'linear',
};
const SlideContainer = styled.div`
  position: relative;
`;
const SlideImage1 = styled.img`
  background-image: url('/photogallery1.jpg');
  background-repeat: no-repeat;
  width: 100%;
  height: 300px;
`;
const SlideImage2 = styled.img`
  background-image: url('/photogallery2.jpg');
  width: 100%;
  height: 300px;
`;

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
  height: 280px;
  width: 260px;
  border-radius: 10px;
  background-image: linear-gradient(43deg, #000000, #434343);
  padding: 2%;
`;
const StyledDeptSecond = styled.div`
  height: 280px;
  width: 260px;
  border-radius: 10px;
  background-image: linear-gradient(43deg, #1d2b64, #f8cdda);
  padding: 2%;
`;
const StyledDeptThird = styled.div`
  height: 280px;
  width: 260px;
  border-radius: 10px;
  background-image: linear-gradient(43deg, #0f2027, #203a43, #2c5364);
  padding: 2%;
`;
const StyledDeptFourth = styled.div`
  height: 280px;
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
  margin: 5%;
  padding: 2%;
  height: 100%;
  width: 62%;
  border-radius: 20px;
`;
const StyledMessage = styled.div`
  display: flex;
  flex-direction: row;
`;
const StyledHeading = styled.h1`
  font-size: 28px;
  font-weight: bold;
`;
const StyledHeadingSecond = styled.h1`
  font-size: 18px;
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
  justify-content: space-around;
  justify-content: space-between;
  margin: 2%;
  margin-left: 10%;
  margin-right: 10%;
  flex-direction: row;
  flex-wrap: wrap;
`;
const StyledBg1 = styled.div`
  background-image: url('/1.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 250px;
  height: 200px;
  text-align: center;
  border-radius: 5px;
`;
const StyledBg2 = styled.div`
  background-image: url('/2.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 250px;
  height: 200px;
  text-align: center;
  border-radius: 5px;
`;
const StyledBg3 = styled.div`
  background-image: url('/3.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 250px;
  height: 200px;
  text-align: center;
  border-radius: 5px;
`;
const StyledBg4 = styled.div`
  background-image: url('/4.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 250px;
  height: 200px;
  text-align: center;
  border-radius: 5px;
`;
const StyledBg5 = styled.div`
  margin-top: 3%;
  background-image: url('/5.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 250px;
  height: 200px;
  text-align: center;
  border-radius: 5px;
`;
const StyledBg6 = styled.div`
  margin-top: 3%;
  background-image: url('/6.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 250px;
  height: 200px;
  text-align: center;
  border-radius: 5px;
`;
const StyledBg7 = styled.div`
  margin-top: 3%;
  background-image: url('/7.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 250px;
  height: 200px;
  text-align: center;
  border-radius: 5px;
`;
const StyledBg8 = styled.div`
  margin-top: 3%;
  background-image: url('/8.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 250px;
  height: 200px;
  text-align: center;
  border-radius: 15px;
`;
const StyledSpotlightText1 = styled.h1`
  margin-top: 15%;
  font-size: 26px;
  font-weight: 600;
  line-height: 24px;
  color: #efcc00;
  text-align: center;
`;
const StyledSpotlightText2 = styled.h1`
  margin-top: 3%;
  padding: 10%;
  font-size: 50px;
  font-weight: 600;
  line-height: 24px;
  color: #00bcd4;
`;
const ImageStyled = styled(Image)`
  border-radius: 10px;
`;

export const Homepage = () => {
  const user = useUser();

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
            href='/'
            width={300}
            height={75}
            imgSrc='/iustlogo.png'
          />

          <Stack direction='row' spacing={10} pt={4}>
            {!user && (
              <Link href={'/login'}>
                <Button
                  leftIcon={<BsFillPersonFill />}
                  colorScheme='blue'
                  variant='solid'
                >
                  Login / Sign Up
                </Button>
              </Link>
            )}
            {user && <Logout />}
          </Stack>
        </StyledHeader>
        {/* Photo Gallery Section */}
        <Container maxW={'95%'}>
          <Slider {...settings}>
            <ImageStyled
              src={'/photogallery1.jpg'}
              alt={'NOT-available'}
              width={1200}
              height={300}
            />
            <ImageStyled
              src={'/photogallery2.jpg'}
              alt={'NOT-available'}
              width={1200}
              height={300}
            />
          </Slider>
        </Container>

        {/* Departments Section */}
        {/* TODO: Make this section dynamic */}
        <DepartmentsContainerStyled>
          <StyledDeptFirst>
            <Link href='/achievementsoet'>
              Research Achievements by School of Engineering and Technology
            </Link>
          </StyledDeptFirst>
          <StyledDeptSecond>
            <Link href='/achievementsbs'>
              Research Achievements by School of Business Studies
            </Link>
          </StyledDeptSecond>
          <StyledDeptThird>
            <Link href='/achievementsh&s'>
              Research Achievements by School of Humanities and Social Sciences
            </Link>
          </StyledDeptThird>
          <StyledDeptFourth>
            <Link href='/achievementsos'>
              Research Achievements by School of Sciences
            </Link>
          </StyledDeptFourth>
        </DepartmentsContainerStyled>

        {/* VC Section */}
        <StyledMessage>
          <VCSectionStyled>
            <Image alt='Vc' width={134} height={144} src={'/vc.jpg'} />
            <StyledHeading>Vc Message</StyledHeading>

            <StyledHeadingSecond>
              Prof. Shakil Ahmad Romshoo
            </StyledHeadingSecond>
            <p>
              I am delighted to welcome you to Islamic University of Science and
              Technology (IUST). IUST is committed to shoulder the
              responsibility of quality education, pursue research in important
              areas, and engage in activities that advance the good of society
              in order to find solutions to societal issues. We are guided by
              the 2021-26 strategic plan to make IUST a leading university in
              the country. Our mission is to foster a capable human resource
              that can make the University a place of intellectual curiosity and
              inquisitiveness and bring together bright minds to address the
              issues of today while taking their rightful place in shaping the
              future. We aim to foster a high degree of expertise, creativity
              and diversity in our students, so that they will become the next
              generation of creative researchers, leaders, nation-builders,
              artists, policy- and decision-makers. Ours is a university
              centered on our students’ success, providing them with right
              experiences, putting them on right career paths and fostering
              their skills and mind-set to make them ready for successful
              careers and professional advancement.
            </p>
          </VCSectionStyled>
          <VCSectionStyled>
            <Image alt='Vc' width={134} height={144} src={'/dean.jfif'} />
            <StyledHeadingSecond>Prof. Sheikh Javid Ahmed</StyledHeadingSecond>
            <StyledHeading>Dean Research</StyledHeading>
            <p>
              @IUST, our dogma is that every faculty member is a meaningful
              researcher and a potential innovator of products, processes. His
              academic pursuits and deliverance would get richer and stronger
              through research and innovation while engaging with scholars and
              colleagues. For this purpose, there must be an enabling research
              ecosystem driven by encouragement and recognition. The overarching
              role of Team Reaserch@IUST would be to integrate research,
              innovation, technology development, industry connect and
              facilitate community outreach. Our research policy is aligned
              towards catalyzing new research thinking as mandated in NEP 2020.
              It will cut across multidiscipline and interdisciplinary domains
              of knowledge, adopting best practices and forging strong tie-ups
              and collaborations. The journey of IUST from an academic
              university to a research-intensive university has begun. We invite
              you to be part of this exciting journey!
            </p>
          </VCSectionStyled>
        </StyledMessage>

        {/* Research Section */}
        {/* TODO: Make this section dynamic */}
        <StyledHeadingNew> RESEARCH SPOTLIGHT</StyledHeadingNew>
        <StyledSpotlight>
          <StyledBg1>
            <StyledSpotlightText1>PUBLICATIONS</StyledSpotlightText1>
            <StyledSpotlightText2>1985+</StyledSpotlightText2>
          </StyledBg1>
          <StyledBg2>
            <StyledSpotlightText1>PROJECTS</StyledSpotlightText1>
            <StyledSpotlightText2>133+</StyledSpotlightText2>
          </StyledBg2>
          <StyledBg3>
            <StyledSpotlightText1>PATENTS</StyledSpotlightText1>
            <StyledSpotlightText2>30+</StyledSpotlightText2>
          </StyledBg3>
          <StyledBg4>
            <StyledSpotlightText1>CONSULTANCES</StyledSpotlightText1>
            <StyledSpotlightText2>1+</StyledSpotlightText2>
          </StyledBg4>
          <StyledBg5>
            <StyledSpotlightText1>RESEARCH PROGRAMMES</StyledSpotlightText1>
            <StyledSpotlightText2>23</StyledSpotlightText2>
          </StyledBg5>
          <StyledBg6>
            <StyledSpotlightText1>SCHOLARS</StyledSpotlightText1>
            <StyledSpotlightText2>207</StyledSpotlightText2>
          </StyledBg6>
          <StyledBg7>
            <StyledSpotlightText1>FELLOWSHIPS</StyledSpotlightText1>
            <StyledSpotlightText2>81</StyledSpotlightText2>
          </StyledBg7>
          <StyledBg8>
            <StyledSpotlightText1>PROJECTS</StyledSpotlightText1>
            <StyledSpotlightText2>66</StyledSpotlightText2>
          </StyledBg8>
        </StyledSpotlight>

        <Footer />
      </main>
    </>
  );
};
export default Homepage;
