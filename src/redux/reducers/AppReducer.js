
import { GET_WINNERS_DATA_SUCCEEDED, SET_UNIQUE_Categories, SET_UNIQUE_YEARS, SET_WINNERS_FILTERED_DATA} from "../../constants/appConstants";
import { initialState } from "./initialState";
import { cloneDeep } from "lodash";

const AppReducer = (state = initialState.AppReducer, action) => {
    switch (action.type) {
        case GET_WINNERS_DATA_SUCCEEDED:
            return {
                ...state,
                prizeWinners: action.data,
                clonePrizeWinners: cloneDeep(action.data)
            };
        case SET_WINNERS_FILTERED_DATA:
            return {
                ...state,
                prizeWinners: action.data,
            };
        case SET_UNIQUE_YEARS:
            return {
                ...state,
                winneryears: action.data
            }
        case SET_UNIQUE_Categories:
            return {
                ...state,
                winnerCategories: action.data
            }
        default:
            return state;
    }
};

export default AppReducer;
