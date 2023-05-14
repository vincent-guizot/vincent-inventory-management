import React from "react";
import { Outlet } from "react-router-dom";

import Item from "./Item";
import CreateItem from "./CreateItem";

const index = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default index;
