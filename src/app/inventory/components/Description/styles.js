import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #e6e6e6;
  border-radius: 0 0 13px 13px;
  width: 85%;
  margin: auto;
  align-items: center;
  padding: 10px;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 16px;
`;

export const Informations = styled.span`
  align-items: center;
  display: flex;
  color: #959da3;
  font-size: 14px;
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
`;

export const WrapperIcon = styled.div`
  margin: 10px;
  display: flex;
  max-height: 70px;
`;

export const Information = styled.div`
  margin-right: 15px;
  display: flex;
  align-items: center;
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

export const Effect = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  margin-right: 5px;
  color: #3d793d;
`;
