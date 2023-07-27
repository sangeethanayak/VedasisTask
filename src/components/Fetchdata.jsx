import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: '#2892d7',
  color: theme.palette.common.white,
  fontWeight: 'bold',
  fontSize: '20px'
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: '20px', 
  overflow: 'hidden',
  backgroundColor: '#f2f4ff',
  fontSize: '20px',
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
    <StyledTableContainer component={Paper} sx={{ width: '97%', maxHeight: 550, overflow: 'auto' }}>
      <Table stickyHeader sx={{ tableLayout: 'fixed'}}>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell >Name</StyledTableCell>
            <StyledTableCell >Username</StyledTableCell>
            <StyledTableCell >Email</StyledTableCell>
            <StyledTableCell >Website</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
        {searchQuery.trim() === '' || filteredData.length === 0 ? (
            // If the search query is empty or no matching items, display all data
            data.map((item) => (
              <StyledTableRow key={item.id}>
                <TableCell fontSize="16px">{item.name}</TableCell>
                <TableCell fontSize="16px">{item.username}</TableCell>
                <TableCell fontSize="16px">{item.email}</TableCell>
                <TableCell fontSize="16px">{item.website}</TableCell>
              </StyledTableRow>
            ))
          ) : (
            // If there are matching items, display the filtered data
            filteredData.map((item) => (
              <StyledTableRow key={item.id}>
                <TableCell fontSize="16px">{item.name}</TableCell>
                <TableCell fontSize="16px">{item.username}</TableCell>
                <TableCell fontSize="16px">{item.email}</TableCell>
                <TableCell fontSize="16px">{item.website}</TableCell>
              </StyledTableRow>
            ))
          )}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default Fetchdata;
