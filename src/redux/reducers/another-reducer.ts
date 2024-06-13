
import {combineReducers } from 'redux';
import {INCREMENT, DECREMENT} from "../action"


interface AnotherState {
  message: string;
}


// Define initial state for another reducer
const initialAnotherState: AnotherState = {
  message: 'Hello Redux Toolkit!',
};


// Reducer function for another feature
export const anotherReducer = (state: AnotherState = initialAnotherState, action: any): AnotherState => {
  return state;
};

