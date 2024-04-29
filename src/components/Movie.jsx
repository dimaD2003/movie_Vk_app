import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres, large_cover_image, date_uploaded,rating, language }) {
  return (
    <div >
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: {
            id,
            year,
            title,
            summary,
            poster,
            genres,
            large_cover_image,
            date_uploaded,
            rating, 
            language

          },
        }}
      >
        
        <div className="movies_item">
          
          <div className="movies_item_img">
            <img src={poster} alt={title} title={title} />
          </div>
          <div className="movies_descr">
          <h3 className="movies_item_title">{title}</h3>
          <h5 className="movies_item_year">{year}</h5>
          <ul className="movies_item_genres">
            {genres.map((item, ind) => {
              return (
                <li key={ind} className="movies_item_genres_item">
                  {item}
                </li>
              );
            })}
          </ul>
          <p className="movies_item_summury">{summary.slice(0, 140)}...</p>
        </div></div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  date_uploaded: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  large_cover_image: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
