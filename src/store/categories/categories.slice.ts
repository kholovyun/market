import { createSlice } from "@reduxjs/toolkit";
import { createAppAsyncThunk } from "../createAppAsyncThunk";
import { categoryApi } from "../../api/categoryApi";
import ICategoryState from "./categoriesStates";

const namespace = 'categories'


export const getCategories = createAppAsyncThunk(
    `${namespace}/getCategory`,
    async () => {
        return categoryApi.getCategories();
    }
)

const initialState: ICategoryState = {
    categories: [],
}


export const CategoriesSlice = createSlice({
    name: namespace,
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.fulfilled, (state, action) => {
                const categories = action.payload.data
                state.categories = categories
            })
    }
})
