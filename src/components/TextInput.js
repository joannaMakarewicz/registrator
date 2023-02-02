import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const TextInput = () => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" variant="standard" />
    </Box>
  )
}

export default TextInput;
