import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        langToUse: 'en',
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.langToUse = action.payload
        }
    }
});


export const { changeLanguage } = configSlice.actions;
export default configSlice.reducer;