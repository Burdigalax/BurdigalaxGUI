import styled from "styled-components";
import BurdiButton from "../../common/components/BurdiButton";

export const Interface = styled.div`
  min-width: 700px;
  max-width: 1000px;
  max-height: 1500px;
  margin: auto;
  font-family: Montserrat, sans-serif;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;

  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }
`;

export const SelectGas = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  > div:first-child {
    border-radius: ${({ hasBorderRadius }) =>
      hasBorderRadius ? "13px 0 0" : "none"};
  }
  > div:last-child {
    border-radius: ${({ hasBorderRadius }) =>
      hasBorderRadius ? "0 13px 0 0" : "none"};
  }
`;

export const Total = styled.span`
  font-size: 12px;
  line-height: 1.5;
`;

export const Action = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  border-radius: 0 0 15px 15px;
`;

export const WrapperGauge = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const Warning = styled.div`
  font-weight: 400;
  font-size: 19px;
`;

export const WrapperPayment = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.4;
`;

export const Informations = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.4;
  font-size: 13px;
`;

export const Line = styled.div`
  margin-top: 20px;
  align-self: stretch;
  justify-content: space-around;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const FuelLevel = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.4;
  align-items: center;
`;

export const List = styled.ul`
  list-style: none;
  padding-left: 15px;
  > li {
    margin-bottom: 15px;
  }
`;

export const InfoTitle = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

export const Buy = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.4;
  align-items: center;
`;

export const BuyButton = styled(BurdiButton)`
  font-weight: 700;
  padding: 10px 30px;
  font-family: Montserrat, sans-serif;
  max-width: 258px;
  > div {
    margin-right: 20px;
  }
  > div > img {
    height: 60px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.4;
  align-items: center;
  justify-items: center;
`;

export const Error = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 15px;
  align-items: center;
  justify-items: center;
  color: ${({ redColor }) => redColor};
`;
