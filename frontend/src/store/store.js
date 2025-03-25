
import { configureStore } from '@reduxjs/toolkit';
import  authReducers  from './auth.reducers';
import  projectReducers  from './project.reducers';

export const store = configureStore({
  reducer: {
    auth: authReducers,
    projects: projectReducers,
  },
});