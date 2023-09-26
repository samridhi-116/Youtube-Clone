import { createSlice } from "@reduxjs/toolkit";
import { offset_liveChat } from "./constants";

const chatSlice = createSlice({
    name : "chat",
    initialState : {
        messages: []
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.splice(offset_liveChat, 1);
            state.messages.unshift(action.payload);
        }
    }
});

export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;