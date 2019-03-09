import {createStore} from 'redux';
import {synthReducer} from './reducers';

export default createStore(synthReducer);
