import { createSlice } from "@reduxjs/toolkit";
import { createAppAsyncThunk } from "../createAppAsyncThunk";
import IUsersState from "./usersStates";
import IUserDto from "../../interfaces/IUserDto";
import { UsersApi } from "../../api/usersApi";


const namespace = 'users'


export const register = createAppAsyncThunk(
    `${namespace}/register`,
    async (user: IUserDto) => {
        return UsersApi.register(user)
    }
)

export const login = createAppAsyncThunk(
    `${namespace}/login`,
    async (user: IUserDto) => {
        return UsersApi.login(user)
    }
)


const initialState: IUsersState= {
    user: {} as IUserDto,
    isAuth: false,
    message: '',
    cart: []
}


export const usersSlice = createSlice({
    name: namespace,
    initialState: initialState,
    reducers: {
        initState() {
            initialState
        },
        logout(state) {
            state.isAuth = false
            localStorage.clear()
        },
        addToCart(state, action) {
            const temp = [...state.cart]
            temp.push(action.payload)
            state.cart = temp
        },
        deleteFromCart(state, action) {
            const temp = [...state.cart]
            const updatedItems = temp.filter(item => item.id !== action.payload);
            state.cart = updatedItems
        },
        changeQantity(state, action){
            const temp = [...state.cart]
            const changed = temp.map((item) => {if(item.id === action.payload.id){
                return {...item, quantity: parseInt(action.payload.quantity)}
            } else {return item}})
            state.cart = changed;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                const user = action.payload
                state.user = user as IUserDto | null
                if (user) {
                    localStorage.setItem('user', JSON.stringify(user))
                    state.isAuth = true
                    state.message = "Connected successfully"
                } else {
                    state.message = "Error"
                }
            })
            .addCase(login.fulfilled, (state, action) => {
                const user = action.payload
                state.user = user
                if (user) {
                    localStorage.setItem('user', user)
                    state.isAuth = true
                    state.message = "Connected successfully"
                } else {
                    state.message = "Error"
                }
            })
    }
})

export const {initState, logout, addToCart, changeQantity, deleteFromCart} = usersSlice.actions
