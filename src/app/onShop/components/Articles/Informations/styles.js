import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 10px;
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
  font-size: 13px;
`;

export const StyledIcon = styled.div`
  text-align: center;
  margin-bottom: 5px;
`;

export const Title = styled.h5`
  text-align: center;
  font-size: 17px;
  margin: 10px 5px;
`;

export const EffectsTitle = styled.h6`
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const EffectsLiTitle = styled.li`
  position: relative;
  left: 15px;
`;

export const ListEffects = styled.ul`
  padding-left: 0px;
`;
