// Counter component
import React from 'react';
import { connect, Provider } from 'react-redux';
import {store} from "../redux/store"

 class Product extends React.Component<any, any> {
    render() {
   
      return (
        <div>
          {JSON.stringify(this.props.value)}
        </div>
      );
    }
  }
  
  // Map Redux state to component props
  const mapStateToProps = (state: any) => {
    return {
      value: state.product,
    };
  };

  
  // Connect the Counter component to Redux store
 const ConnectedCounter = connect(mapStateToProps)(Product);


 class ProductApp extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <ConnectedCounter/>
        </Provider>
      );
    }
  }
  
  export default ProductApp;
