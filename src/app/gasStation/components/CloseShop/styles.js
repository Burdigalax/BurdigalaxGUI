import styled from "styled-components";

export const CloseShop = styled.div`
  display: flex;
  padding: 15px 30px;
  align-items: center;
  justify-content: center;
  background-color: #ececdd;
  flex-direction: column;
  color: #808080;
  flex: 1;
`;

export const Title = styled.h1`
  color: ${({ color }) => color};
`;

export const Message = styled.span`
  color: ${({ color }) => color};
`;
