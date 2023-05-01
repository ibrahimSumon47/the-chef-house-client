import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="mx-4 md-40 text-center mt-10 md:mt-40">
      <div>
        <div>
          <label className="swap swap-flip text-9xl">
            <input type="checkbox" />
            <div className="swap-on">😈</div>
            <div className="swap-off">😇</div>
          </label>
        </div>
        <h1 className="text-5xl mt-10">
          404 - Page not found
        </h1>
        <Link to = {"/"}>
          <button className="btn bg-indigo-400 text-slate-50 font-bold w-32 rounded-lg mt-10">Go home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
