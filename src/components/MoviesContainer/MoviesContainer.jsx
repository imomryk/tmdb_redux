import { useSelector } from "react-redux";
import MovieCard from "../MovieCard";
import styles from './MoviesContainer.module.css'

export const MoviesContainer = () => {
  const movies = useSelector((state) => state.movies);
  return (
    <div className={styles.moviesContainer}>
      {movies.map(({genre_ids,id,title,overview,poster_path,release_date,vote_average}) => {
        return(
            <MovieCard
                key={id}
                id={id}
                genre_ids={genre_ids}
                title={title}
                overview={overview}
                poster_path={poster_path}
                release_date={release_date}
                vote_average={vote_average}
            />
        );
      })}
    </div>
  );
};
