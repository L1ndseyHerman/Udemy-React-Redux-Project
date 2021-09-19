import {createSlice} from '@reduxjs/toolkit';

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

//  This used to get exported in index.js, but can do it here now instead.
export const counterActions = counterSlice.actions;

//  Can just export a property like this if only need the 1!
export default counterSlice.reducer;