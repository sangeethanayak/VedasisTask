import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './hero.css';
import Tabs from './tabs';
import Fetchdata from './Fetchdata';
import CachedIcon from '@mui/icons-material/Cached';
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
const Hero = () => {
  return(

    <div className = "content">
      
      <div className ="sub-container">
      <Tabs />
      <CachedIcon fontSize="medium" className='icon' id='icon3' />
       

      </div>
        <div className="sub-content">
        <Fetchdata />
            
      </div>
      

    </div>
  );
};
export default Hero;
