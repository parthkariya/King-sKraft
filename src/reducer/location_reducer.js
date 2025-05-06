import {
  GET_LOCATION_BEGIN,
  GET_LOCATION_SUCCESS,
  GET_LOCATION_ERROR,
  GET_PLACE_BEGIN,
  GET_PLACE_ERROR,
  GET_PLACE_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_BEGIN,
} from "../action";

const location_reducer = (state, action) => {
  if (action.type === GET_LOCATION_BEGIN) {
    return { ...state, is_loading_home: true };
  }
  if (action.type === GET_LOCATION_SUCCESS) {
    return {
      ...state,
      is_loading_home: false,
      location_list: action.payload,
    };
  }
  if (action.type === GET_LOCATION_ERROR) {
    return { ...state, is_loading_home: false };
  }

  // ---------------------------------------------

  if (action.type === GET_PLACE_BEGIN) {
    return { ...state, is_place_home: true };
  }
  if (action.type === GET_PLACE_SUCCESS) {
    return {
      ...state,
      is_place_home: false,
      places_list: action.payload,
    };
  }
  if (action.type === GET_PLACE_ERROR) {
    return { ...state, is_place_home: false };
  }

  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return {
      ...state,
      single_product_loading: true,
      single_product_error: false,
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      single_product_loading: false,
      single_product1: action.payload,
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      single_product_loading: false,
      single_product_error: true,
    };
  }

  return state;
};

export default location_reducer;
