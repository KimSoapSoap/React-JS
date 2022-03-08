import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    console.log(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <h1>
        <div>
          <a target="_blacnk" href={movie.url}>
            {movie.title}
          </a>
        </div>
      </h1>

      <img src={movie.large_cover_image} />
    </div>
  );
}

export default Detail;
