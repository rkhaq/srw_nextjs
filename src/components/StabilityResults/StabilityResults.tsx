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
          {results ? (
            <span
              style={{
                color:
                  results.stability_factor_overturning < 2.0 ? 'red' : 'green',
                fontWeight: 'bold',
              }}
            >
              {results.stability_factor_overturning.toFixed(2)}{' '}
              {results.stability_factor_overturning < 2.0 ? '(NOT OK)' : '(OK)'}
            </span>
          ) : (
            'N/A'
          )}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Sliding Safety Factor:{' '}
          {results ? (
            <span
              style={{
                color: results.stability_factor_sliding < 1.5 ? 'red' : 'green',
                fontWeight: 'bold',
              }}
            >
              {results.stability_factor_sliding.toFixed(2)}{' '}
              {results.stability_factor_sliding < 1.5 ? '(NOT OK)' : '(OK)'}
            </span>
          ) : (
            'N/A'
          )}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StabilityResults;
