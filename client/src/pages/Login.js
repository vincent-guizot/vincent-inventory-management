import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    login();
    // console.log({ email, pwd });
  };

  const login = async () => {
    try {
      let user = await axios({
        method: "post",
        url: "http://localhost:3000/users/login",
        data: {
          email,
          password: pwd,
        },
      });

      localStorage.setItem('access_token',user.data.access_token);
      // console.log(user.data);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
      <div className="w-25 p-3 d-flex flex-column border">
        <div className="w-100 text-center">
          <h5 className="font-primary">Login Page</h5>
          <hr />
        </div>
        <div className="w-100">
          <form>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                onChange={(e) => setPwd(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3 w-100">
              <button onClick={loginHandler} className="btn btn-primary w-100">
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
