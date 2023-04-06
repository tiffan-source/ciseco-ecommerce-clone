import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: "",
  public_id: "",
};

const uploadSlice = createSlice({
  name: "upload",
  initialState,
  reducers: {
    setUpload: (state, action) => {
      state.url = action.payload.url;
      state.public_id = action.payload.public_id;
    },
  },
});

export const { setUpload } = uploadSlice.actions;
export default uploadSlice.reducer;
