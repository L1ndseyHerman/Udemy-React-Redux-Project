//  configureStore makes it easier to merge mult slices into 1 store.
import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialCounterState = {counter: 0, showCounter: true};

//  This could be just some of the store, like only related things like the 
//  increament and decrement could be in it, the show/hide could be 
//  somewhere else (even another file!) since it's not related to counting. 

//  Every slice needs a name, name it what they have in common.
//  Also, an initial state
//  All of the reducers receive the current state, as well as the current action.
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

const initialAuthState = {
    isAuthenticated: false
};

//  A second slice!
const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

//  configureStore() combines slices.
//  "reducer" is a pre-coded property.
const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
});

//  To bring it to Counter:
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;