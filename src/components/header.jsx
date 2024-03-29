import React from 'react';
import './header.css';
import profile from './profile.jpg';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Header = () => {
  return (
    <div className="header">
      <div className="profile-info">
        
      <img
        className="profile-photo"
        src={profile}
        alt="User Profile"
      />
      <div className='profile-details'>
      <span className="user-name">John Doe</span>
    
    <span class="brand">Brand</span>
    </div>
    <ExpandMoreIcon />
    </div>
    </div>
  );
};

export default Header;