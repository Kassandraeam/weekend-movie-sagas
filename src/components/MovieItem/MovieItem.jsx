import { useHistory } from 'react-router-dom';


function MovieItem({movie}) {
    const history = useHistory();

    const handleClick = (id) => {
        console.log('I have been clicked!');
        console.log(id)
        // Now I want the User to CLICK the image they want and get sent to a specific page with the details of that movie.
        history.push(`/details/${id}`)
        // Now move to Details.jsx to figure out how to get the title of that specific id to show.
    }

    return(
        <>
        <h3>{movie.title}</h3>
        <img src={movie.poster} onClick={handleClick}/>
        </>
    )
}

export default MovieItem