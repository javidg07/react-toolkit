import React from 'react'
import { Link } from 'react-router-dom'
import userImg from '../../assets/images/user.png';
import "./Header.scss";
export default function Header() {
    return (
      <div className="header">
          <Link to="/"><div className="logo">Movie App</div> </Link>
          <div className="user-image">
              <img src={userImg} alt="user" />
         </div>
      </div>
    )
}
