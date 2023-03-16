import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const reducer = combineReducers({

});

let initialState = {};

const middleware = [thunk];
const store = configureStore({
  reducer,
  preloadedState: initialState,
  middleware: middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
