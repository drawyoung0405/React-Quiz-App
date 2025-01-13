// import React from 'react'
import { Typography } from "@mui/material"
import { FormControl } from "@mui/material"
import { InputLabel } from "@mui/material"
import { Select } from "@mui/material"
import { MenuItem } from "@mui/material"
import { TextField } from "@mui/material"
import { Button } from "@mui/material"
import { Box } from "@mui/material"
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const navigate = useNavigate();
  function navigateToQuestion() {
    navigate("/question");
  }
  return (
    <>
      <Typography variant="h3" noWrap component="div" sx={{ textAlign: 'center', marginBottom: 5 }}>
        Quiz App
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select-label"
          label="Category"
          size="">
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <br /> <br />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select-label"
          label="Difficulty">
          <MenuItem value="easy">Easy</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="hard">Hard</MenuItem>
        </Select>
      </FormControl>
      <br /> <br />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select-label"
          label="Type">
          <MenuItem value="multiple">Multiple choice</MenuItem>
          <MenuItem value="boolean">True/False</MenuItem>
        </Select>
      </FormControl>
      <br /> <br />
      <FormControl fullWidth>
        <TextField id="outlined-basic" label="Amount of Question" variant="outlined" />
      </FormControl>
      <Box sx={{ textAlign: 'center', marginTop: 3 }}>
        <Button variant="contained" onClick={navigateToQuestion}>Get Started</Button>
      </Box>
    </>
  )
}

export default Dashboard
