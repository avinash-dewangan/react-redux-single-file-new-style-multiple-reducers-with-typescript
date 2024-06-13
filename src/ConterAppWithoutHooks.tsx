import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

// Define types for state
interface CounterState {
  value: number;
}

interface AnotherState {
  message: string;
}

// Local storage key
const LOCAL_STORAGE_KEY = 'reduxState';

// Load state from local storage
const loadState = (): any | undefined => {
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
const saveState = (state: any): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(LOCAL_STORAGE_KEY, serializedState);
  } catch (err) {
    console.error("Could not save state to local storage", err);
  }
};

// Define initial state for counter reducer
const initialCounterState: CounterState = {
  value: 0,
};

// Define initial state for another reducer
const initialAnotherState: AnotherState = {
  message: 'Hello Redux Toolkit!',
};

// Reducer function for counter
const counterReducer = (state: CounterState = initialCounterState, action: any): CounterState => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, value: state.value + 1 };
    case 'DECREMENT':
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};

// Reducer function for another feature
const anotherReducer = (state: AnotherState = initialAnotherState, action: any): AnotherState => {
  return state;
};

// Combine all reducers into a single reducer
const rootReducer = combineReducers({
  counter: counterReducer,
  another: anotherReducer,
});

// Load initial state from local storage
const preloadedState = loadState();

// Create a Redux store
const store = createStore(rootReducer, preloadedState);

// Subscribe to store changes to save the state to local storage
store.subscribe(() => {
  saveState(store.getState());
});

// Counter component
class Counter extends React.Component<any, any> {
  render() {
    return (
      <div>
        <h1>Counter: {this.props.value}</h1>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
      </div>
    );
  }
}

// Map Redux state to component props
const mapStateToProps = (state: any) => {
  return {
    value: state.counter.value,
  };
};

// Map Redux actions to component props
const mapDispatchToProps = (dispatch: any) => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
  };
};

// Connect the Counter component to Redux store
const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

// Main App component
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedCounter />
      </Provider>
    );
  }
}

export default App;
