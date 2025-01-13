// import React from 'react'
import { Typography } from "@mui/material"
import { Button } from "@mui/material"
import { Box } from "@mui/material"

function Question() {
  return (
    <>
      <Typography
        variant="h3"
        noWrap
        component="h2"
        sx={{ textAlign: "center", marginBottom: 5 }}
      >
        Question
      </Typography>
      <Typography noWrap component="div" sx={{ marginBottom: 5 }}>
        How?
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <Button
          fullWidth
          variant="contained"
        >
          Answer
        </Button>
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <Button
          fullWidth
          variant="contained"
        >
          Answer
        </Button>
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <Button
          fullWidth
          variant="contained"
        >
          Answer
        </Button>
      </Box>
      <Box sx={{ marginTop: 2, display: "flex", justifyContent: "space-between" }}>
        <Typography noWrap component="div" sx={{}}>
          Score: 2/2
        </Typography>
        <Typography noWrap component="div" sx={{}}>
          Timer: 2/2
        </Typography>
      </Box>
    </>
  )
}

export default Question
