import {loadState, saveState} from "./localstorage"
import { createStore } from 'redux';
import {rootReducer} from "./reducers"


// Load initial state from local storage
const preloadedState = loadState();

// Create a Redux store
export const store = createStore(rootReducer, preloadedState);

// Subscribe to store changes to save the state to local storage
store.subscribe(() => {
  saveState(store.getState());
});

