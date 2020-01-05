import React from "react";
import { Draggable } from "react-beautiful-dnd";

import {
  HealthBar,
  Header,
  EquippedTag,
  Wrapper,
  Quantity,
  StyledIcon,
  Weight
} from "./styles";
import Icon from "../../../common/components/Icon";

function getStyle(style, snapshot) {
  if (!snapshot.isDragging) return {};
  if (!snapshot.isDropAnimating) {
    return style;
  }

  return {
    ...style,
    // cannot be 0, but make it super tiny
    transitionDuration: `0.001s`
  };
}

export default ({
  iconUrl,
  isSelected,
  health,
  isEquipped,
  isEquipable = false,
  quantity = 0,
  onClickItem,
  onMouseDownItem,
  weight,
  idItem,
  idInventory
}) => (
  <Draggable
    draggableId={`draggable-item-id${idItem}-inventory-id${idInventory}`}
    key={`draggable-${idItem}-${idInventory}`}
    index={idItem}
  >
    {({ innerRef, draggableProps, dragHandleProps }, snapshot) => (
      <Wrapper
        onMouseDown={onMouseDownItem}
        ref={innerRef}
        isSelected={isSelected}
        onClick={onClickItem}
        {...dragHandleProps}
        {...draggableProps}
        style={getStyle(draggableProps.style, snapshot)}
      >
        {isEquipable === true && <EquippedTag isEquipped={isEquipped} />}
        <Header>
          <Weight>
            <Icon
              color={"#959da3"}
              size={11}
              url={
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='10' viewBox='0 0 11 10'%3E%3Ctitle%3Eicon-weight%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cpath d='M10.531 9.625l-2.155-6.244c-.042-.111-.139-.181-.264-.181h-1.669c.403-.334.667-.862.654-1.432-.028-.946-.793-1.724-1.738-1.766-1.029-.042-1.877.779-1.877 1.808 0 .556.25 1.057.654 1.391h-1.6829999999999998c-.111 0-.222.07-.264.181l-2.169 6.244c-.07.181.07.375.264.375h9.985c.195-.014.334-.195.264-.375zm-5.257-8.58c.417 0 .765.334.765.765s-.348.751-.765.751c-.417 0-.765-.334-.765-.765s.348-.751.765-.751z' fill='%23000' fill-rule='nonzero'/%3E%3C/svg%3E"
              }
            />
            {weight}
          </Weight>
          <Quantity value={quantity}>{quantity}</Quantity>
        </Header>
        <StyledIcon url={iconUrl} size={40} />
        {health >= 0 && <HealthBar value={health} />}
      </Wrapper>
    )}
  </Draggable>
);
