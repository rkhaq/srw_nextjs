import * as React from 'react';
import { Container, Typography } from '@mui/material';
import InputParameters from 'components/InputParameters';
import StabilityResults from 'components/StabilityResults';
import { RetainingWallPlot } from 'components/RetaningWallPlot';

const RetainingWall: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 10 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Stone Retaining Wall Stability Check
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Input Parameters
      </Typography>
      <InputParameters />
      <Typography variant="h5" component="h2" gutterBottom>
        Stability Check Results
      </Typography>
      <StabilityResults
        overturningSafetyFactor={2.0}
        slidingSafetyFactor={1.5}
      />
      <RetainingWallPlot imageUrl="https://i.imgur.com/cntX9e6.png" />
    </Container>
  );
};

export default RetainingWall;
