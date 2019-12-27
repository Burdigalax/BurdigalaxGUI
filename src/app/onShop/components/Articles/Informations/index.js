import React from "react";
import { connect } from "react-redux";
import { path } from "ramda";

import InformationComponent from "./component";
import selectArticleIdSelected from "../../../redux/reducers/navigation/articles/selectors/select-article-id-selected";
import selectArticleById from "../../../redux/reducers/entities/articles/selectors/select-article-by-id";
import selectWordingFromConfig from "../../../../redux/reducers/config/selectors/select-wording-from-config";
import selectStyleFromConfig from "../../../../redux/reducers/config/selectors/select-style-from-config";

const mapStateToProps = state => {
  const articleIdSelected = selectArticleIdSelected(state);
  const wording = selectWordingFromConfig(state);
  const { titleColor, header } = selectStyleFromConfig(state);

  const props = {
    wording,
    titleColor,
    hasBgHeader: header.backgroundColor
  };

  if (!articleIdSelected) return { ...props };

  const articleSelected = selectArticleById(state, articleIdSelected);
  return {
    ...articleSelected,
    ...props
  };
};

const InformationContainer = connect(mapStateToProps)(InformationComponent);

export default InformationContainer;
