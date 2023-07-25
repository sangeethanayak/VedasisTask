import React from 'react';
import './verticalnavbar.css';
import logo from './logo.png';
import { FaHashtag, FaCog } from 'react-icons/fa';
import { CgHashtag } from 'react-icons/cg'
import { MdAdminPanelSettings } from 'react-icons/md';


const VerticalNavbar = () => {
  return (
    <div className="vertical-navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="icons">
        <MdAdminPanelSettings className="icon" id="icon1"/>
        <CgHashtag className="icon" id="icon2" />
      </div>
      <FaCog className="settings-icon" />
    </div>
  );
};

export default VerticalNavbar;