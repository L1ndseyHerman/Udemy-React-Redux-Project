import {createStore} from 'redux';

const initialState = {counter: 0, showCounter: true};

//  Unlike React hooks, redux replaces objects, so u have to announce what all 
//  the object property's values are, even if they haven't changed since last time.
const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    }

    //  Not good, don't want to hard-code like 100 actions here.
    /*if (action.type === 'increaseby5') {
        return {
            counter: state.counter + 5
        }
    }*/

    //  Better, having 1 increase action that takes a param.
    if (action.type === 'increase') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }

    //  Mentions that if this were slightly longer, a switch might be useful,
    //  but sticking to if-statements here:
    if (action.type === 'toggle') {
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        };
    }

    return state;
};

const store = createStore(counterReducer);

export default store;