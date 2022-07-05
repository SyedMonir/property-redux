import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { itemReducer } from '../feature/propertyReducer';

const store = createStore(itemReducer, applyMiddleware(thunk));
export default store;
