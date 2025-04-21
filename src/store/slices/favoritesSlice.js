import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Ivan",
}

export const favoriteSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.name = action.payload;
        }
    }
})

export const { addFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;