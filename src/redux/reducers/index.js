import {combineReducers} from 'redux';

import { productReducer,selectedProuductReducer } from './productReducers';

const reducers = combineReducers({
    allProducts:productReducer,
    product:selectedProuductReducer,
});

export default reducers;
