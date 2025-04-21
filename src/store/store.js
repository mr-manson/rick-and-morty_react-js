import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./slices/favoritesSlice";

const store = configureStore({
    reducer: {
        favorite: favoriteSlice,
    }
});

export default store;