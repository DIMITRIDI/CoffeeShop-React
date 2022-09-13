import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   items: []
};

export const favoriteSlice = createSlice({
   name: 'favorite',
   initialState,
   reducers: {
      addFavorite(state, action) {
         const findFavorite = state.items.find(obj => obj.id === action.payload.id);

         if (findFavorite) {
            findFavorite.count++;
         } else {
            state.items.push({
               ...action.payload,
               count: 1,
            });
         }
      },
      removeFavorite(state, action) {
         state.items = state.items.filter(obj => obj.id !== action.payload);
      },
      clearFavorite(state) {
         state.items = [];
      },
   },
});

export const selectFavorite = (state) => state.favorite;
// export const selectCartItemById = (id) => (state) => state.cart.items.find(obj => obj.id === id);

export const { addFavorite, removeFavorite, clearFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;