import React, { useState } from 'react'
import { NavLink,Link, useLocation } from 'react-router-dom';
import '../navBar/nav.css'

const Navbar = () => {
  // const {users} = useLocation().state 
  
    const [user,setUser] = useState(true);
    return (
      <div className="top">
       <div className='navTitle'><NavLink to={'/'}><h1 style={{color:'black'}} >Vista Blog</h1></NavLink></div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <NavLink className="link" to="/">
                HOME
              </NavLink>
            </li>
            <li className="topListItem"> <NavLink className="link" to="/blogs">
                BLOGS
              </NavLink></li>
            <li className="topListItem">CONTACT</li>
            <li className="topListItem">
              <NavLink className="link" to="/write">
                WRITE
              </NavLink>
            </li>
            {user && <li className="topListItem" onClick={()=>setUser(false)}>LOGOUT</li>}
          </ul>
        </div>
        <div className="topRight">
          {user ? (
            <NavLink className="link" to="/settings">
              <img
                className="topImg"
                src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                alt=""
              />
            </NavLink>
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <NavLink className="link" to="/login">
                  LOGIN
                </NavLink>
              </li>
              <li className="topListItem">
                <NavLink className="link" to="/register">
                  REGISTER
                </NavLink>
              </li>
            </ul>
          )}
          <i className="topSearchIcon fas fa-search"></i>
        </div>
      </div>
    );
}

export default Navbar