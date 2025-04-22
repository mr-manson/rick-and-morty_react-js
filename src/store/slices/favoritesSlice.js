import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const initialState = {
    favList: [],
}

export const favoriteSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.favList.push(action.payload);
        },

        removeFavorite: (state, action) => {
            state.favList = _.without(state.favList, action.payload);
        }
    }
})

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;