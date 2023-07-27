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

  // Function to handle the search button click
  const handleSearch = () => {
    // Perform search action using the searchQuery state
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
            startIcon={<DownloadIcon color="primary" />}
            id="button1"
          >
            Download
          </Button>
        </div>

        <div className="search-bar">
          <TextField
            style={{ marginLeft: '300px', backgroundColor: '#fcfcfc', color: '#446879', borderRadius: '20px', width: '400px' }}
            variant="outlined"
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
            style={{ marginLeft: '30px', backgroundColor: '#fcfcfc', color: '#446879', borderRadius: '10px', marginTop: '10px' }}
            onClick={handleSearch}
          >
            Search
          </Button>
          <IconButton color="primary" style={{ marginLeft: '20px' }}>
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
