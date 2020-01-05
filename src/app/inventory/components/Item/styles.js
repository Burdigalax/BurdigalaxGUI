import styled from "styled-components";
import Icon from "../../../common/components/Icon";

export const Wrapper = styled.div`
  display: flex;
  width: 75px;
  opacity: 1;
  height: 75px;
  background: linear-gradient(45deg, #2e3d49, #3e4c57);
  flex-direction: column;
  border: ${({ isSelected }) =>
    isSelected ? "2px solid #06d2f2" : "2px solid #505d67"};
  border-radius: 10px;
  margin: 5px 4px;
  cursor: pointer;
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
  img {
    margin-right: 2px;
  }
`;

export const StyledIcon = styled(Icon)`
  align-self: center;
  height: 42px;
  width: auto !important;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  height: 19px;
`;

export const EquippedTag = styled.div`
  background-color: ${({ isEquipped }) => (isEquipped ? "#faa82a" : "#9da6ae")};
  width: 7px;
  height: 7px;
  border: 2px solid #2d3c48;
  border-radius: 20px;
  margin-top: -6px;
  align-self: center;
  margin-bottom: -5px;
`;

export const Quantity = styled.div`
  border-radius: 20px;
  background-color: #515e68;
  color: white;
  border: 2px solid #2d3c48;
  font-size: ${({ value }) =>
    value < 100000 ? 12 : value < 10000000 ? 9 : 7}px;
  font-weight: 500;
  position: relative;
  top: -9px;
  left: 10px;
  padding: 2px 4px;
  min-width: 20px;
  text-align: center;
`;
