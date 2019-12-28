import styled from "styled-components";

export const Effect = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  margin-right: 5px;
  color: ${({ value }) => (value >= 0 ? "#3d793d" : "#fe6d67")};
  img {
    margin-right: 3px;
  }
`;
