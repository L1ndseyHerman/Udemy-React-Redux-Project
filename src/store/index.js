//  configureStore makes it easier to merge mult slices into 1 store.
import {configureStore} from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

//  configureStore() combines slices.
//  "reducer" is a pre-coded property.
const store = configureStore({
    reducer: {counter: counterReducer, auth: authReducer}
});

export default store;