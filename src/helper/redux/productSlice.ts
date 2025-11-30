import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../constant/types';

interface ProductsState {
      products: Product[];
}

const initialState: ProductsState = {
      products: [],
};

const productsSlice = createSlice({
      name: 'products',
      initialState,
      reducers: {
            setShopProducts(state, action: PayloadAction<Product[]>) {
                  state.products = action.payload;
            },
            addShopProduct(state, action: PayloadAction<Product>) {
                  state.products.push(action.payload);
            },
      },
});

export const { setShopProducts, addShopProduct } = productsSlice.actions;
export default productsSlice.reducer;
