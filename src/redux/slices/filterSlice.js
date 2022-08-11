import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   categoryId: 0,
   currentPage: 1,
   sort: {
      name: 'popularity desc',
      sortProperty: 'rating'
   },
   sortBrand: 0
}

export const filterSlice = createSlice({
   name: 'filters',
   initialState,
   reducers: {
      setCategoryId(state, action) {
         state.categoryId = action.payload;
      },
      setSort(state, action) {
         state.sort = action.payload;
      },
      setSortBrand(state, action) {
         state.sortBrand = action.payload;
      },
      setCurrentPage(state, action) {
         state.currentPage = action.payload;
      },
   },
});

export const { setCategoryId, setSort, setSortBrand, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;