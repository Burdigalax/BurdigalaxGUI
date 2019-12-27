import styled from "styled-components";

export const GasTitle = styled.div`
  margin: 15px 0;
  font-weight: 700;
  color: ${({ color }) => color};
  text-decoration: ${({ isInStock }) => (!isInStock ? "line-through" : "none")};
`;

export const TotalTTC = styled.span`
  font-size: 19px;
  font-weight: 500;
  margin-top: 10px;
`;

export const Total = styled.span`
  font-size: 12px;
  line-height: 1.5;
`;

export const Tax = styled.span`
  font-size: 12px;
  line-height: 1.5;
  font-weight: 500;
  color: ${({ value, redColor, greenColor }) =>
    value > 0 ? redColor : greenColor};
`;

export const Gas = styled.div`
  display: flex;
  color: ${({ color }) => color};
  flex-direction: column;
  cursor: ${({ isInStock }) => (isInStock ? "pointer" : "no-drop")};
  flex: 1;
  align-items: center;
  opacity: ${({ isInStock }) => (!isInStock ? 0.4 : 1)};
  padding: 10px 0;
  background-color: ${({ bgColorSelected, bgColor, isSelected }) =>
    isSelected ? bgColorSelected : bgColor};
  :hover {
    background-color: ${({ bgColorSelected, isInStock }) =>
      isInStock && bgColorSelected};
  }
`;
