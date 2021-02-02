import { ADD_NEW_ITEMS } from "./grid.constants";
import { createAction } from "@reduxjs/toolkit";

const addItems = createAction<object>(ADD_NEW_ITEMS);

export { addItems };
