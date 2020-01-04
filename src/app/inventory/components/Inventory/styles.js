import styled from "styled-components";

export const Interface = styled.div`
  display: flex;
  width: 430px;
  min-width: 380px;
  max-width: 475px;
  opacity: 0.9;
  flex-direction: column;
  font-family: Montserrat, sans-serif;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  margin: 10px;
  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }
`;

export const ItemsList = styled.div`
  display: flex;
  justify-content: start;
  flex-flow: wrap;
  overflow: overlay;
  max-height: 295px;
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #232f38;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #ffffff;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #ffffff;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track:hover {
    background: transparent;
  }
  ::-webkit-scrollbar-track:active {
    background: transparent;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
`;

export const CategoryName = styled.div`
  color: #959da3;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 700;
  margin-left: 10px;
  text-align: center;
`;

export const Body = styled.div`
  background-color: #2d3c48;
  padding: 10px;
`;

export const Footer = styled.div`
  background-color: #232f38;
  display: flex;
  flex-direction: column;
  flex: 1;
  border-radius: 0 0 13px 13px;
  min-height: 15px;
`;

export const NoItemSelected = styled.div`
  text-transform: uppercase;
  color: #949da3;
  text-align: center;
  flex: 1;
  font-size: 13px;
  font-weight: 600;
  padding: 10px;
`;

export const NoItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #949da3;
  margin: 20px;
  font-size: 18px;
  > img {
    margin: 15px;
  }
`;
