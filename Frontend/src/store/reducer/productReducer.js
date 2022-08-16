import {
    ALL_PRODUCT_FAILED, ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS, CLEAR_ERRORS
} from "../constants/constants";

// state declarations.
const initialState = {
    products: [],
    isLoading: false,
}

export const productReducer = ( state = initialState, action) => {
  switch (action.type) {
    case ALL_PRODUCT_REQUEST:
        return{
            loading: true,
            product: [],
        };
    case ALL_PRODUCT_SUCCESS:
        // console.log(action.payload);
        return{
            loading: false,
            product: action.payload.products,
            productsCount: action.payload.products.length,
        };
    case ALL_PRODUCT_FAILED:
        return{
            loading: false,
            error: action.payload,
        };
    case CLEAR_ERRORS:
        return{
            ...state,
            error: null,
        };
    default:
        return state;
  }
}

