import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCoffees = createAsyncThunk('coffee/fetchCoffeesStatus', async (params) => {
   const { order, sortBy, category, brand, search, currentPage } = params;
   const { data } = await axios.get(`https://62dc35ac57ac3c3f3c583299.mockapi.io/items?page=${currentPage}&limit=8&${category}${brand}&sortBy=${sortBy}&order=${order}${search}`);
   return data;
});

const initialState = {
   items: [],
   status: 'loading', // loading, success, error
};

export const coffeeSlice = createSlice({
   name: 'coffee',
   initialState,
   reducers: {
      setItems(state, action) {
         state.items = action.payload;
      },
   },
   extraReducers: {
      [fetchCoffees.pending]: (state) => {
         state.status = 'loading';
         state.items = [];
      },
      [fetchCoffees.fulfilled]: (state, action) => {
         state.items = action.payload;
         state.status = 'success';
      },
      [fetchCoffees.rejected]: (state) => {
         state.status = 'error';
         state.items = [];
      },
   },
});

export const { setItems } = coffeeSlice.actions;

export default coffeeSlice.reducer;