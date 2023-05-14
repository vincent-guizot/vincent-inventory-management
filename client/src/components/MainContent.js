import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import User from "../pages/User/User";

// Pages Item
import ItemIndex from "../pages/Item/index";
import Item from "../pages/Item/Item";
import CreateItem from "../pages/Item/CreateItem";

const MainContent = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="users" element={<User />}>
          {/* <Route path=""></Route>
          <Route path="create"></Route> */}
        </Route>
        <Route path="items" element={<ItemIndex />}>
          <Route path="" element={<Item />}></Route>
          <Route path="create" element={<CreateItem />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default MainContent;
