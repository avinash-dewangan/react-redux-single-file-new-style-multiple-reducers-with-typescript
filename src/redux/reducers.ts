
import {combineReducers } from 'redux';

import { counterReducer } from './reducers/counter-reducer';
import { anotherReducer } from './reducers/another-reducer';
import { productReducer } from './reducers/product-reducer';
// Combine all reducers into a single reducer
const rootReducer = combineReducers({
  product: productReducer,
  counter: counterReducer,
  another: anotherReducer,
  
});

export { rootReducer};