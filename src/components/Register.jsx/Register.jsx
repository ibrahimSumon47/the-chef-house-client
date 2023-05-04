import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className=" hero" style={{ backgroundColor: "#668a95" }}>
        <div className="flex-col lg:flex-row-reverse my-5">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold my-5">Please Register</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="input input-bordered "
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Provide your photo url"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p>
                Already Have an Account? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
