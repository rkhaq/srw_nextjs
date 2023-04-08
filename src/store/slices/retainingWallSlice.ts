// src/store/slices/retainingWallSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface RetainingWallInterface {
  height: number;
  top_breadth: number;
  base_breadth: number;
  Ka: number;
  gamma_soil: number;
  gamma_stone: number;
  surcharge: number;
  water_table: number;
  passive_soil_height: number;
  Kp: number;
}

const initialState: RetainingWallInterface = {
  height: 2.0,
  top_breadth: 0.3,
  base_breadth: 0.7,
  Ka: 0.3,
  gamma_soil: 20.0,
  gamma_stone: 22.0,
  surcharge: 10.0,
  water_table: 0.8,
  passive_soil_height: 0.6,
  Kp: 2.0,
};

const retainingWallSlice = createSlice({
  name: 'retainingWall',
  initialState,
  reducers: {
    updateParameters: (
      state,
      action: PayloadAction<{
        inputKey: keyof RetainingWallInterface;
        value: number;
      }>
    ) => {
      const { inputKey, value } = action.payload;
      state[inputKey] = value;
    },
  },
});

export const { updateParameters } = retainingWallSlice.actions;

export default retainingWallSlice.reducer;
