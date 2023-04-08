// src/store/reducers/index.ts
import { combineReducers } from '@reduxjs/toolkit';
import store from '..';
import retainingWallReducer from '../slices/retainingWallSlice';
import stabilityResultReducer from '../slices/stabilityResultSlice';
// Import your individual reducers here

const rootReducer = combineReducers({
  // Add your individual reducers here
  retainingWall: retainingWallReducer,
  stabilityResult: stabilityResultReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default rootReducer;
