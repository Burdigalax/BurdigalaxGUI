import styled from "styled-components";
import Icon from "../../../../common/components/Icon";

export const Wrapper = styled.div`
  padding: 10px;
  background-color: #fafafa;
  border-radius: ${({ hasBgHeader }) =>
    hasBgHeader ? "0 0 0 10px" : "10px 0px 0px 10px"};
  flex: 0.3;
  display: flex;
  flex-direction: column;
`;

export const Information = styled.h5`
  margin-bottom: 5px;
  margin-bottom: 15px;
  margin-top: 0px;
  color: ${({ titleColor }) => titleColor};
  font-size: 14px;
  font-weight: 600;
`;

export const Description = styled.div`
  font-size: 12px;
  color: #808080;
`;

export const WrapperIcon = styled.div`
  text-align: center;
  margin-bottom: 5px;
`;
export const StyledIcon = styled(Icon)`
  max-height: 50px;
`;

export const Title = styled.h5`
  text-align: center;
  font-size: 14px;
  color: #808080;
  font-weight: 500;
  margin: 10px 5px;
`;

export const EffectsTitle = styled.h6`
  font-size: 12px;
  text-transform: uppercase;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 400;
`;

export const EffectsLiTitle = styled.li`
  list-style: none;
`;

export const ListEffects = styled.ul`
  padding-left: 0px;
`;
