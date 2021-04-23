import { combineReducers } from 'redux';
import { planesReducer } from './planesReducer';

const rootReducer = combineReducers({
  planesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
