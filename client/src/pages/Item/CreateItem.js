import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";

const CreateItem = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [image, setImage] = useState("");

  const navigate = useNavigate();
  const createItem = async () => {
    try {
      const access_token = localStorage.getItem("access_token");
      let result = await axios({
        method: "POST",
        url: "http://localhost:3000/items/create",
        data: {
          name,
          category,
          price,
          stock,
          image,
        },
        headers: {
          access_token,
        },
      });

      if (result) {
        Swal.fire(
          "Item created",
          "Item has been added to item list",
          "success"
        );
      }
    } catch (err) {
      Swal.fire("Error", "Failed to create item", "error");
    }
  };
  const submitHandler = (e) => {
    //
    e.preventDefault();
    createItem();
    navigate("/items");
  };
  return (
    <div className="row">
      <div className="col-6 mx-auto">
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Item name ..."
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Category</label>
            <input
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Item category ..."
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              onChange={(e) => setPrice(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Input from 0 to max ..."
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Stock</label>
            <input
              onChange={(e) => setStock(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Input from 0 to max ..."
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image URL</label>
            <input
              onChange={(e) => setImage(e.target.value)}
              type="text"
              className="form-control"
              placeholder="..."
            />
            <small className="form-text">Must be an image url.</small>
          </div>
          <div className="mb-3">
            <button onClick={submitHandler} className="btn btn-primary w-100">
              Submit User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateItem;
