import styled from "styled-components";
import Icon from "../../../common/components/Icon";

export const Wrapper = styled.div`
  display: flex;
  width: 75px;
  height: 75px;
  background: linear-gradient(45deg, #2e3d49, #3e4c57);
  flex-direction: column;
  border: ${({ isSelected }) =>
    isSelected ? "2px solid #06d2f2" : "2px solid #505d67"};
  border-radius: 10px;
  margin: 5px 5px;
`;

const maxHealthBar = 86;
const getHealthColor = value => {
  if (value > 60) return "#6aea4d";
  if (value < 30) return "#fe6d67";
  return "#ffd948";
};
export const HealthBar = styled.div`
  background-color: ${({ value }) => getHealthColor(value)};
  height: 2px;
  margin: 10px 7px 2px;
  width: ${({ value }) => (value * maxHealthBar) / 100}%;
`;

export const Weight = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 10px;
  color: #959da3;
  font-weight: 700;
  margin: 2px;
  align-items: center;
`;

export const StyledIcon = styled(Icon)`
  align-self: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  height: 19px;
`;

export const EquippedTag = styled.div`
  background-color: #faa82a;
  width: 7px;
  height: 7px;
  border: 2px solid #2d3c48;
  border-radius: 20px;
  margin-top: -6px;
  align-self: center;
  margin-bottom: -4px;
`;

export const Quantity = styled.div`
  border-radius: 20px;
  background-color: #515e68;
  color: white;
  border: 2px solid #2d3c48;
  font-size: 13px;
  font-weight: 500;
  position: relative;
  top: -9px;
  left: 10px;
  padding: 2px;
  min-width: 20px;
  text-align: center;
`;
