import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';
import Details from '../Details/Details';

function MovieList(props) {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    // on page load, useEffect is sending over a type of 'FETCH_MOVIES' to index.js 
    // Where root saga is looking for that type.
    // When RootSaga catches 'FETCH_MOVIES', it runs the function fetchAllMovies.

    // We go to the function fetchallmovies.
    // Which gets all the movies from the DB.
    // This function then stores the movies in its payload int the movies reducer.
    useEffect(() => {
        dispatch({ 
            type: 'FETCH_MOVIES' 
        });
    }, []);

    // Go to the <div> key first. Here, I'm running an anonymous function when the User clicks any of these divs/posters. movie.id is sent to my handleClick function. I pass move.id into this handleClick function as 'id'. And can then console log it.
    const handleClick = (id) => {
        console.log('I have been clicked!');
        console.log(id)
        // Now I want the User to CLICK the image they want and get sent to a specific page with the details of that movie.
        history.push(`/details/${id}`)
        // Now move to Details.jsx to figure out how to get the title of that specific id to show.
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} onClick={()=> handleClick(movie.id)}>
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                            <h5>{movie.id}</h5>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;

// I want to make the image clickable so I wrap the image tag in an a tag with href which pushes the user to the the details page that contains the information??? But that doesn't use history push.