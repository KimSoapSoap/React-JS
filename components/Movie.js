import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <img src={coverImg} alt={title} />
      <ul>{genres && genres.map((genre) => <li key={genre}>{genre}</li>)}</ul>
      <p>{summary}</p>
    </div>
  );

  Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    gerens: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
}

export default Movie;
