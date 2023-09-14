// src/store.js
import { persistStore, persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage/session";

import rootReducer from "./reducers";

const persistConfig = {
  key: "redux-root",
  storage,
  whitelist: ["cart"], // Specify which reducers to persist,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
