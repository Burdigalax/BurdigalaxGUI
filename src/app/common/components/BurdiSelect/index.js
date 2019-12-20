import React from "react";

import { Select } from "./styles";

const BurdiSelect = ({ onChange, className, children }) => (
  <Select className={className} onChange={onChange}>
    {children}
  </Select>
);

export default BurdiSelect;
