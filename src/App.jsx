import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { MoviesGrid } from "./components/MoviesGrid";
import { FaFilm } from 'react-icons/fa';

export function App() {
  return (
    <Router>
      <header>
      <div className={styles.logo}>
        <Link to='/'>
      <FaFilm className={styles.icono}/> 
        <h1 className={styles.title}>Movies</h1>
        </Link>
        </div>
      </header>
      <main>
        <Switch>
          <Route exact path="/movies/:movieId">
            <MovieDetails />
          </Route>
          <Route path="/">
            <MoviesGrid />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
