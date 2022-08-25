import axios from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

type Coffee = {
   id: string;
   title: string;
   price: number;
   imageUrl: string;
   alt: string;
   weights: number[];
   rating: number;
}

export enum Status {
   LOADING = 'loading',
   SUCCESS = 'success',
   ERROR = 'error',
}

interface CoffeeSliceState {
   items: Coffee[];
   status: Status;
}

export type SearchCoffeeParams = {
   order: string;
   sortBy: string;
   category: string;
   brand: string;
   search: string;
   currentPage: string;
}

export const fetchCoffees = createAsyncThunk('coffee/fetchCoffeesStatus', async (params: SearchCoffeeParams) => {
   const { order, sortBy, category, brand, search, currentPage } = params;
   const { data } = await axios.get<Coffee[]>(`https://62dc35ac57ac3c3f3c583299.mockapi.io/items?page=${currentPage}&limit=8&${category}${brand}&sortBy=${sortBy}&order=${order}${search}`);
   return data as Coffee[];
});

const initialState: CoffeeSliceState = {
   items: [],
   status: Status.LOADING, // loading, success, error
};

export const coffeeSlice = createSlice({
   name: 'coffee',
   initialState,
   reducers: {
      setItems(state, action: PayloadAction<Coffee[]>) {
         state.items = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder.addCase(fetchCoffees.pending, (state, action) => {
         state.status = Status.LOADING;
         state.items = [];
      });

      builder.addCase(fetchCoffees.fulfilled, (state, action) => {
         state.items = action.payload;
         state.status = Status.SUCCESS;
      });

      builder.addCase(fetchCoffees.rejected, (state, action) => {
         state.status = Status.ERROR;
         state.items = [];
      });
   },
});

export const selectCoffeeData = (state: RootState) => state.coffee;

export const { setItems } = coffeeSlice.actions;

export default coffeeSlice.reducer;