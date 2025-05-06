import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";

import {
  GET_LOCATION_BEGIN,
  GET_LOCATION_SUCCESS,
  GET_LOCATION_ERROR,
  GET_PLACE_BEGIN,
  GET_PLACE_SUCCESS,
  GET_PLACE_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../action";
import location_reducer from "../reducer/location_reducer";
import { ACCEPT_HEADER, location_url, place_url } from "../Utils/Constant";

const initialState = {
  is_loading_home: false,
  is_place_home: false,
  location_list: [],
  places_list: [],
  single_product_loading: false,
  single_product_error: false,
  single_product1: "",
};

const LocationContext = React.createContext();

export const LocationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(location_reducer, initialState);

  const getLocation = async () => {
    dispatch({ type: GET_LOCATION_BEGIN });
    await axios
      .get(location_url, {
        headers: {
          Accept: ACCEPT_HEADER,
        },
      })
      .then((res) => {
        console.log("---res : ", res.data);
        const data = res.data.data;

        if (res.data.success === 1) {
          dispatch({ type: GET_LOCATION_SUCCESS, payload: data });
        }
      })
      .catch((err) => {
        // console.log(err)
        dispatch({ type: GET_LOCATION_ERROR });
      });
  };

  const getPlace = async () => {
    dispatch({ type: GET_PLACE_BEGIN });
    await axios
      .get(place_url, {
        headers: {
          Accept: ACCEPT_HEADER,
        },
      })
      .then((res) => {
        const data = res.data.data;
        console.log("---res : ", res.data);

        // if (res.data.success === 1) {
        dispatch({ type: GET_PLACE_SUCCESS, payload: res.data.data });
        // }
      })
      .catch((err) => {
        // console.log(err)
        dispatch({ type: GET_PLACE_ERROR });
      });
  };

  //fetch single product api
  const fetchSingleProduct = async (url) => {
    console.log("singleproduct url ", url);
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const response = await axios.get(url, {
        headers: {
          Accept: ACCEPT_HEADER,
        },
      });
      const singleProduct = response.data.data;
      console.log("singleproduct-->response ", singleProduct);

      dispatch({
        type: GET_SINGLE_PRODUCT_SUCCESS,
        payload: singleProduct,
      });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
    // const response = await axios.get(url);
    // console.log(response);
  };

  useEffect(() => {
    getLocation();
    getPlace();
    // console.log("---res : ", getLocation());
  }, []);

  return (
    <LocationContext.Provider
      value={{ ...state, getLocation, getPlace, fetchSingleProduct }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationContext = () => {
  return useContext(LocationContext);
};
