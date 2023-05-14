import React from "react";

const Login = () => {
  return (
    <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
      <div className="w-25 p-3 d-flex flex-column border">
        <div className="w-100 text-center">
          <h5 className="font-primary">Login Page</h5>
          <hr/>
        </div>
        <div className="w-100">
          <form>
            <div class="mb-3">
              <label class="form-label">Email address</label>
              <input
                type="email"
                class="form-control"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Password</label>
              <input
                type="text"
                class="form-control"
              />
            </div>
            <div className="mb-3 -w-100">
              <button className="btn btn-primary w-100">LOGIN</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
