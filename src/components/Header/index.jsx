import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import UserForm from './UserForm';
import './Header.css';
import Navbar from './Navbar';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeUserForm, setActiveUserForm] = useState(false);
  window.onscroll = () => {
    setActiveUserForm(false);
    setActiveMenu(false);
  };
  const handleMenuButton = () => {
    setActiveMenu(!activeMenu);
    setActiveUserForm(false);
  };
  const handleUserFormButton = () => {
    setActiveUserForm(!activeUserForm);
    setActiveMenu(false);
  };
  return (
    <header className="header">
      <a href="/" className="logo">
        <div className="box">
          <img alt="" src="image/flogo.png" />
        </div>
      </a>
      <Navbar active={activeMenu} />
      <div className="icons">
        <button type="button" id="menu-btn" onClick={handleMenuButton}>
          <FontAwesomeIcon className="fa-icon" icon={faBars} />
        </button>
        <button type="button" id="user-btn" onClick={handleUserFormButton}>
          <FontAwesomeIcon className="fa-icon" icon={faUser} />
        </button>
      </div>
      <UserForm active={activeUserForm} />
    </header>
  );
}
