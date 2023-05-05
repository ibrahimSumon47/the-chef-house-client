import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const GitHubLogin = () => {
  const { loginWithGitHub } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGitHubSignIn = () => {
    loginWithGitHub()
      .then((result) => {
        const gitHubLogged = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className="flex gap-2 mt-5 border p-1 px-4  rounded focus:outline-none focus:shadow-outline bg-slate-50 items-center pl-24"
      style={{ width: "365px" }}
    >
      <FaGithub className="mt-1 text-blue-600" />
      <button
        className="text-black mb-1 font-semibold mt-2"
        onClick={handleGitHubSignIn}
      >
        Login with GitHub{" "}
      </button>
    </div>
  );
};

export default GitHubLogin;
