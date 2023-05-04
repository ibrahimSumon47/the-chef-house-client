import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import img from "../../assets/react.svg";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Header = () => {
  const {user, logout} = useContext(AuthContext)

  const [showMenu, setShowMenu] = useState(false);


  const handleLogOut = () => {
    logout()
    .then()
    .catch((err) => console.log(err))
  }

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div>
      <nav className="flex md:justify-around font-mono font-semibold pt-5 p-5">
        <Link to="/">
          <button>
            <h2 className="text-4xl">The Chef House</h2>
          </button>
        </Link>
        <div className="flex">
          <div className="header-nav-link flex mt-3 space-x-10">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <div className="flex">
              {user && <img 
              title={user.displayName}
              src={user.photoURL}
              />
              }
              {user ? (
                <button onClick={handleLogOut}> Logout</button>
              ): (
                <Link to="/login">
                  <button>Login</button>
                </Link>
              )}
            </div>
          </div>
          <button
            className="hamburger-btn"
            onClick={handleMenuClick}
            aria-label="Toggle Menu"
          >
            <span className="hamburger-icon" />
          </button>
        </div>
      </nav>
      <div
        className={`mobile-menu md:hidden ${
          showMenu ? "show-mobile-menu" : ""
        }`}
      >
        <Link className="block py-2">Home</Link>
        <Link className="block py-2">About</Link>
        <div className="flex my-5 gap-10">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
