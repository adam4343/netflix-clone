import { Link } from "react-router-dom";
import { TypeMovies } from "../pages/homepage/usePopularMovies";
import { FaStar } from "react-icons/fa6";

export default function PopulatMovieCard({ movie }: { movie: TypeMovies }) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="relative max-w-[280px] w-full h-[412px] flex flex-col justify-end  "
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`}
        alt="popular-movie-image"
        className="w-full h-full absolute object-cover z-[-1] rounded-lg "
      />
      <div className="text-white text-[17px] font-bold flex flex-col p-2">
        <h4>{movie.title}</h4>
        <div className="flex items-center gap-1">
          <div className="flex gap-1 items-center justify-center">
            <FaStar className="text-[14px] text-red-500" />
            <p className=" text-[14px]">{movie.vote_average}</p>
          </div>
          <div className="w-[2px] h-[15px] bg-gray-500"></div>
          <p className="font-medium text-[14px] text-gray-500">Movie</p>
        </div>
      </div>
    </Link>
  );
}
