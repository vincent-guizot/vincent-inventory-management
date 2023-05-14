import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const User = () => {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      let users = await axios({
        method: "get",
        url: "http://localhost:3000/users",
      });

      setUsers(users.data);
      // console.log(users.data);
    } catch (err) {
      alert(err);
    }
  };

  const accountHandler = (id) => {
    let user = users.filter((user) => user.id === +id);
    const { username, email, role } = user[0];
    Swal.fire(`
      ${username} - ${email}`, 
      `Role: ${role}`, 
      "info");
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <div className="text-center w-100 p-3">
        <h3>Users Pages</h3>
      </div>
      <div className="w-100">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>User</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              const { id, username, email, image, role } = user;
              return (
                <tr key={id}>
                  <td>
                    <div className="w-100 d-flex flex-row">
                      <div className="w-25 p-1">
                        <img className="img-fluid" src={image} />
                      </div>
                      <div className="w-75 flex-column p-1">
                        <h3 className="text-primary">{username}</h3>
                        <h5>{email}</h5>
                        <div>
                          <button
                            onClick={() => accountHandler(id)}
                            className="btn btn-sm btn-primary"
                          >
                            Detail Account
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{role}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default User;
