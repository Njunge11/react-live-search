import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import publicRuntimeConfig from "../../src/config";
import queryMovie from "../../src/util";
import withLayout from "../../components/Layout";
import BackButton from "../../components/BackButton";
import MovieLengthDetails from "../../components/MovieLengthDetails";
import MovieTitle from "../../components/MovieTitle";
import MoviePlot from "../../components/MoviePlot";
import MovieRatings from "../../components/MovieRatings";
import MovieParticulars from "../../components/MovieParticulars";
import Poster from "../../components/Poster";

function Test() {
  const [movie, setMovie] = useState([]);
  const [loader, setLoader] = useState([]);
  const router = useRouter();
  const id = router.query.id;
  const apiKey = publicRuntimeConfig.apiKey;
  const url = `${publicRuntimeConfig.apiURL}?i=${id}&apikey=${apiKey}`;
  useEffect(() => {
    setLoader(true);
    async function fetchMovieDetails() {
      const result = await queryMovie(url, 2);
      setLoader(false);
      setMovie(result);
    }
    fetchMovieDetails();
  }, [setMovie, setLoader]);
  if (!loader) {
    console.log("movie details ", movie);
    return (
      <div className="movie-details">
        <BackButton />
        <div className="col-width">
          <MovieLengthDetails movie={movie} />
          <MovieTitle title={movie.Title} />
          <MovieRatings ratings={movie.Ratings} />
          <MoviePlot plot={movie.Plot} />
          <MovieParticulars movie={movie} />
        </div>
        <Poster posterImage={movie.Poster} />
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
}
export default withLayout(Test);
