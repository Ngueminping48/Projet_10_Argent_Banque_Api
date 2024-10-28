
// src/store.js
import { configureStore } from '@reduxjs/toolkit';
// Importez votre reducer ici
import yourReducer from './slices/yourSlice';

const store = configureStore({
  reducer: {
    // Ajoutez votre reducer ici
    yourSlice: yourReducer,
  },
});

export default store;
