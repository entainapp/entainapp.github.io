import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    isLoading: boolean;
    error: string | null;
    user: UserInfo | null;
}

interface UserInfo {
    email: string;
    password: string;
}

const initialState: UserState = {
    isLoading: false,
    error: null,
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Sign up action
        signUpStart(state) {
            state.isLoading = true;
        },
        signUpSuccess(state, action: PayloadAction<UserInfo>) {
            state.isLoading = false;
            state.user = action.payload;
        },
        signUpFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },

        // Sign in action
        signInStart(state) {
            state.isLoading = true;
        },
        signInSuccess(state, action: PayloadAction<UserInfo>) {
            state.isLoading = false;
            state.user = action.payload;
        },
        signInFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export const { signUpStart, signUpSuccess, signUpFailure, signInStart, signInSuccess, signInFailure } = userSlice.actions;

export default userSlice.reducer;