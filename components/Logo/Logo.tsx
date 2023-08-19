import Image from 'next/image';
import { styled } from 'styled-components';

type LogoType = {
  href: string;
  imgSrc: string;
  alt: string;
  width: number;
  height: number;
};

const LogoStyled = styled.div`
  padding: 20px;
`;

const Logo = ({ href, imgSrc, alt, width, height }: LogoType) => {
  return (
    <LogoStyled>
      <a href={href}>
        <Image src={imgSrc} alt={alt} width={width} height={height} />
      </a>
    </LogoStyled>
  );
};
export default Logo;
