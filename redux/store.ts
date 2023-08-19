import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import productReducer from './features/product/productSlice';
import filterReducer from './features/filter/filterSlice';
import { api } from './api/apiSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
const persistConfig ={
  key: 'cart',
  storage
}
const persistedReducer = persistReducer(persistConfig, cartReducer)
const store = configureStore({
  reducer: {
    cart: persistedReducer,
    product: productReducer,
    filter: filterReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;