import {createStore} from 'redux';

const counterReducer = (state = {counter: 0}, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
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
            counter: state.counter + action.amount
        }
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }

    return state;
};

const store = createStore(counterReducer);

export default store;