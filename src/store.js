import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
    movieListReducer
} from './reducers/movieReducers.js';
import {
    movieDetailReducers
} from './reducers/movieDetailReducers';


const reducer = combineReducers({
    movieList: movieListReducer,
    movieDetail: movieDetailReducers

});


const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
