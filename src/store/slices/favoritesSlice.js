import { createSlice } from "@reduxjs/toolkit";
import { reject } from "lodash";
import { getLocalStorage } from "../../utils/localStorage";

const initialState = {
    // favList: [],
    favList: getLocalStorage("fav").favList,
}

export const favoriteSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.favList.push(action.payload);
        },
        removeFavorite: (state, action) => {
            state.favList = reject(state.favList, item => item.id === action.payload);
        },
        clearFavorites: (state, action) => {
            state.favList = [];
        }
    }
})

export const {addFavorite, removeFavorite, clearFavorites} = favoriteSlice.actions;

export default favoriteSlice.reducer;