import React from 'react';
import './verticalnavbar.css';
import logo from './logo.png';
import { Button } from '@mui/material';
import TagIcon from '@mui/icons-material/Tag';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SettingsIcon from '@mui/icons-material/Settings';

const VerticalNavbar = () => {
  return (
    <div className="vertical-navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="icons">
        <Button variant='contained'>
       <AdminPanelSettingsIcon fontSize="large" className='icon' id='icon1' />
       </Button>
        <TagIcon fontSize="large" className="icon" id="icon2" />
      </div>
      <SettingsIcon fontSize="large" className="settings-icon" id='settingsicon' />
    </div>
  );
};

export default VerticalNavbar;