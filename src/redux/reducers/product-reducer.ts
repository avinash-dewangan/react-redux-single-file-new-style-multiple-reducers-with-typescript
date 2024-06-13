

interface ProductState {
  productId: number;
  productName: string;
  productDesc: string;
}


// Define initial state for another reducer
const initialProductState: ProductState = {
  productId:1,
  productName:"apple",
  productDesc:"mobile"
};


// Reducer function for another feature
export const productReducer = (state: ProductState = initialProductState, action: any): ProductState => {
  return state;
};

