import styled from "styled-components";

const ContainerStyled = styled.div`
  display: grid;
  grid-template-columns: ${({ cols, colSize }) =>
    `repeat(${cols}, ${colSize})`};

  grid-template-rows: ${({ rows, rowSize }) => `repeat(${rows}, ${rowSize})`};

  & > * {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const GridContainer = ({ children, colSize, cols, rowSize, rows }) => {
  return (
    <ContainerStyled
      colSize={colSize}
      cols={cols}
      rowSize={rowSize}
      rows={rows}
    >
      {children}
    </ContainerStyled>
  );
};

export default GridContainer;
