import React from "react";
import { connect } from "react-redux";
import { map } from "ramda";
import { compose, withHandlers } from "recompose";

import { Wrapper, Filter } from "./styles";
import Icon from "../../../common/components/Icon";
import getCategoriesFromInventory from "../../redux/reducers/entities/inventories/getters/get-categories-from-inventory";
import selectSelectedCategoryId from "../../redux/reducers/sceneState/selectors/select-selected-category-id";
import { setCategorySelectedId } from "../../redux/actions/categories";

const FiltersComponent = ({ categories = [], selectedCategoryId, onClick }) => {
  const renderCategory = ({ iconUrl, id }) => (
    <Filter key={`category-${id}`} onClick={() => onClick(id)}>
      <Icon
        size={20}
        color={selectedCategoryId === id ? "#faa82a" : "#949da3"}
        url={iconUrl}
      />
    </Filter>
  );

  return <Wrapper>{map(renderCategory, categories)}</Wrapper>;
};

const mapStateToProps = state => {
  const categories = getCategoriesFromInventory(state);
  const selectedCategoryId = selectSelectedCategoryId(state);
  return {
    categories,
    selectedCategoryId
  };
};

const mapDispatchToProps = {
  setCategorySelectedId
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onClick: ({ setCategorySelectedId, selectedCategoryId }) => id => {
      if (selectedCategoryId !== id) setCategorySelectedId(id);
    }
  })
)(FiltersComponent);
