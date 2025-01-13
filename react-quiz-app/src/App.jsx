
// import Button from '@mui/material/Button';
// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import TextField from '@mui/material/TextField';

// import MainLayout from './layouts/main-layout/main-layout';
// import './App.css'
import {MainLayout} from './layouts/main-layout'
import {Dashboard} from './pages/dashboard'
import {Question} from './pages/question'
import {FinalScore} from './pages/final-score'

import {Route, Routes} from 'react-router-dom'
import { Leaderboard } from './pages/leaderboard'
function App() {


  return (
    <>
    <Routes>
    <Route path="/" element={<MainLayout><Dashboard /></MainLayout>} />
        <Route path="/question" element={<MainLayout><Question /></MainLayout>} />
        <Route path="/final-score" element={<MainLayout><FinalScore /></MainLayout>} />
        <Route path="/leaderboard" element={<MainLayout><Leaderboard /></MainLayout>} />

        {/* <Route path="/leaderboard" element={<MainLayout><Leaderboard /></MainLayout>} /> */}

    </Routes>
      {/* <AppBar
        position='fixed'
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" noWrap component="div">
            Quiz App
          </Typography>
          <Typography variant="h6" noWrap component="div">
            LEADER BOARD
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', width: 768, margin: '0 auto', maxWidth: '100%' }}
      >
        <Toolbar />
        <Typography variant="h3" noWrap component="div" sx={{textAlign: 'center', marginBottom: 5}}>
            Quiz App
          </Typography>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select-label"          
            label="Category">
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
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <br /> <br />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select-label"          
            label="Type">
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <br /> <br />
        <FormControl fullWidth>          
        <TextField id="outlined-basic" label="Amount of Question" variant="outlined" />
        </FormControl>
      </Box> */}
    </>
  )
}

export default App
