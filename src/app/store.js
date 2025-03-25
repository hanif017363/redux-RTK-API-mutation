import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counters/countersSlice";
import { appSlice } from "../features/api/apislice";

// lets create custom middleware

const myLogger = (store) => (next) => (action) => {
  console.log(`Action :${JSON.stringify(action)}`);
  console.log(`CurrentState :${JSON.stringify(store.getState())}`);
  return next(action);
};

const store = configureStore({
  reducer: {
    // counters: counterReducer,
    [appSlice.reducerPath]: appSlice.reducer,
  },

  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(appSlice.middleware),
});

export default store;
