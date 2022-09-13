import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   searchValue: '',
   categoryId: 0,
   currentPage: 1,
   sort: {
      name: 'popularity desc',
      sortProperty: 'rating',
   },
   sortBrand: 0
};

export const filterSlice = createSlice({
   name: 'filters',
   initialState,
   reducers: {
      setSearchValue(state, action) {
         state.searchValue = action.payload;
      },
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
      setFilters(state, action) {
         if (Object.keys(action.payload).length) {
         state.currentPage = Number(action.payload.currentPage);
         state.categoryId = Number(action.payload.categoryId);
         state.sortBrand = Number(action.payload.sortBrand);
         state.sort = action.payload.sort;
         } else {
            state.currentPage = 1;
            state.categoryId = 0;
            state.sortBrand = 0;
            state.sort = {
               name: 'popularity desc',
               sortProperty: 'rating',
            };
         }
      },
   },
});

export const selectFilter = (state) => state.filter;
export const selectSort = (state) => state.filter.sort;

export const { setSearchValue, setCategoryId, setSort, setSortBrand, setCurrentPage, setFilters } = filterSlice.actions;

export default filterSlice.reducer;