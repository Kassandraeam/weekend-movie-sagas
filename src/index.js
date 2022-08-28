import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_DETAILS', fetchDetails)
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }

}

function* fetchDetails(action) {
    try {
        // const response = yield axios.get(`/api/movie`)
        //ok something is wrong with my response then.
        // const response = yield axios.get(`api/movie/details/${action.payload}`)
        // // const response = yield axios.get(`api/movie/details/${action.payload}`)

        // yield put({
        //     type: 'SET_MOVIES',
        //     payload: response.data
        // })

        let response = yield axios.get(`/api/movie/details/${action.payload}`);
        yield put({
          type: 'SET_MOVIES',
          payload: response.data
        })

        console.log('response data in fetchDetails function.',response.data)
    } catch (err) {
        console.log(action.payload);// coming back with the correct id now.
        console.log('ERR on fetchDetails generator function', err);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}


const detailsForSpecificMovie = (state = [], action) => {
    switch (action.type) {
      case 'SET_MOVIES':
          console.log(action.payload)
        console.log('DetailsForSpecificMovie success');
        return state
      default:
        return state;
    }
  };
// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        detailsForSpecificMovie
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
