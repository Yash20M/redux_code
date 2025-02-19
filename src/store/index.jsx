// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slice/movieSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export default store;
