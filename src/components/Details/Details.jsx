import { useDispatch } from 'react-redux'




function Details() {

    const dispatch = useDispatch();

    const handleClick = () => {
        console.log('Handle Click')
    }

    return(
        <>
        <h1>
            Details
            <button onClick={handleClick}>Show details test</button>
        </h1>
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