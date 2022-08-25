import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import coffee from './slices/coffeeSlice';

export const store = configureStore({
   reducer: {
      filter,
      cart,
      coffee,
   },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();