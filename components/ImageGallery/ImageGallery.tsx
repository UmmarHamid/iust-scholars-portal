import Image from 'next/image';
import { styled } from 'styled-components';

type ImageType = {
  imgSrc: string;
  alt: string;
  width: number;
  height: number;
};

const ImageStyled = styled.div`
  display: flex;
  padding: 20px;
`;

const ImageGallery = ({ imgSrc, alt, width, height }: ImageType) => {
  return (
    <ImageStyled>
      <Image src={imgSrc} alt={alt} width={width} height={height} />
    </ImageStyled>
  );
};
export default ImageGallery;
