import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface StabilityResultsProps {
  overturningSafetyFactor: number;
  slidingSafetyFactor: number;
}

const StabilityResults: React.FC<StabilityResultsProps> = ({
  overturningSafetyFactor,
  slidingSafetyFactor,
}) => {
  return (
    <Card sx={{ mt: 1 }}>
      <CardContent>
        <Typography variant="body1" gutterBottom>
          Overturning Safety Factor: {overturningSafetyFactor.toFixed(2)}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Sliding Safety Factor: {slidingSafetyFactor.toFixed(2)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StabilityResults;
