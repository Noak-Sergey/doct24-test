import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import { itemsReducer } from './items-reducer';

const rootReducer = combineReducers({
    items: itemsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))