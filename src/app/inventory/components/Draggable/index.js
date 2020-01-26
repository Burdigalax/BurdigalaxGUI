import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { withHandlers } from "recompose";
import { JS_FUNCTIONS } from "../../events";

const DraggableComponent = ({ children, onDragEnd }) => (
  <DragDropContext onDragEnd={onDragEnd}>{children}</DragDropContext>
);

export default withHandlers({
  onDragEnd: ({}) => (event = {}) => {
    const { destination, source } = event;
    if (!source) return;

    const destinationInventoryId =
      destination && parseInt(destination.droppableId);
    const idItem = source.index;
    const originInventoryId = parseInt(source.droppableId);

    if (destinationInventoryId === originInventoryId) return;

    window[JS_FUNCTIONS.prefix][JS_FUNCTIONS.transferItem]({
      originInventoryId,
      destinationInventoryId,
      idItem
    });
  }
})(DraggableComponent);
