import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {

    },
    reducers: {
        cacheResults: (state, action) => {
            //this object will have, { di: ["disney", "discovery", "dino"], disn: ["disney", "disney world"]}
            state = Object.assign(state, action.payload);
        }
    }
})

export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;