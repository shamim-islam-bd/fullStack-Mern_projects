
import axios from 'axios';
import {
    ALL_PRODUCT_SUCCESS, CLEAR_ERRORS
} from "../constants/constants";

// Geting All Products
export const getProduct = () => {
    return async (dispatch) => {
        try{
            const {data} = await axios.get(`http://localhost:5000/products`)
            // console.log(data);
             dispatch({
                type: ALL_PRODUCT_SUCCESS,
                payload: data,
            })
        }catch(err){
             dispatch({
            type: ALL_PRODUCT_FAILED,
            payload: err.res.data.message,
        }) 
        }
    }
}

// CLear Errors
export const clearErrors = () => async(dispatch)=>{
    dispatch({ type: CLEAR_ERRORS })
}