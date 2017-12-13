import { combineReducers } from 'redux';
import ReducerNameSearch from './reducersNameSearch';

const rootReducer = combineReducers({
  nameSearch: ReducerNameSearch,
});

export default rootReducer;
