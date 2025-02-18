import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { AuthState, LoginCredentials, LoginResponse } from "@/types/interface.user"
import axios from "axios"

const initialState: AuthState = {
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
}

// Async thunks 
export const Login = createAsyncThunk<LoginResponse, LoginCredentials>(
    "auth/login",
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await axios.post<LoginResponse>("/api/auth/login", credentials)
            axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`
            return response.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data?.message || "Error en el login")
            }
            return rejectWithValue("Error inesperado")
        }
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.token = null
            state.isAuthenticated = false
            delete axios.defaults.headers.common["Authorization"]
        },
        resetError: (state) => {
            state.error = null
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(login.pending, (state) => {
            state.isLoading = true
            state.error = null
        })
        .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false
            state.isAuthenticated = true
            state.user = action.payload.user
            state.token = action.payload.token
        })
        .addCase(login.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload as string
        })
    },
})

export const { logout, resetError } = authSlice.actions
export default authSlice.reducer