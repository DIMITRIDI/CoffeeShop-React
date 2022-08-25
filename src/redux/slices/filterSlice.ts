import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export enum SortPropertyEnum {
   RATING_DESC = 'rating',
   RATING_ASC = '-rating',
   TITLE_DESC = 'title',
   TITLE_ASC = '-title',
   PRICE_DESC = 'price',
   PRICE_ASC = '-price',
}

export type Sort = {
      name: string;
      sortProperty: SortPropertyEnum;
   }

interface FilterSliceState {
   searchValue: string;
   categoryId: number;
   currentPage: number;
   sort: Sort;
   sortBrand: number;
}

const initialState: FilterSliceState = {
   searchValue: '',
   categoryId: 0,
   currentPage: 1,
   sort: {
      name: 'popularity desc',
      sortProperty: SortPropertyEnum.RATING_DESC,
   },
   sortBrand: 0
};

export const filterSlice = createSlice({
   name: 'filters',
   initialState,
   reducers: {
      setSearchValue(state, action: PayloadAction<string>) {
         state.searchValue = action.payload;
      },
      setCategoryId(state, action: PayloadAction<number>) {
         state.categoryId = action.payload;
      },
      setSort(state, action: PayloadAction<Sort>) {
         state.sort = action.payload;
      },
      setSortBrand(state, action: PayloadAction<number>) {
         state.sortBrand = action.payload;
      },
      setCurrentPage(state, action: PayloadAction<number>) {
         state.currentPage = action.payload;
      },
      setFilters(state, action: PayloadAction<FilterSliceState>) {
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
               sortProperty: SortPropertyEnum.RATING_DESC,
            };
         }
      },
   },
});

export const selectFilter = (state: RootState) => state.filter;
export const selectSort = (state: RootState) => state.filter.sort;
export const selectSortBrand = (state: RootState) => state.filter.sortBrand;

export const { setSearchValue, setCategoryId, setSort, setSortBrand, setCurrentPage, setFilters } = filterSlice.actions;

export default filterSlice.reducer;