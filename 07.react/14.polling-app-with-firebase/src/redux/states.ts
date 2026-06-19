// all the global states will be made here
// const [user, set_user] = usestate(null)


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null
}

export const stateSlice = createSlice({
    name: 'globalStates',
    initialState,
    reducers: {
        login: (state: any, action) => {
            state.user = action.payload
        },
    }
})

export const { login } = stateSlice.actions

export default stateSlice.reducer
