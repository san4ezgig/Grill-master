import { createReducer } from "@reduxjs/toolkit";
import { addItems } from "./grill.actions";

const initialState = {
  height: 0,
  width: 0,
  items: {
    grillItems: [],
    itemsOutOfGrill: [],
  }
}

export default createReducer(initialState, (builder) => {
  builder.addCase(addItems, (state, action) => {
    return {...state, ...action.payload}
  });
})
