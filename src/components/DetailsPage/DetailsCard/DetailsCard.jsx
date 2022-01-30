import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FavoritesButton from "../../FavoritesButton";

export const DetailsCard = () => {
  const details = useSelector((state) => state.details);
  const {
    id,
    genres,
    title,
    overview,
    poster_path,
    production_companies,
    release_date,
    tagline,
    production_countries,
    imdb_id,
  } = details;
  return (
    <div className="detailsCard">
      <div className="detailsCard_header">
        <Link to={"/"}>Main page</Link>
        <h2>{title}</h2>
      </div>
      <FavoritesButton id={id} title={title}/>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
      <div className="detailsCard_infoBlock">
        {!!tagline && <h4>{tagline}</h4>}
        <table>
          <tbody>
            <tr>
              <th>Release date:</th>
              <td>{release_date}</td>
            </tr>
            <tr>
              <th>Production countries:</th>
              <td>
                {production_countries.map((elem) => {
                  return <span key={elem.iso_3166_1}>{elem.iso_3166_1}</span>;
                })}
              </td>
            </tr>
            <tr>
              <th>Genres:</th>
              <td>
                {genres.map((elem) => {
                  return <span key={elem.id}>{elem.name}, </span>;
                })}
              </td>
            </tr>
            <tr>
              <th>Production companies:</th>
              <td>
                {production_companies.map((elem) => {
                  return <span key={elem.id}>{elem.name},</span>;
                })}
              </td>
            </tr>
            <tr>
              <th>Overview:</th>
              <td>{overview}</td>
            </tr>
            <tr>
              <th>IMDB</th>
              <td>
                <a
                  href={`https://www.imdb.com/title/${imdb_id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Link
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
