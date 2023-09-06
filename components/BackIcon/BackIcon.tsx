import styled from 'styled-components';
import { MdArrowBackIosNew } from 'react-icons/md';
const StyledIcon = styled.h1`
  font-size: 42px;
  font-weight: 700;
  color: #0c2b50;
`;
export const BackIcon = () => {
  return (
    <>
      <StyledIcon>{<MdArrowBackIosNew size={36} />}</StyledIcon>
    </>
  );
};
export default BackIcon;
