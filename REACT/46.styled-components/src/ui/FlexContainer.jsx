import styled from "styled-components";

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: center;
  align-items: center;
  gap: ${({ gap }) => gap};
`;

const FlexContainer = ({ children, direction, gap }) => {
  return (
    <ContainerStyled direction={direction} gap={gap}>
      {children}
    </ContainerStyled>
  );
};

export default FlexContainer;
