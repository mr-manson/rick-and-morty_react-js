import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favList: [],
}

export const favoriteSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.favList.push(action.payload);
        }
    }
})

export const { addFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;