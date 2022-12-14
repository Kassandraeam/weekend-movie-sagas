import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

// What I need:

/*
On load, I need to hit a listener in the root saga with FETCH_DETAILS
that then runs a generator function that gets me the information for the id that I send as a payload.

That generator function needs to GET information based on the id (its specific key on the database 1 = avatar, 11 = martian etc).
It then needs to send that information to a reducer, the type allows it to know which reducer it's talking to, and the data are the details for that specific movie.
*/


function Details() {

    const params = useParams();
    const movies = useSelector(store => store.movies);
    const dispatch = useDispatch();
    // console.log(`Here is the id of the page of the movie you clicked on: ${params.id}`)


    // When I console log (movie) it's an empty array.
    // After adding useEffect and fetch_movies, I get the entire array. But now I want to only display the information of the id that i selected.
    // Did something similar in the giphy project where the selectedword was put into the url path for the router.get (check gif.router.js)


    // I need to send over the ID to my index, and then GET that information
    useEffect(() => {
        // console.log('dispatch')
        // console.log(params.id);
        // console.log(typeof (params.id)) // string
        // setID(params);
        dispatch({ 
            type: 'FETCH_DETAILS',
            // So FETCH_MOVIES as the type gives me access to all of the movies.
            // So I want my fetchDetails function to get all movies, and then select only the id that I give it?
            payload: params.id
        });
    }, []);

    // console.log(`${movies.data}`);
    // right now this is hardcoded. I need it to change based on id.
    return(
        <>
        <h1>{params.id}</h1>
        <h1>
            Details
        </h1>
        {/* <p>{movies[0].title}</p>
        <img src={movies[0].poster}/>
        <p>{movies[0].description}</p> */}
    
        </>
    )
}

export default Details;
// > Hint : You can make a GET request for a specific movie. Remember `req.params` and `:id`?

// When a user clicks a specific poster (this id) they need to be brought to the details page for THAT movie and it should display:

// title.id
// description.id
// image.id

//back button.

// req.params
// :id


/*

####### search.jsx #######
import axios from "axios";
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import './Search.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function Search() {
    const history = useHistory();
    const dispatch = useDispatch()

    const [searchWord, setSearchWord] = useState('')

    const handleSubmit = () => {
        console.log('in click');
        console.log(searchWord);
        dispatch({
            type: 'API_GET',
            payload: searchWord
        })
    }

    const handleFavorites = () => {
        console.log('SEND TO FAVORITES PAGE');
        history.push('/favorites');
    };

    const handleChange = (event) => {
        setSearchWord(event.target.value)
    }

    return (
        <>
            <div className="padding">
                <TextField id="standard-basic" type="text" label="GIF"
                    onChange={handleChange}
                    value={searchWord} />
                <Button variant="contained" color="secondary" onClick={handleSubmit}>SUBMIT</Button>
                <span className="right"><Button variant="contained" color="secondary" onClick={handleFavorites}>Favorites</Button></span>
            </div>
        </>
    )
}

export default Search
---------------------------------
####### gif.router.js #######
const { default: axios } = require('axios');
const express = require('express');
const pool = require('../modules/pool');
require('dotenv').config();


const router = express.Router();

router.get('/:searchWord', (req, res) => {
    let searchWord = req.params.searchWord;
    console.log(searchWord);
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${searchWord}&limit=9`)
    .then(response => {
        console.log(response.data);
        res.send(response.data);
    })
    .catch(err => {
        console.log(err);
        res.sendStatus(500)
    })
  });

module.exports = router;

*/