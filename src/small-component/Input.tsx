import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';

export default function InputAdornments({ endAdornment, label, placeholder}) {

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment"
            endAdornment={<InputAdornment position="end">{endAdornment}</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            placeholder={placeholder ?? ''}
          />
          <FormHelperText id="outlined-weight-helper-text">{label || ''}</FormHelperText>
        </FormControl>
      </div>
    </Box>
  );
}