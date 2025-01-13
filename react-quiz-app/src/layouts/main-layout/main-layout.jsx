// import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import './App.css'
function MainLayout({ children }) {
    return (
        <>
            <AppBar
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
                {children}
            </Box>
        </>
    )
}

export default MainLayout
