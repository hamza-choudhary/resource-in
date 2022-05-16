import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {isAuth: false};

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        isAuthenticatedUser(state){
            state.isAuth = true;
        },
        isNotAutheticatedUser(state){
            state.isAuth = false;
        },
    }
})

export const authActions = authSlice.actions;
export default authSlice.reducer;