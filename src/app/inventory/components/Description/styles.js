import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fdfdfdd6;
  border-radius: 0 0 13px 13px;
  width: 85%;
  margin: auto;
  align-items: center;
  padding: 10px;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 16px;
`;

export const Informations = styled.span`
  align-items: center;
  display: flex;
  font-size: 12px;
  font-weight: 600;
`;

export const Description = styled.div`
  font-size: 12px;
  margin-top: 10px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
`;

export const WrapperIcon = styled.div`
  margin: 0 20px;
  display: flex;
  max-height: 70px;
`;

export const Information = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
  color: ${({ color }) => color || "#959da3"};
  > img {
    margin-right: 2px;
    margin-left: 3px;
  }
`;

export const Effects = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  flex-flow: wrap;
`;
