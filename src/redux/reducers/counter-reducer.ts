

import {INCREMENT, DECREMENT} from "../action"

// Define types for state
interface CounterState {
  value: number;
}


// Define initial state for counter reducer
const initialCounterState: CounterState = {
  value: 4,
};



// Reducer function for counter
export const counterReducer = (state: CounterState = initialCounterState, action: any): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};


