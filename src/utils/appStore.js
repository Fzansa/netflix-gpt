import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../utils/userSlice'
import movieReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import langReducer from './configSlice';

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: movieReducer,
        gpt: gptReducer,
        lang: langReducer,
    }
});

export default appStore;