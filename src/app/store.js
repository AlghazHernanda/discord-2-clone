import { configureStore } from "@reduxjs/toolkit";
import channelReducer from "../features/channelSlice";

export const store = configureStore({
  reducer: {
    channel: channelReducer,
  },
});

export const channelSlice = createSlice({
    name: "channel",
    initialState,
    reducers: {
      setChannelInfo: (state, action) => {
        state.channelId = action.payload.channelId;
        state.channelName = action.payload.channelName;
      },
    },
  });
  
  export const { setChannelInfo } = channelSlice.actions;
  
  export const selectChannelId = (state) => state.channel.channelId;
  export const selectChannelName = (state) => state.channel.channelName;
  
  export default channelSlice.reducer;