import { createSlice } from "@reduxjs/toolkit";
import { createAppAsyncThunk } from "../createAppAsyncThunk";
import { productsApi } from "../../api/productsApi";
import ProductState from "./productsState";

const namespace = 'products'


export const getProducts = createAppAsyncThunk(
    `${namespace}/getProducts`,
    async () => {
        return productsApi.getProducts();
    }
)
export const getBestSellers = createAppAsyncThunk(
    `${namespace}/getBestSellers`,
    async () => {
        return productsApi.getBestSellers();
    }
)

const initialState: ProductState = {
    products: [],
    bestSellers: []
}


export const ProductsSlice = createSlice({
    name: namespace,
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.fulfilled, (state, action) => {
                const products = action.payload?.data
                state.products = products
            })
            .addCase(getBestSellers.fulfilled, (state, action) => {
                const products = action.payload?.data
                state.bestSellers = products
            })
    }
    
})
