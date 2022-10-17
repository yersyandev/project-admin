import {AuthResponse, IUser} from "@models/interfaces";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {$api, API_URL} from "@api/index";

interface UserState {
    users: IUser[],
    isLoading: boolean,
    error: string,
    isAuth: boolean,
    user: IUser
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    isAuth: false,
    user: {} as IUser
}

export const getUsers = createAsyncThunk<IUser[], undefined, { rejectValue: string }>(
    'user/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const response = await $api.get('/auth/users')
            return response.data
        }catch (e: any) {
            return rejectWithValue(e.message)
        }
    }
)

export const login = createAsyncThunk(
    'user/login',
    async (data, {rejectWithValue}) => {
        try {
            const response = await $api.post('/auth/login', data)
            return response.data
        }catch (e: any) {
            return rejectWithValue(e.message)
        }
    }
)

export const registration = createAsyncThunk(
    'user/registration',
    async (data, {rejectWithValue}) => {
        try {
            const response = await $api.post('/auth/registration', data)
            return response.data
        }catch (e: any) {
            return rejectWithValue(e.message)
        }
    }
)

export const logout = createAsyncThunk(
    'user/logout',
    async (_, {rejectWithValue}) => {
        try {
            const response = await $api.post('/auth/logout')
            return response.data
        }catch (e: any) {
            return rejectWithValue(e.message)
        }
    }
)

export const checkAuth = createAsyncThunk(
    'user/checkAuth',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${API_URL}/auth/refresh`, {withCredentials: true})
            return response.data
        }catch (e: any) {
            return rejectWithValue(e.message)
        }
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [getUsers.pending.type]: (state) => {
            // state.isLoading = true
        },
        [getUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false
            state.users = action.payload
            state.error = ''
        },
        [getUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
        [login.fulfilled.type]: (state, action: PayloadAction<AuthResponse>) => {
            localStorage.setItem('token', action.payload.accessToken)
            state.isAuth = true
            state.user = action.payload.user
        },
        [registration.fulfilled.type]: (state, action: PayloadAction<AuthResponse>) => {
            localStorage.setItem('token', action.payload.accessToken)
            state.isAuth = true
            state.user = action.payload.user
        },
        [logout.fulfilled.type]: (state) => {
            localStorage.removeItem('token')
            state.isAuth = false
            state.user = {} as IUser
        },
        [checkAuth.pending.type]: (state) => {
            state.isLoading = true
        },
        [checkAuth.fulfilled.type]: (state, action: PayloadAction<AuthResponse>) => {
            localStorage.setItem('token', action.payload.accessToken)
            state.isAuth = true
            state.user = action.payload.user
            state.isLoading = false
        },
        [checkAuth.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default userSlice.reducer