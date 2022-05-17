import { GET_WINNERS_DATA, GET_WINNERS_DATA_SUCCEEDED, 
    SET_UNIQUE_YEARS, SET_UNIQUE_Categories, ON_FILTER_APPLIED, SET_WINNERS_FILTERED_DATA} from "../constants/appConstants";



export const getPrizeWinnerData = () => {
    return {
        type: GET_WINNERS_DATA
    };
};

export const getPrizeWinnerDataSucceeded = (data) => {
    return {
        type: GET_WINNERS_DATA_SUCCEEDED,
        data
    };
};

export const setUniqueYears = (data) => {
    return {
        type: SET_UNIQUE_YEARS,
        data
    };
};

export const setUniqueCategories = (data) => {
    return {
        type: SET_UNIQUE_Categories,
        data
    };
};

export const setFilteredData = (data) => {
    return {
        type: SET_WINNERS_FILTERED_DATA,
        data
    };
};

export const onFilterApplied = (filterType, filterValue) => {
    return {
        type: ON_FILTER_APPLIED,
        filterType,
        filterValue
    };
}