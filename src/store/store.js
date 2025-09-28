import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./slices/favoritesSlice";
import { setLocalStorage } from "../utils/localStorage";

const store = configureStore({
    reducer: {
        favorite: favoriteSlice,
    }
});

store.subscribe(() => {
    setLocalStorage("fav", store.getState().favorite);
})

export default store;