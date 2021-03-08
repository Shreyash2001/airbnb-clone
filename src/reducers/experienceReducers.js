import { EXPERIENCE_LOCATION_FAIL, EXPERIENCE_LOCATION_REQUEST, EXPERIENCE_LOCATION_SUCCESS, EXPERIENCE_TYPE_FAIL, EXPERIENCE_TYPE_REQUEST, EXPERIENCE_TYPE_SUCCESS } from "../constants/experienceConstants"


export const experienceTypeReducer = (state = {tempData: {}} , action) => {
    switch (action.type) {
        case EXPERIENCE_TYPE_REQUEST:
            return {
                loading: true
            }
        case EXPERIENCE_TYPE_SUCCESS:
            var obj = {...state.tempData};
            var pair = action.payload
            obj = {...obj, ...pair}
            
            return {
                loading: false,
                tempData: obj
            }
        case EXPERIENCE_TYPE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
}

export const experienceLocationReducer = (state = {}, action) => {
    switch (action.type) {
        case EXPERIENCE_LOCATION_REQUEST:
            return {
                loading: true
            }
        case EXPERIENCE_LOCATION_SUCCESS:
            
            return {
                loading: false,
                success: true
            }
        case EXPERIENCE_LOCATION_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
}