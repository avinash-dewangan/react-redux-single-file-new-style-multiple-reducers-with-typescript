
import { configureStore, createSlice, combineReducers } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

// Local storage key
const LOCAL_STORAGE_KEY = 'reduxState';

// Load state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state from local storage", err);
    return undefined;
  }
};

// Save state to local storage
const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(LOCAL_STORAGE_KEY, serializedState);
  } catch (err) {
    console.error("Could not save state to local storage", err);
  }
};

// Define initial state for counter reducer
const initialCounterState = {
  value: 0,
};

// Create a counter slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Define initial state for another reducer
const initialAnotherState = {
  message: 'Hello Redux Toolkit!',
};

// Create another slice
const anotherSlice = createSlice({
  name: 'another',
  initialState: initialAnotherState,
  reducers: {},
});

// Combine all reducers into a single reducer
const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  another: anotherSlice.reducer,
});

// Load initial state from local storage
const preloadedState = loadState();

// Create a Redux store
const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

// Subscribe to store changes to save the state to local storage
store.subscribe(() => {
  saveState(store.getState());
});

// Counter component
const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.counter.value);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(counterSlice.actions.increment())}>Increment</button>
      <button onClick={() => dispatch(counterSlice.actions.decrement())}>Decrement</button>
    </div>
  );
};

// Main App component
const CounterAppNewStyle: React.FC = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default CounterAppNewStyle;
