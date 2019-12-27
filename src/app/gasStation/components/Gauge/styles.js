import styled from "styled-components";

export const GaugeEmpty = styled.div.attrs(({ value, maxValue }) => ({
  style: {
    height: `${131 - (value * 121) / maxValue}px`
  }
}))`
  overflow: hidden;
  transition: height 0.25s ease;
`;

export const GaugeFull = styled.div`
  position: absolute;
  z-index: 1;
`;

export const StaticGaugeEmpty = styled.div`
  height: 133px;
  z-index: 2;
`;
