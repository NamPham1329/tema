"use client"
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';

export default function InputAdornments({ endAdornment, placeholder}) {

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder || ''}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        {endAdornment || ''}
      </IconButton>
    </Paper>
  );
}