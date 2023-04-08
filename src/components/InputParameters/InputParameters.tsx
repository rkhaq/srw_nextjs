// src/components/InputParameters/InputParameters.tsx
import * as React from 'react';
import debounce from 'lodash/debounce';
import { RootState } from '../../store/reducers';
import { useSelector, useDispatch } from 'react-redux';

import { Box, TextField } from '@mui/material';
import { RetainingWallInterface } from 'store/slices/retainingWallSlice';
import NumberInput from './NumberInput';
import { updateStabilityResults } from 'store/slices/stabilityResultSlice';
import { AppDispatch } from 'store/index';
import { updateParameters } from 'store/slices/retainingWallSlice';

const InputParameters: React.FC = () => {
  const wallState = useSelector((state: RootState) => state.retainingWall);

  const dispatch = useDispatch<AppDispatch>();

  const callApiAndUpdateResults = debounce(
    (updatedParameters: RetainingWallInterface) => {
      dispatch(updateStabilityResults(updatedParameters));
    },
    300
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    inputKey: keyof RetainingWallInterface
  ) => {
    const { value } = event.target;
    dispatch(updateParameters({ inputKey, value: parseFloat(value) }));
    callApiAndUpdateResults(wallState);
    console.log(wallState);
  };

  const inputLabels = [
    { label: 'Height (m)', key: 'height' },
    { label: 'Top Breadth (m)', key: 'top_breadth' },
    { label: 'Base Breadth (m)', key: 'base_breadth' },
    { label: 'Coefficient of active earth pressure (Ka)', key: 'Ka' },
    { label: 'Gamma Soil (kN/m3)', key: 'gamma_soil' },
    { label: 'Gamma Stone (kN/m3)', key: 'gamma_stone' },
    { label: 'Surcharge (kN/m2)', key: 'surcharge' },
    { label: 'Water Height (m)', key: 'water_table' },
    { label: 'Height of passive soil (m)', key: 'passive_soil_height' },
    { label: 'Coefficient of passive earth pressure (Kp)', key: 'Kp' },
  ];

  return (
    <>
      {inputLabels.map(({ label, key }) => {
        return (
          <NumberInput
            key={key}
            inputKey={key as keyof RetainingWallInterface}
            label={label}
            value={wallState[key as keyof RetainingWallInterface]}
            onChange={handleChange}
          />
        );
      })}
    </>
  );
};

export default InputParameters;
