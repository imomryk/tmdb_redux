import styles from "./MovieCard.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const MovieCard = ({
  genre_ids,
  id,
  title,
  overview,
  poster_path,
  release_date,
  vote_average,
}) => {
  const genres = useSelector((state) => state.genres);

  return (
    <div className={styles.movie_card}>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt="Movie poster"
      />
      <div className="info_block">
        <div className="info_block__header">
          <h2>{title}</h2>
          <div className="info_block__voteBlock">
            <img src="" alt="" />
            <div className="info_block__voteAverage">{vote_average}</div>
          </div>
        </div>
        <div className="info_block__overview">{overview}</div>
        <div className="info_block__releaseDate">{release_date}</div>
        {genres ? (
          genres
            .filter((genre) => genre_ids.includes(genre.id))
            .map((genre) => {
              return <span key={genre.id}>{genre.name}</span>;
            })
        ) : (
          <span>Loading</span>
        )}
        <Link to={`/details/${id}`}>
          <button>Details</button>
        </Link>

        <button >Add to watchlist</button>
      </div>
    </div>
  );
};
