import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer justify-around p-10 bg-purple-500 text-slate-200 mt-5 font-semibold">
      
      <div>
        <Link>
          <span className="text-4xl pt-20 text-slate-200">
            The Cafe House
          </span>
        </Link>
      </div>
      
      <div>
        <span className="footer-title">Legal</span>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
      </div>
      
      <div>
        <span className="footer-title">Newsletter</span>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
          
        </div>
        
      </div>
    </footer>
    
  );
};

export default Footer;
