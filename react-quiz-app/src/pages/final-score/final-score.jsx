// import React from 'react'
import { Typography } from "@mui/material"
import { Button } from "@mui/material"
import { Box } from "@mui/material"
import {TextField} from "@mui/material"
function FinalScore() {
  return (
    <>
      <Typography
        variant="h3"
        noWrap
        component="h2"
        sx={{ textAlign: "left", marginBottom: 5 }}
      >
        Final Score: 0
      </Typography>
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

export default FinalScore
