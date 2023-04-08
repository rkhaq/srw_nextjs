import { Box, TextField } from '@mui/material';
import { RetainingWallInterface } from 'store/slices/retainingWallSlice';

interface NumberInputProps {
  label: string;
  value: number;
  inputKey: keyof RetainingWallInterface;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    inputKey: keyof RetainingWallInterface
  ) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({
  label,
  value,
  inputKey,
  onChange,
}) => (
  <Box marginBottom={2}>
    <TextField
      label={label}
      type="number"
      value={value}
      onChange={(event) => onChange(event, inputKey)}
      variant="outlined"
      fullWidth
      InputProps={{ inputProps: { min: 0, step: 'any' } }}
    />
  </Box>
);

export default NumberInput;
