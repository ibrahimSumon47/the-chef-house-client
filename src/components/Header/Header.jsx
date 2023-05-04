import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import img from "../../assets/react.svg";

const Header = ({user}) => {
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
            <button>
              <Link>
                <img src={img} alt="" />
              </Link>
            </button>
            {user && (
              <img
              title={user.displayName}
              style = {{height: "35ppx", width: "35px"}}
              src={user.photoURL} />
            )}
            <Link to="/register">Register</Link>
            {
              user ? (
                <>
                <span>{user.email}</span>
                <button onClick={handleLogOut}>Sign Out</button>
                </>
              ): (
                <Link to="/login">Login</Link>
              )
            }
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
        <div className="flex mt-5">
          <button>Login</button>
          <button>Sign Up</button>
          <button>
            <Link>Profile</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
