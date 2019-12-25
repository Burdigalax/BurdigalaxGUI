import styled from "styled-components";

/*
128 => 0%
x <= 50%
 */

export const GaugeEmpty = styled.div`
  overflow: hidden;
  transition: height 0.25s ease;
  height: ${({ value, maxValue }) => 131 - (value * 121) / maxValue}px;
`;

export const GaugeFull = styled.div`
  position: absolute;
  z-index: 1;
`;

export const StaticGaugeEmpty = styled.div`
  height: 133px;
  z-index: 2;
`;
