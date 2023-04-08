import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';

const StabilityResults: React.FC = () => {
  const { plot_cache_key, results } = useSelector(
    (state: RootState) => state.stabilityResult
  );
  return (
    <Card sx={{ mt: 1 }}>
      <CardContent>
        <Typography variant="body1" gutterBottom>
          Overturning Safety Factor:{' '}
          {results ? results.stability_factor_overturning : 'N/A'}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Sliding Safety Factor:{' '}
          {results ? results.stability_factor_sliding : 'N/A'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StabilityResults;
