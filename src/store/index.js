//  configureStore makes it easier to merge mult slices into 1 store.
import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialState = {counter: 0, showCounter: true};

//  This could be just some of the store, like only related things like the 
//  increament and decrement could be in it, the show/hide could be 
//  somewhere else (even another file!) since it's not related to counting. 

//  Every slice needs a name, name it what they have in common.
//  Also, an initial state
//  All of the reducers receive the current state, as well as the current action.
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
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

//  configureStore() combines slices.
//  "reducer" is a pre-coded property.
const store = configureStore({
    //  Could do if lots:
    //reducer: {counter: counterSlice.reducer}
    reducer: counterSlice.reducer
});

//  To bring it to Counter:
export const counterActions = counterSlice.actions;
export default store;