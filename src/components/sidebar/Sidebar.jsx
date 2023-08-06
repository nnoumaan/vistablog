import React from "react";
import { Link } from "react-router-dom";
import "../sidebar/sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://avatars.githubusercontent.com/u/115945663?v=4"
          alt=""
        />
        <p style={{ textAlign: "center" }}>
          <b>Noumaan Ansari</b> <br />
          TDP Vista
          <br /> Inter Project
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=category1">
              Category 1
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=category2">
              Category 2
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=category3">
              Category 3
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=category4">
              Category 4
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=category5">
              Category 5
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=category6">
              Category 6
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <a href="https://www.facebook.com/">
            <i className="sidebarIcon fab fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com/">
            <i className="sidebarIcon fab fa-instagram-square"></i>
          </a>
          <a href="https://www.pinterest.com/">
            <i className="sidebarIcon fab fa-pinterest-square"></i>
          </a>
          <a href="https://www.twitter.com/">
            <i className="sidebarIcon fab fa-twitter-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
