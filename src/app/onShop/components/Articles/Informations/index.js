import React from "react";
import { connect } from "react-redux";

import InformationComponent from "./component";
import selectArticleIdSelected from "../../../redux/reducers/navigation/articles/selectors/select-article-id-selected";
import selectArticleById from "../../../redux/reducers/entities/articles/selectors/select-article-by-id";
import selectWordingFromConfig from "../../../redux/reducers/config/selectors/select-wording-from-config";
import selectStyleFromConfig from "../../../redux/reducers/config/selectors/select-style-from-config";

const mapStateToProps = state => {
  const articleIdSelected = selectArticleIdSelected(state);
  const wording = selectWordingFromConfig(state);
  const { titleColor } = selectStyleFromConfig(state);
  if (!articleIdSelected) return { wording, titleColor };

  const articleSelected = selectArticleById(state, articleIdSelected);
  return {
    ...articleSelected,
    wording: wording,
    titleColor
  };
};

const InformationContainer = connect(mapStateToProps)(InformationComponent);

export default InformationContainer;
