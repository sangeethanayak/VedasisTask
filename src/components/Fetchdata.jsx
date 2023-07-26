import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: '#277BC0',
  color: theme.palette.common.white,
  fontWeight: 'bold',
  fontSize: '18px'
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: '20px', 
  overflow: 'hidden',
  backgroundColor: '#FFFFFF'
}));

const Fetchdata = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <StyledTableContainer component={Paper} sx={{ width: '220%', maxHeight: 550, overflow: 'auto' }}>
      <Table stickyHeader sx={{ width: '100%' }}>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell fontSize="20px">Name</StyledTableCell>
            <StyledTableCell fontSize="20px">Username</StyledTableCell>
            <StyledTableCell fontSize="20px">Email</StyledTableCell>
            <StyledTableCell fontSize="20px">Website</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <StyledTableRow key={item.id}>
              <TableCell fontSize="16px">{item.name}</TableCell>
              <TableCell fontSize="16px">{item.username}</TableCell>
              <TableCell fontSize="16px">{item.email}</TableCell>
              <TableCell fontSize="16px">{item.website}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default Fetchdata;
