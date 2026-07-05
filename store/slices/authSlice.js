import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
};

if (!BASE_URL) {
    console.warn('[loginSlice] EXPO_PUBLIC_BASE_URL is not defined. Check your .env file.');
}

export const sendOtp = createAsyncThunk("/otp/send",
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${BASE_URL}/otp/send`, formData, {
                withCredentials: true
            });
            return response.data;
        } catch (err) {
            const message =
                err.response?.data || "Something went wrong during registration";
            return rejectWithValue(message);
        }
    }
);

export const verifyOtp = createAsyncThunk("/otp/verify",
    async (otp, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${BASE_URL}/otp/verify`, otp);
            return response.data;
        } catch (err) {
            const message =
                err.response?.data || "Something went wrong during registration";
            return rejectWithValue(message);
        }
    }
);

export const signup = createAsyncThunk("/customer/create-account",
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${BASE_URL}/customer/create-account`, formData, {
                withCredentials: true
            });
            console.log(response.data)
            return response.data
        } catch (err) {
            const message =
                err.response?.data || "Something went wrong during registration";
            return rejectWithValue(message);
        }
    }
);

export const login = createAsyncThunk("/auth/login",
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${BASE_URL}/auth/login`, formData, {
                withCredentials: true
            });
            return response.data
        } catch (err) {
            const message =
                err.response?.data || "Something went wrong during login";
            return rejectWithValue(message);
        }
    }
);


export const forgotPassword = createAsyncThunk("/auth/forgotPassword",
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post("http://localhost:3000/api/v1/users/userForgotPassword", formData, {
                withCredentials: true
            });
            return response.data
        } catch (err) {
            const message =
                err.response?.data || "Something went wrong";
            return rejectWithValue(message);
        }
    }
);

export const resetPassword = createAsyncThunk("/auth/resetPassword",
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post("http://localhost:3000/api/v1/users/userResetPassword", formData, {
                withCredentials: true
            });
            return response.data
        } catch (err) {
            const message =
                err.response?.data || "Something went wrong";
            return rejectWithValue(message);
        }
    }
);

export const checkAuth = createAsyncThunk("/auth/checkauth",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get("http://localhost:3000/api/v1/users/check-auth", {
                withCredentials: true,
                headers: {
                    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
                    // Expires : "0"
                }
            });
            return response.data
        } catch (err) {
            const message =
                err.response?.data || "Something went wrong";
            return rejectWithValue(message);
        }
    }
);

export const logout = createAsyncThunk("/auth/logout",
    async (rejectWithValue) => {
        try {
            const response = await axios.post("http://localhost:3000/api/v1/users/logout", {}, {
                withCredentials: true
            });
            return response.data
        } catch (err) {
            const message =
                err.response?.data || "Something went wrong during logout";
            return rejectWithValue(message);
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducer: {
        setUser: (state, action) => { }
    },
    extraReducers: (builder) => {
        builder.addCase(sendOtp.pending, (state) => {
            state.isLoading = true;
        }).addCase(sendOtp.fulfilled, (state) => {
            state.isLoading = false;
            state.user = null;
            state.isAuthenticated = false
        }).addCase(sendOtp.rejected, (state, action) => {
            state.isLoading = false;
            state.user = null;
            state.error = action.payload;
            state.isAuthenticated = false;
        }).addCase(verifyOtp.pending, (state) => {
            state.isLoading = true;
        }).addCase(verifyOtp.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.isAuthenticated = true;
        }).addCase(verifyOtp.rejected, (state, action) => {
            state.isLoading = false;
            state.user = null;
            state.error = action.payload;
            state.isAuthenticated = false;
        }).addCase(signup.pending, (state) => {
            state.isLoading = true;
        }).addCase(signup.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.isAuthenticated = true;
        }).addCase(signup.rejected, (state, action) => {
            state.isLoading = false;
            state.user = null;
            state.error = action.payload;
            state.isAuthenticated = false;
        }).addCase(login.pending, (state) => {
            state.isLoading = true;
        }).addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.isAuthenticated = true;
        }).addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.user = null;
            state.error = action.payload;
            state.isAuthenticated = false;
        }).addCase(forgotPassword.pending, (state) => {
            state.isLoading = true;
        }).addCase(forgotPassword.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.isAuthenticated = false;
        }).addCase(forgotPassword.rejected, (state, action) => {
            state.isLoading = false;
            state.user = null;
            state.error = action.payload;
            state.isAuthenticated = false;
        }).addCase(resetPassword.pending, (state) => {
            state.isLoading = true;
        }).addCase(resetPassword.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.isAuthenticated = true;
        }).addCase(resetPassword.rejected, (state, action) => {
            state.isLoading = false;
            state.user = null;
            state.error = action.payload;
            state.isAuthenticated = false;
        }).addCase(checkAuth.pending, (state) => {
            state.isLoading = true;
        }).addCase(checkAuth.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.isAuthenticated = action.payload.status;
        }).addCase(checkAuth.rejected, (state, action) => {
            state.isLoading = false;
            state.user = null;
            state.error = action.payload;
            state.isAuthenticated = false;
        }).addCase(logout.fulfilled, (state) => {
            state.isLoading = false;
            state.user = null;
            state.isAuthenticated = false;
        })
    }
})

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
