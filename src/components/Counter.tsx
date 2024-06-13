// Counter component
import React from 'react';
import { connect, Provider } from 'react-redux';
import {store} from "../redux/store"

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




  class CounterApp extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <ConnectedCounter/>
        </Provider>
      );
    }
  }
  
  export default CounterApp;