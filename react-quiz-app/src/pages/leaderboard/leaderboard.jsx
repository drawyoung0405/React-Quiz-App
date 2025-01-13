// import React from 'react'
import { Typography } from "@mui/material"
import { Button } from "@mui/material"
import { Box } from "@mui/material"
import {TextField} from "@mui/material"
import {IconButton} from "@mui/material"
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function createData(firstName, lastName, email, score) {
    return { firstName, lastName, email, score };
  }
  const rows = [
    {firstName: 'hoa', lastName:'vo', email:'hoa@gmail.com', score: 10},
    {firstName: 'hoa', lastName:'vo', email:'hoa@gmail.com', score: 10}

  ];
function Leaderboard() {
  return (
    <>
      <Typography
        variant="h3"
        noWrap
        component="h2"
        sx={{ textAlign: "between", marginBottom: 5 }}
      >
        Leaderboard
      </Typography >
      <Box sx={{textAlign:"right"}}>
      <IconButton color="secondary" aria-label="Export to CSV" sx={{fontSize: 'small'}}>
  Export to CSV<PictureAsPdfIcon />
</IconButton>
      </Box>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="left">Last Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             
              <TableCell align="left">{row.firstName}</TableCell>
              <TableCell align="left">{row.lastName}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      <TextField id="standard-basic" 
      label="First Name" 
      variant="standard" 
      fullWidth
      sx={{
        marginBottom: 2
      }}
      />
      <TextField id="standard-basic" 
      label="Last Name" 
      variant="standard" 
      fullWidth
      sx={{
        marginBottom: 2
      }}
      />
      <TextField id="standard-basic" 
      label="Email Address" 
      variant="standard" 
      fullWidth
      sx={{
        marginBottom: 2
      }}
      />
      
      <Box sx={{ textAlign: "right" }}>
        <Button
        size="small"
          variant="contained"
        >
          Submit
        </Button>
      </Box>
    </>
  )
}

export default Leaderboard
