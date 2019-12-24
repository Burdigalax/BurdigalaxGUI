import styled from "styled-components";

export const Resume = styled.div`
  flex-direction: column;
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
`;

export const TotalTTC = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 500;
`;

export const SubLine = styled.span`
  font-size: 13px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Money = styled.span`
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 500;
  color: ${({ hasNoEnoughMoney }) => (hasNoEnoughMoney ? "red" : "#528c3f")};
  margin-bottom: 15px;
`;

export const Separtor = styled.hr`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border-color: ${({ color }) => color};
  border-style: dashed;
  width: 100%;
  opacity: 0.3;
`;
