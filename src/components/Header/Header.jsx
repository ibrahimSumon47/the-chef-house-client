import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation()

  const [showMenu, setShowMenu] = useState(false);

  const handleLogOut = () => {
    logout()
      .then()
      .catch((err) => console.log(err));
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div>
      <nav className="flex md:justify-around font-mono font-semibold  py-10">
        <Link to="/">
          <button>
            <h2 className="text-4xl">The Chef House</h2>
          </button>
        </Link>
        <div className="flex justify-between">
          <div className="header-nav-link flex mt-3 space-x-10">
            <div className="flex gap-10 items-center">
              <div className="">
                <Link style={{ textDecoration: "none" }} className={`${location.pathname === "/" ? "bg-red-500 p-5 border rounded-lg" : ""}`} to="/">Home</Link>
                
              </div>
              <div className="">
                <Link style={{ textDecoration: "none" }} className={`${location.pathname === "/blog" ? "bg-red-500 p-5 border rounded-lg" : ""}`} to="/blog">Blog</Link>
              </div>
              <div>
                {user && (
                  <div>
                    <img
                      title={user.displayName}
                      className="rounded-xl"
                      style={{width: "30px", height: "30px"}}
                      src={user.photoURL}
                    />
                  </div>
                )}
              </div>
              <div>
                {user ? (
                  <div className="">
                    <button onClick={handleLogOut}>Logout</button>
                  </div>
                ) : (
                  <Link style={{ textDecoration: "none" }} className={`${location.pathname === "/login" ? "bg-red-500 p-5 border rounded-lg" : ""}`} to="/login">Login</Link>
                )}
                </div>
                <div>{user ? <></> : <Link style={{ textDecoration: "none" }} className={`${location.pathname === "/register" ? "bg-red-500 p-5 border rounded-lg" : ""}`} to="/register">Register</Link>}</div>
              
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
        <Link to="/" className="block py-2 px-5">
          Home
        </Link>
        <Link to="/blog" className="block py-2 px-5">
          Blog
        </Link>

        <div className="flex my-5 gap-10 px-5">
          {user && (
            <>
              <img
                title={user.displayName}
                style={{ height: "30px", width: "30px" }}
                className="rounded-xl "
                src={user.photoURL}
              />
            </>
          )}
          {user ? (
            <>
              {/* <span>{user.email}</span> */}
              <button onClick={handleLogOut}>Logout</button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
          {user ? <></> : <Link to="/register">Register</Link>}
        </div>
      </div>
    </div>
  );
};

export default Header;
