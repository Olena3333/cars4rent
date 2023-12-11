import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { carsReducer } from "./sliceCar";
import { filterReducer } from "./sliceFilter";
import { favoriteReducer } from "./sliceFavorits";

const carsPersistConfig = {
  key: "cars",
  storage,
  whitelist: ["favorite"],
};

const filterPersistConfig = {
  key: "filter",
  storage,
  blacklist: ["filter"],
};

const favoritesPersistConfig = {
  key: "favorites",
  storage,
  whitelist: ["favorite"],
};

const store = configureStore({
  reducer: {
    cars: persistReducer(carsPersistConfig, carsReducer),
    filter: persistReducer(filterPersistConfig, filterReducer),
    favorites: persistReducer(favoritesPersistConfig, favoriteReducer),
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
