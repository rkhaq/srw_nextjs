/* eslint-disable @next/next/no-img-element */
import { Box } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store/index';
import { fetchRetainingWallImage } from 'store/slices/stabilityResultSlice';

export const RetainingWallPlot: React.FC = () => {
  const { plot_cache_key, results, base64ImageData } = useSelector(
    (state: RootState) => state.stabilityResult
  );
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    if (plot_cache_key) {
      dispatch(fetchRetainingWallImage(plot_cache_key));
    }
  }, [plot_cache_key, dispatch]);

  return (
    <Box marginTop={4} marginBottom={4}>
      <img
        src={`data:image/png;base64,${base64ImageData}`}
        alt="Retaining Wall"
      />
    </Box>
  );
};
