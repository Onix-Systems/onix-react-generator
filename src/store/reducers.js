import { combineReducers } from 'redux';
import reducers from './translates/reducers';

const rootReducer = combineReducers({
  translates: reducers
});

export default rootReducer;
