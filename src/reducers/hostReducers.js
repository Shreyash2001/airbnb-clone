import { HOSTED_PLACE_DETAILS_FAIL, HOSTED_PLACE_DETAILS_REQUEST, HOSTED_PLACE_DETAILS_SUCCESS, HOSTED_PLACE_RATING_FAIL, HOSTED_PLACE_RATING_REQUEST, HOSTED_PLACE_RATING_RESET, HOSTED_PLACE_RATING_SUCCESS, HOST_ADD_FAIL, HOST_ADD_REQUEST, HOST_ADD_SUCCESS, HOST_EMPTY, HOST_GET_FAIL, HOST_GET_REQUEST, HOST_GET_SUCCESS, HOST_GET_TOP_RATED_FAIL, HOST_GET_TOP_RATED_REQUEST, HOST_GET_TOP_RATED_RESET, HOST_GET_TOP_RATED_SUCCESS, HOST_GET_LOW_PRICE_SUCCESS, HOST_GET_LOW_PRICE_FAIL, HOST_GET_LOW_PRICE_REQUEST, HOST_GET_HIGH_PRICE_REQUEST, HOST_GET_HIGH_PRICE_SUCCESS, HOST_GET_HIGH_PRICE_FAIL, HOST_GET_NUMBER_OF_BEDROOMS_REQUEST, HOST_GET_NUMBER_OF_BEDROOMS_SUCCESS, HOST_GET_NUMBER_OF_BEDROOMS_FAIL, HOST_GET_SEARCH_RESULTS_REQUEST, HOST_GET_SEARCH_RESULTS_SUCCESS, HOST_GET_SEARCH_RESULTS_FAIL, HOST_GET_SUITED_RESULTS_REQUEST, HOST_GET_SUITED_RESULTS_SUCCESS, HOST_GET_SUITED_RESULTS_FAIL, HOST_GET_SEARCH_RESULTS_FOR_DATES_REQUEST, HOST_GET_SEARCH_RESULTS_FOR_DATES_SUCCESS, HOST_GET_SEARCH_RESULTS_FOR_DATES_FAIL, HOSTED_PLACE_BOOKING_REQUEST, HOSTED_PLACE_BOOKING_SUCCESS, HOSTED_PLACE_BOOKING_FAIL, HOSTED_PLACE_BOOKING_RESET, HOST_GET_SEARCH_HEADER_RESULTS_RESET, HOSTED_PLACE_UNIQUE_STAYS_SUCCESS, HOSTED_PLACE_UNIQUE_STAYS_FAIL, HOSTED_PLACE_UNIQUE_STAYS_RESET, HOSTED_PLACE_UNIQUE_STAYS_REQUEST, HOSTED_PLACE_ENTIRE_HOMES_REQUEST, HOSTED_PLACE_ENTIRE_HOMES_SUCCESS, HOSTED_PLACE_ENTIRE_HOMES_FAIL, HOSTED_PLACE_ENTIRE_HOMES_RESET, HOSTED_PLACE_COTTAGES_REQUEST, HOSTED_PLACE_COTTAGES_SUCCESS, HOSTED_PLACE_COTTAGES_FAIL, HOSTED_PLACE_COTTAGES_RESET, HOSTED_PLACE_UPDATE_DETAILS_REQUEST, HOSTED_PLACE_UPDATE_DETAILS_SUCCESS, HOSTED_PLACE_UPDATE_DETAILS_FAIL, HOSTED_PLACE_CREATEDBY_REQUEST, HOSTED_PLACE_CREATEDBY_SUCCESS, HOSTED_PLACE_CREATEDBY_FAIL, HOSTED_PLACE_DELETE_REQUEST, HOSTED_PLACE_DELETE_SUCCESS, HOSTED_PLACE_DELETE_FAIL } from "../constants/hostConstants"

export const hostAddReducer = (state = {}, action) => {
    switch (action.type) {
        case HOST_ADD_REQUEST:
            return { loading: true }
        case HOST_ADD_SUCCESS:
            return { loading: false, success: true }
        case HOST_ADD_FAIL:
            return { loading: false, error: action.payload }
        case HOST_EMPTY:
            return {}
        default:
            return state
    }
}

export const hostGetReducer = (state = { allHostPlaces: [] }, action) => {
    switch (action.type) {
        case HOST_GET_REQUEST:
            return { loading: true }
        case HOST_GET_SUCCESS:
            return { loading: false, allHostPlaces: action.payload }
        case HOST_GET_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const hostGetSearchHeaderResultReducer = (state = { searchResultPlaces: [] }, action) => {
    switch (action.type) {
        case HOST_GET_SEARCH_RESULTS_REQUEST:
            return { loading: true }
        case HOST_GET_SEARCH_RESULTS_SUCCESS:
            return { loading: false, searchResultPlaces: action.payload }
        case HOST_GET_SEARCH_RESULTS_FAIL:
            return { loading: false, error: action.payload }
        case HOST_GET_SEARCH_HEADER_RESULTS_RESET:
            return { searchResultPlaces:[] }

        default:
            return state
    }
}


export const hostUniqueStaysReducer = (state = { uniqueStaysPlaces: [] }, action) => {
    switch (action.type) {
        case HOSTED_PLACE_UNIQUE_STAYS_REQUEST:
            return { loading: true }
        case HOSTED_PLACE_UNIQUE_STAYS_SUCCESS:
            return { loading: false, uniqueStays: action.payload }
        case HOSTED_PLACE_UNIQUE_STAYS_FAIL:
            return { loading: false, error: action.payload }
        case HOSTED_PLACE_UNIQUE_STAYS_RESET:
            return { uniqueStaysPlaces:[] }

        default:
            return state
    }
}

export const hostEntireHomesReducer = (state = { entireHomesPlaces: [] }, action) => {
    switch (action.type) {
        case HOSTED_PLACE_ENTIRE_HOMES_REQUEST:
            return { loading: true }
        case HOSTED_PLACE_ENTIRE_HOMES_SUCCESS:
            return { loading: false, entireHomesPlaces: action.payload }
        case HOSTED_PLACE_ENTIRE_HOMES_FAIL:
            return { loading: false, error: action.payload }
        case HOSTED_PLACE_ENTIRE_HOMES_RESET:
            return {  entireHomesPlaces:[] }

        default:
            return state
    }
}
export const hostCottagesReducer = (state = { cottagesPlaces: [] }, action) => {
    switch (action.type) {
        case HOSTED_PLACE_COTTAGES_REQUEST:
            return { loading: true }
        case HOSTED_PLACE_COTTAGES_SUCCESS:
            return { loading: false, cottagesPlaces: action.payload }
        case HOSTED_PLACE_COTTAGES_FAIL:
            return { loading: false, error: action.payload }
        case HOSTED_PLACE_COTTAGES_RESET:
            return { cottagesPlaces:[] }

        default:
            return state
    }
}

export const hostedPlaceDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case HOSTED_PLACE_DETAILS_REQUEST:
            return { loading: true }
        case HOSTED_PLACE_DETAILS_SUCCESS:
            return { loading: false, placeDetails: action.payload }
        case HOSTED_PLACE_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const hostedPlaceRatingReducer = (state = {}, action) => {
    switch (action.type) {
        case HOSTED_PLACE_RATING_REQUEST:
            return { loading: true }
        case HOSTED_PLACE_RATING_SUCCESS:
            return { loading: false, success: true }
        case HOSTED_PLACE_RATING_FAIL:
            return { loading: false, error: action.payload }
        case HOSTED_PLACE_RATING_RESET:
            return {}

        default:
            return state
    }
}

export const hostedPlaceTopRatedReducer = (state = { topRatedPlace: [] }, action) => {
    switch (action.type) {
        case HOST_GET_TOP_RATED_REQUEST:
            return { loading: true }
        case HOST_GET_TOP_RATED_SUCCESS:
            return { loading: false, topRatedPlace: action.payload }
        case HOST_GET_TOP_RATED_FAIL:
            return { loading: false, error: action.payload }
        case HOST_GET_TOP_RATED_RESET:
            return { topRatedPlace: [] }

        default:
            return state
    }
}

export const hostedPlaceLowPriceReducer = (state = {}, action) => {
    switch (action.type) {
        case HOST_GET_LOW_PRICE_REQUEST:
            return { loading: true }
        case HOST_GET_LOW_PRICE_SUCCESS:
            return { loading: false, success: true }
        case HOST_GET_LOW_PRICE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const hostedPlaceHighPriceReducer = (state = {}, action) => {
    switch (action.type) {
        case HOST_GET_HIGH_PRICE_REQUEST:
            return { loading: true }
        case HOST_GET_HIGH_PRICE_SUCCESS:
            return { loading: false, success: true }
        case HOST_GET_HIGH_PRICE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const hostedPlaceNumberOfBedroomsReducer = (state = {}, action) => {
    switch (action.type) {
        case HOST_GET_NUMBER_OF_BEDROOMS_REQUEST:
            return { loading: true }
        case HOST_GET_NUMBER_OF_BEDROOMS_SUCCESS:
            return { loading: false, success: true }
        case HOST_GET_NUMBER_OF_BEDROOMS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const hostedPlaceSearchResultsReducer = (state = {}, action) => {
    switch (action.type) {
        case HOST_GET_SEARCH_RESULTS_REQUEST:
            return { loading: true }
        case HOST_GET_SEARCH_RESULTS_SUCCESS:
            return { loading: false, success: true }
        case HOST_GET_SEARCH_RESULTS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const hostedPlaceSearchResultsForDatesReducer = (state = {searchedHostedPlaces: []}, action) => {
    switch (action.type) {
        case HOST_GET_SEARCH_RESULTS_FOR_DATES_REQUEST:
            return { loading: true }
        case HOST_GET_SEARCH_RESULTS_FOR_DATES_SUCCESS:
            return { loading: false, searchedHostedPlaces: action.payload }
        case HOST_GET_SEARCH_RESULTS_FOR_DATES_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const hostedPlaceSuitedResultsReducer = (state = {}, action) => {
    switch (action.type) {
        case HOST_GET_SUITED_RESULTS_REQUEST:
            return { loading: true }
        case HOST_GET_SUITED_RESULTS_SUCCESS:
            return { loading: false, success: true }
        case HOST_GET_SUITED_RESULTS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const hostedPlaceBookingReducer = (state = { summaryOfPlace: {} }, action) => {
    switch (action.type) {
        case HOSTED_PLACE_BOOKING_REQUEST:
            return { loading: true }
        case HOSTED_PLACE_BOOKING_SUCCESS:
            return { loading: false, success: true, summaryOfPlace: action.payload }
        case HOSTED_PLACE_BOOKING_FAIL:
            return { loading: false, error: action.payload }
        case HOSTED_PLACE_BOOKING_RESET:
            return { summaryOfPlace: {} }

        default:
            return state
    }
}

export const hostedPlaceCreatedByReducer = (state = {userCreated: []}, action) => {
    switch (action.type) {
        case HOSTED_PLACE_CREATEDBY_REQUEST:
            return { loading: true }
        case HOSTED_PLACE_CREATEDBY_SUCCESS:
            return { loading: false, userCreated: action.payload }
        case HOSTED_PLACE_CREATEDBY_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const hostedPlaceUpdateDetailsReducer = (state = {updatedHostedPlaceResult: []}, action) => {
    switch (action.type) {
        case HOSTED_PLACE_UPDATE_DETAILS_REQUEST:
            return { loading: true }
        case HOSTED_PLACE_UPDATE_DETAILS_SUCCESS:
            return { loading: false, updatedHostedPlaceResult: action.payload, success: true }
        case HOSTED_PLACE_UPDATE_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const hostedPlaceDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case HOSTED_PLACE_DELETE_REQUEST:
            return { loading: true }
        case HOSTED_PLACE_DELETE_SUCCESS:
            return { loading: false, success: true }
        case HOSTED_PLACE_DELETE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}