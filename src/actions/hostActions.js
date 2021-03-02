import axios from "axios";
import { HOSTED_PLACE_DETAILS_FAIL, HOSTED_PLACE_DETAILS_REQUEST, HOSTED_PLACE_DETAILS_SUCCESS, HOSTED_PLACE_RATING_FAIL, HOSTED_PLACE_RATING_REQUEST, HOSTED_PLACE_RATING_SUCCESS, HOST_ADD_FAIL, HOST_ADD_REQUEST, HOST_ADD_SUCCESS, HOST_EMPTY, HOST_GET_FAIL, HOST_GET_REQUEST, HOST_GET_SUCCESS, HOST_GET_LOW_PRICE_FAIL, HOST_GET_LOW_PRICE_REQUEST, HOST_GET_LOW_PRICE_SUCCESS, HOST_GET_TOP_RATED_FAIL, HOST_GET_TOP_RATED_REQUEST, HOST_GET_TOP_RATED_RESET, HOST_GET_TOP_RATED_SUCCESS, HOST_GET_HIGH_PRICE_REQUEST, HOST_GET_HIGH_PRICE_SUCCESS, HOST_GET_HIGH_PRICE_FAIL, HOST_GET_NUMBER_OF_BEDROOMS_REQUEST, HOST_GET_NUMBER_OF_BEDROOMS_SUCCESS, HOST_GET_NUMBER_OF_BEDROOMS_FAIL, HOST_GET_SEARCH_RESULTS_REQUEST, HOST_GET_SEARCH_RESULTS_SUCCESS, HOST_GET_SEARCH_RESULTS_FAIL, HOST_GET_SUITED_RESULTS_REQUEST, HOST_GET_SUITED_RESULTS_SUCCESS, HOST_GET_SUITED_RESULTS_FAIL } from "../constants/hostConstants";

export const hostAddPlace = (title, image, price, description, country, address, season, selectedValue, airConditioning, breakfast, food, cableTv, wifi, freeParking, selectedValueOfBed, numberOfBedrooms ) => async (dispatch, getState) => {
    try {
        dispatch({ type: HOST_ADD_REQUEST });

        const {userLogin: {userInfo}} = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

         await axios.post("/host/create", {title, userInfo, image, price, description, country, address, season, selectedValue, airConditioning, breakfast, food, cableTv, wifi, freeParking, selectedValueOfBed, numberOfBedrooms }, config)

        dispatch({
            type: HOST_ADD_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type:HOST_ADD_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const hostEmpty = () => (dispatch) => {
    dispatch({ type: HOST_EMPTY })
}

export const hostGetPlaces = () => async(dispatch) => {
    try {
        dispatch({ type: HOST_GET_REQUEST })

    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    }

    const {data} = await axios.get("/host", config)

    dispatch({
        type: HOST_GET_SUCCESS,
        payload: data
    })
        
    } catch (error) {
        dispatch({
            type: HOST_GET_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
    

}

export const hostedPlaceGetDetails = (id) => async(dispatch) => {
    try {
        dispatch({ type: HOSTED_PLACE_DETAILS_REQUEST })

    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    }

    const {data} = await axios.get(`/host/${id}`, config)

    dispatch({
        type: HOSTED_PLACE_DETAILS_SUCCESS,
        payload: data
    })
        
    } catch (error) {
        dispatch({
            type: HOSTED_PLACE_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const hostedPlaceRatingAction = (id, review) => async(dispatch, getState) => {
    try {
        dispatch({ type: HOSTED_PLACE_RATING_REQUEST })

        const {userLogin: {userInfo}} = getState()

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization: `Bearer ${userInfo.token}`
            
        }
    }

     await axios.post(`/host/${id}/reviews`, review, config)

    dispatch({
        type: HOSTED_PLACE_RATING_SUCCESS,
    })
        
    } catch (error) {
        dispatch({
            type: HOSTED_PLACE_RATING_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const hostedPlaceGetTopRatedDetails = () => async(dispatch) => {
    try {
        dispatch({ type: HOST_GET_TOP_RATED_REQUEST })

    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    }

    const {data} = await axios.get(`/host/search`, config)

    dispatch({
        type: HOST_GET_TOP_RATED_SUCCESS,
        payload: data
    })
        
    } catch (error) {
        dispatch({
            type: HOST_GET_TOP_RATED_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const hostedPlaceGetLowPriceDetails = () => async(dispatch) => {
    try {
        dispatch({type: HOST_GET_TOP_RATED_RESET})

        dispatch({ type: HOST_GET_LOW_PRICE_REQUEST })
        dispatch({ type: HOST_GET_TOP_RATED_REQUEST })

    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    }

    const {data} = await axios.get(`/host/lowprice`, config)

    dispatch({type: HOST_GET_LOW_PRICE_SUCCESS})

    dispatch({
        type: HOST_GET_TOP_RATED_SUCCESS,
        payload: data
    })
        
    } catch (error) {
        dispatch({
            type: HOST_GET_LOW_PRICE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const hostedPlaceGetHighPriceDetails = () => async(dispatch) => {
    try {
        dispatch({type: HOST_GET_TOP_RATED_RESET})

        dispatch({ type: HOST_GET_HIGH_PRICE_REQUEST })
        dispatch({ type: HOST_GET_TOP_RATED_REQUEST })

    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    }

    const {data} = await axios.get(`/host/highprice`, config)

    dispatch({type: HOST_GET_HIGH_PRICE_SUCCESS})

    dispatch({
        type: HOST_GET_TOP_RATED_SUCCESS,
        payload: data
    })
        
    } catch (error) {
        dispatch({
            type: HOST_GET_HIGH_PRICE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const hostedPlaceGetNumberOfBedroomsDetails = () => async(dispatch) => {
    try {
        dispatch({type: HOST_GET_TOP_RATED_RESET})

        dispatch({ type: HOST_GET_NUMBER_OF_BEDROOMS_REQUEST })
        dispatch({ type: HOST_GET_TOP_RATED_REQUEST })

    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    }

    const {data} = await axios.get(`/host/bedrooms`, config)

    dispatch({type: HOST_GET_NUMBER_OF_BEDROOMS_SUCCESS})

    dispatch({
        type: HOST_GET_TOP_RATED_SUCCESS,
        payload: data
    })
        
    } catch (error) {
        dispatch({
            type: HOST_GET_NUMBER_OF_BEDROOMS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const hostedPlaceGetSearchResultsDetails = (country) => async(dispatch) => {
    try {
        dispatch({type: HOST_GET_TOP_RATED_RESET})

        dispatch({ type: HOST_GET_SEARCH_RESULTS_REQUEST })
        dispatch({ type: HOST_GET_TOP_RATED_REQUEST })

    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    }

    const {data} = await axios.get(`/host/searchCountry?keyword=${country}`, config)

    dispatch({type: HOST_GET_SEARCH_RESULTS_SUCCESS})

    dispatch({
        type: HOST_GET_TOP_RATED_SUCCESS,
        payload: data
    })
        
    } catch (error) {
        dispatch({
            type: HOST_GET_SEARCH_RESULTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const hostedPlaceGetSuitedResultsDetails = (openSeason) => async(dispatch) => {
    try {
        dispatch({type: HOST_GET_TOP_RATED_RESET})

        dispatch({ type: HOST_GET_SUITED_RESULTS_REQUEST })
        dispatch({ type: HOST_GET_TOP_RATED_REQUEST })

    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    }

    const {data} = await axios.get(`/host/suited?keyword=${openSeason}`, config)

    dispatch({type: HOST_GET_SUITED_RESULTS_SUCCESS})

    dispatch({
        type: HOST_GET_TOP_RATED_SUCCESS,
        payload: data
    })
        
    } catch (error) {
        dispatch({
            type: HOST_GET_SUITED_RESULTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}