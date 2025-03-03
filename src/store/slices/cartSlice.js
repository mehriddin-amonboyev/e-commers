import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    productCount: 0,
    totalCount: 0,
    products: [],
};

const cartReducer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductList: (state, action) => {
            const product = state.products.find(
                (item) => item.id === action.payload.id
            )
            if (!product) {
                return { ...state, products: [...state.products, action.payload] }
            }
            return state;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        addProductListByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

export default cartReducer.reducer;

export const { addProductList, decrement, addProductListByAmount } =
    cartReducer.actions;
