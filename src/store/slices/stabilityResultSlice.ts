import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RetainingWallInterface } from './retainingWallSlice';

export interface StabilityResults {
  active_soil_pressure: number;
  base_friction_force: number;
  lateral_surcharge: number;
  lateral_water: number;
  passive_soil_pressure: number;
  stability_factor_overturning: number;
  stability_factor_sliding: number;
  weight: number;
  // Add other result properties if needed.
}

interface ResultInterface {
  plot_cache_key: string | null;
  results: StabilityResults | null; // Add this property
  base64ImageData: string | null;
}

const initialState: ResultInterface = {
  plot_cache_key: null,
  results: null,
  base64ImageData: null, // Add this property
};

const stabilityResultSlice = createSlice({
  name: 'stabilityResults',
  initialState,
  reducers: {
    updateParameters: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateStabilityResults.fulfilled, (state, action) => {
      state.plot_cache_key = action.payload.plote_cache_key;
      state.results = action.payload.stability_results;
    });
    // Add the new case for fetchRetainingWallImage
    builder.addCase(fetchRetainingWallImage.fulfilled, (state, action) => {
      state.base64ImageData = action.payload;
    });
  },
});

const fetchStabilityResults = async (parameters: RetainingWallInterface) => {
  // Make the API call with the updated parameters
  const API_END_POINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

  const response = await fetch(`${API_END_POINT}/retaining_wall/`, {
    method: 'POST',
    // mode: 'cors', // Set the request mode to 'cors'
    // cache: 'no-cache', // Set the cache mode to 'no-cache'
    // credentials: 'include', // Set credentials to 'same-origin'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(parameters),
  });

  if (!response.ok) {
    throw new Error('Failed to update stability results');
  }

  // Return the stability results from the API response
  const results = await response.json();
  return results;
};

export const updateStabilityResults = createAsyncThunk(
  'results/updateStabilityResults',
  async (parameters: RetainingWallInterface, { dispatch, getState }) => {
    const stabilityResults = await fetchStabilityResults(parameters);
    return stabilityResults;
  }
);

export const fetchRetainingWallImage = createAsyncThunk(
  'results/fetchRetainingWallImage',
  async (cacheString: string, { dispatch, getState }) => {
    const API_END_POINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

    const response = await fetch(
      `${API_END_POINT}/retaining_wall_image/${cacheString}/`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch retaining wall image');
    }
    console.log(response);

    // Return the base64 image data from the API response
    const results = await response.json();
    const base64ImageData = await results.image_data;

    return base64ImageData;
  }
);

export const { updateParameters } = stabilityResultSlice.actions;

export default stabilityResultSlice.reducer;
