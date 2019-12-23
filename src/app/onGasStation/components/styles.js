import styled from "styled-components";
import BurdiButton from "../../common/components/BurdiButton";

export const Interface = styled.div`
  min-width: 700px;
  max-width: 1000px;
  max-height: 1500px;
  margin: auto;
  font-family: Montserrat, sans-serif;
`;

export const SelectGas = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`;

export const Gas = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background-color: #f7f7f7;
  flex: 1;
  align-items: center;
  opacity: ${({ isOutOfStock }) => (isOutOfStock ? 0.4 : 1)};
  padding: 10px 0;
  background-color: ${({ bgColorSelected, isSelected }) =>
    isSelected ? bgColorSelected : ""};
  :hover {
    background-color: ${({ bgColorSelected, isOutOfStock }) =>
      !isOutOfStock && bgColorSelected};
  }
`;

export const GasTitle = styled.div`
  margin: 15px 0;
  font-weight: 700;
  color: ${({ color }) => color};
  text-decoration: ${({ isOutOfStock }) =>
    isOutOfStock ? "line-through" : "none"};
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
  color: ${({ value }) => (value > 0 ? "#e05d5d" : "green")};
`;

export const Action = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  background-color: #ececdd;
  color: #808080;
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
  > div {
    margin-right: 20px;
  }
  > div > img {
    height: 60px;
  }
`;
