import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initialStateTypes {
  isSidebarcollapsed: boolean;
  isDarkMode: boolean;
}

const initialState: initialStateTypes = {
  isSidebarcollapsed: false,
  isDarkMode: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setisSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSidebarcollapsed = action.payload;
    },

    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isSidebarcollapsed = action.payload;
    },
  },
});

export const { setisSidebarCollapsed, setIsDarkMode } = globalSlice.actions;
export default globalSlice.reducer;
