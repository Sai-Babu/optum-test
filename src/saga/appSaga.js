import axios from "axios";
import { put, select, takeEvery, takeLatest } from "redux-saga/effects";

import { getPrizeWinnerDataSucceeded, setFilteredData, setUniqueCategories, setUniqueYears} from "../actions/AppAction";
import { GET_WINNERS_DATA, ON_FILTER_APPLIED } from "../constants/appConstants";


function* getPrizeWinnersData(){
    try{
        const response = yield axios.get("https://api.nobelprize.org/v1/prize.json")
        if(response && response?.data){
            yield put(getPrizeWinnerDataSucceeded(response?.data.prizes));
            
            const years_list = [...new Set(response?.data.prizes.map(item => item.year))];
            yield put(setUniqueYears(years_list));

            const categories_list = [...new Set(response?.data.prizes.map(item => item.category))];
            yield put(setUniqueCategories(categories_list));
        }

    }catch(e){

    }
}

function* onFilterApplied({filterType, filterValue}){
    try{
        const { clonePrizeWinners, prizeWinners } = yield select(
            (state) => state.AppReducer
        );

        let filtered_data = [];
        if(filterType === "year"){
            filtered_data = clonePrizeWinners.filter(p=> p.year === filterValue);            
        }
        if(filterType === "category"){
            filtered_data = clonePrizeWinners.filter(p=> p.category === filterValue);
        }
        yield put(setFilteredData(filtered_data));
    }
    catch(e){

    }
}

function* appSaga() {
    yield takeLatest(GET_WINNERS_DATA, getPrizeWinnersData);
    yield takeEvery(ON_FILTER_APPLIED, onFilterApplied);
}
export default appSaga;