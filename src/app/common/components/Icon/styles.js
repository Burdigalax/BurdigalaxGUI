import React from "react";
import styled from "styled-components";
import getFilter from "./helpers/filter";

export const StyledImg = styled.img.attrs(props => ({
  style: {
    width: props.size ? `${props.size}px` : "",
    //height: props.size ? `${props.size}px` : "",
    filter: getFilter(props.color)
  }
}))``;
