import styled from "styled-components";
import BurdiButton from "../../../common/components/BurdiButton";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #3b4e5e;
  color: white;
  border-radius: 13px 13px 0 0;
  align-items: center;
`;

export const Description = styled.span`
  color: #9da6ae;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const CloseButton = styled(BurdiButton)`
  font-weight: 700;
  align-self: flex-end;
  padding-top: 0;
  padding-bottom: 0px;
  margin-bottom: 0px;
  margin-top: -9px;
  margin-right: 7px;
`;

export const Title = styled.span`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const Storage = styled.div`
  border: 2px solid #3b4e5e;
  background-color: #2d3c48;
  color: #959da3;
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 700;
  margin-top: -13px;
  align-items: center;
  display: flex;
  > img {
    margin-right: 3px;
  }
`;
