import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {synthReducer} from './reducers/index';



export default createStore(synthReducer, applyMiddleware(thunk));
