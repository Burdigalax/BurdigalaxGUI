import styled from "styled-components";

export const Wrapper = styled.div`
  display: ${({ isDisplay }) => (isDisplay ? "flex" : "none")};
  flex-direction: row;
  align-items: baseline;
`;

export const WrapperDraggable = styled.div.attrs(({ top, left, id }) => ({
  style: {
    left: `${left}px`,
    top: `${top}px`
  }
}))`
  position: relative;
`;
