import rootReducer from './reducer'
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { grillMiddleware } from "./core/Grill";

export default configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: [grillMiddleware, ...getDefaultMiddleware()],
});
