import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './hero.css';
import Tabs from './tabs';
import Fetchdata from './Fetchdata';
import CachedIcon from '@mui/icons-material/Cached';
import { Button, TextField, IconButton } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import SearchIcon from '@mui/icons-material/Search';
import FilterIcon from '@mui/icons-material/FilterList';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  
  const handleSearch = () => {
   
    console.log('Search query:', searchQuery);
  };

  return (
    <div className="content">
      <div className="sub-container">
        <Tabs />
        <CachedIcon fontSize="medium" className="icon" id="icon3" color="primary" />
        <div className="button-container">
          <Button
            variant="contained"
            style={{ backgroundColor: '#fcfcfc', color: '#446879', font: 'bolder', borderRadius: '20px' }}
            size="large"
            startIcon={<DownloadIcon color="primary" id="downloadicon"/>}
            sx={{height:'50px',width:'150px'}}
            id='download'
          >
            Download
          </Button>
        </div>

        <div className="search-bar">
          <TextField
            style={{ marginLeft: '15px', backgroundColor: '#fcfcfc', color: '#446879', borderRadius: '15px', width: '300px'}}
            variant="outlined"
            id="textfield"
            sx={{
              "& .MuiInputLabel-root": {borderColor: '#446879'},
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "#2892d7" , borderRadius:'20px', height:'58px'},

              },
              height:"54px"
            }}
            
            placeholder="Search for Influencer"
            InputProps={{
              startAdornment: <SearchIcon />,
            }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button
            variant="outlined"
            color="primary"
            sx={{height:'50px',width:'125px'}}
            style={{ marginLeft: '10px', backgroundColor: '#fcfcfc', color: '#446879', borderRadius: '10px' }}
            onClick={handleSearch}
            id="searchbutton"
          >
            Search
          </Button>
          <IconButton color="primary" >
            <FilterIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
      <div className="sub-content">
     <Fetchdata searchQuery={searchQuery} />

      </div>
    </div>
  );
};

export default Hero;
