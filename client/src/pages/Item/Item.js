import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import { Link } from "react-router-dom";
import { MdArticle, MdDelete } from "react-icons/md";

const Item = () => {
  const [items, setItems] = useState([]);

  const getAllItems = async () => {
    try {
      let items = await axios({
        method: "get",
        url: "http://localhost:3000/items",
      });

      setItems(items.data);
      // console.log(users.data);
    } catch (err) {
      alert(err);
    }
  };

  const descriptionHandler = (id) => {
    // let user = users.filter((user) => user.id === +id);
    // const { username, email, role } = user[0];
    // Swal.fire(
    //   `
    //   ${username} - ${email}`,
    //   `Role: ${role}`,
    //   "info"
    // );
  };

  const deleteHandler = async id => {
    try {
      Swal.fire({
        title: 'Do you want to delete?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios({
            method: "delete",
            url: `http://localhost:3000/items/delete/${id}`
          })
          getAllItems()
          Swal.fire(
            'Deleted!',
            'Your item has been deleted.',
            'success'
          )
        }
      })

    }  catch(err){
      alert(err)
    }
  }

  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <>
      <div className="text-center w-100 p-3 d-flex flex-row justify-content-between">
        <h3>Item Pages</h3>
        <Link className="btn btn-sm btn-primary" to="create">
          + Create User
        </Link>
      </div>
      <div className="w-100">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Item</th>
              <th>Inputted By</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              const { id, name, category, image, price, stock, User } = item;
              const { username, email } = User;
              return (
                <tr key={id}>
                  <td>
                    <div className="w-100 d-flex flex-row">
                      <div className="w-25 p-1">
                        <img className="img-fluid" src={image} />
                      </div>
                      <div className="w-50 flex-column p-1">
                        <h5 className="text-bold">{name}</h5>
                        <h3 className="text-primary text-bold">Rp. {price}</h3>
                        <p className="badge bg-primary">{category}</p>
                        <p>Stocks: {stock} pcs</p>
                      </div>
                      <div className="w-25">
                        <button
                          onClick={() => descriptionHandler(id)}
                          className="btn btn-sm btn-info"
                        >
                          <MdArticle className="me-2" />
                          Description
                        </button>

                        <button
                        onClick={() => deleteHandler(id)}
                        className="btn btn-m btn-danger">

                          <MdDelete className="me-2"/> Delete
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    {username} - ${email}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Item;
