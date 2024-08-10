import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptStatus: false,
    },
    reducers: {
        toggleGpt: (state, action) => {
            state.gptStatus = !state.gptStatus
        }
    }
});

export default gptSlice.reducer;
export const { toggleGpt } = gptSlice.actions;