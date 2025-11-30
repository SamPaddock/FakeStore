import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import preferencesReducer from './appSlice';
import productsReducer from './productSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['preferences', 'products'],
};

const rootReducer = combineReducers({
  preferences: preferencesReducer,
  products: productsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        ignoredPaths: ['preferences', 'products'],
      },
    }),
});

const persister = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store, persister };
