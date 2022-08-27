import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details';
import MovieItem from '../MovieItem/MovieItem';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>

        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route path="/details/:id">
          <Details />
        </Route>

        {/* Add Movie page */}
        <Route path="/MovieItem">
          <MovieItem />
        </Route>

      </Router>
    </div>
  );
}


export default App;
