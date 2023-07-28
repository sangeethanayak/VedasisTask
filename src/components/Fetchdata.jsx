import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: '#2892d7',
  color: theme.palette.common.white,
  
  fontWeight: 'bold',
  fontSize: '18px',
  whiteSpace: 'pre-wrap', 
  wordWrap: 'break-word', 
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
    
  },
}));


const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: '20px', 
  overflow: 'hidden',
  backgroundColor: '#faffff',
  fontSize: '20px',
  maxHeight:'85vh',
}));

const Fetchdata = ({ searchQuery }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.website.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <StyledTableContainer component={Paper} sx={{ width: '97%', height:'450px', overflow: 'auto' }}>
      <Table stickyHeader sx={{ tableLayout: 'fixed' }}>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Username</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Website</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {searchQuery.trim() === '' || filteredData.length === 0 ? (
            data.map((item) => (
              <StyledTableRow key={item.id}>
                <TableCell sx={{ height: '50px', fontSize: "14px", fontWeight: 'bold', color: '#446879' }}>{item.name}</TableCell>
                <TableCell sx={{ height: '50px', fontSize: "14px", fontWeight: 'bold', color: '#446879' }}>{item.username}</TableCell>
                <TableCell sx={{ height: '50px', fontSize: "14px", fontWeight: 'bold', color: '#446879' }}>{item.email}</TableCell>
                <TableCell sx={{ height: '50px', fontSize: "14px", fontWeight: 'bold', color: '#446879' }}>{item.website}</TableCell>
              </StyledTableRow>
            ))
          ) : (
            filteredData.map((item) => (
              <StyledTableRow key={item.id}>
                <TableCell sx={{ height: '50px', fontSize: "14px", fontWeight: 'bold', color: '#446879' }}>{item.name}</TableCell>
                <TableCell sx={{ height: '50px', fontSize: "14px", fontWeight: 'bold', color: '#446879' }}>{item.username}</TableCell>
                <TableCell sx={{ height: '50px', fontSize: "14px", fontWeight: 'bold', color: '#446879' }}>{item.email}</TableCell>
                <TableCell sx={{ height: '50px', fontSize: "14px", fontWeight: 'bold', color: '#446879' }}>{item.website}</TableCell>
              </StyledTableRow>
            ))
          )}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default Fetchdata;