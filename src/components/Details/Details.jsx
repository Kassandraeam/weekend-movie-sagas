import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';



function Details() {

    const params = useParams();
    const [id, setID] = useState('')

    const movies = useSelector(store => store.movies);
    const dispatch = useDispatch();
    // console.log(`Here is the id of the page of the movie you clicked on: ${params.id}`)


    // When I console log (movie) it's an empty array.
    // After adding useEffect and fetch_movies, I get the entire array. But now I want to only display the information of the id that i selected.
    // Did something similar in the giphy project where the selectedword was put into the url path for the router.get (check gif.router.js)
    const handleClick = () => {
        console.log('Handle Click')
        console.log(movies);
    }

    // I need to send over the ID to my index, and then GET that information
    useEffect(() => {
        console.log('dispatch')
        console.log(params.id);
        setID(params.id);
        dispatch({ 
            type: 'FETCH_DETAILS',
            payload: id
        });
    }, []);

    // console.log(`${movies.data}`);
    return(
        <>
        <h1>{id}</h1>
        <h1>
            Details
            <button onClick={handleClick}>Show details test</button>
        </h1>
        <p>{movies.id}</p>
        </>
    )
}

export default Details;

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