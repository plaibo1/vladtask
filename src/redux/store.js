import { applyMiddleware, combineReducers, createStore } from "redux";
import tableReducer from "./table-reducer";
import middleware from 'redux-thunk';

let reducers = combineReducers({
    tablePage: tableReducer,
    // .... for others reducers
});

const store = createStore(reducers, applyMiddleware(middleware));


export default store;