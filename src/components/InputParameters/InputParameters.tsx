// src/components/InputParameters/InputParameters.tsx
import * as React from 'react';
import { Box, TextField } from '@mui/material';

const NumberInput = ({ label }: { label: string }) => (
  <Box marginBottom={2}>
    <TextField
      label={label}
      type="number"
      variant="outlined"
      fullWidth
      InputProps={{ inputProps: { min: 0, step: 'any' } }}
    />
  </Box>
);

const InputParameters = () => {
  const inputLabels = [
    'Height (m)',
    'Top Breadth (m)',
    'Base Breadth (m)',
    'Coefficient of active earth pressure (Ka)',
    'Gamma Soil (kN/m3)',
    'Gamma Stone (kN/m3)',
    'Surcharge (kN/m2)',
    'Water Height (m)',
    'Height of passive soil (m)',
    'Coefficient of passive earth pressure (Kp)',
  ];

  return (
    <>
      {inputLabels.map((label) => (
        <NumberInput key={label} label={label} />
      ))}
    </>
  );
};

export default InputParameters;
