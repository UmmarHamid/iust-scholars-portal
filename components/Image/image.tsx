import Image from 'next/image';
import { styled } from 'styled-components';

type LogoType = {
  imgSrc: string;
  alt: string;
  width: number;
  height: number;
};

const LogoStyled = styled.div`
  display: flex;
  padding: 20px;
`;

const ImageFormat = ({ imgSrc, alt, width, height }: LogoType) => {
  return (
    <LogoStyled>
      <Image src={imgSrc} alt={alt} width={width} height={height} />
    </LogoStyled>
  );
};
export default ImageFormat;
