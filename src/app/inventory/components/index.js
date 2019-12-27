import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";

import { JS_FUNCTIONS } from "../events";
import Inventory from "./component";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      const { setConfig, updateInventory, updateItem } = this.props;

      window[JS_FUNCTIONS.prefix] = {
        ...window[JS_FUNCTIONS.prefix],
        [JS_FUNCTIONS.setConfig]: setConfig,
        [JS_FUNCTIONS.updateInventory]: updateInventory,
        [JS_FUNCTIONS.updateItems]: updateItem
      };
    }
  })
)(Inventory);
