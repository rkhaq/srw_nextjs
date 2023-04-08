import React, { ReactElement } from 'react';
import { Button } from '@mui/material';

const Home: React.FC = (): ReactElement => {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <Button variant="contained" color="primary">
        Click me!
      </Button>
    </div>
  );
};

export default Home;
