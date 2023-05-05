import React, { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import GoogleLogin from "./GoogleLogin";
import GitHubLogin from "./GitHubLogin";

const EmailAndPassword = () => {
  const { loginUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  

  return (
    <div className="pb-10 " style={{ backgroundColor: "#32363b" }}>
      <h1 className="text-3xl text-center py-5 font-bold">Please Login</h1>
      <form
        onSubmit={handleLogin}
        className="max-w-md mx-auto border rounded-lg p-10"
        style={{ backgroundColor: "#1d344d" }}
      >
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Login
          </button>
        </div>
        <div>
          <button>
            <GoogleLogin />
          </button>
          <button>
            <GitHubLogin/>
          </button>
        </div>
        <p className="mt-5">
          Already Have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default EmailAndPassword;
