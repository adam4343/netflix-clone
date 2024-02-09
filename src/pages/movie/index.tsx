import Header from "../../components/Header";
import { useState } from "react";
import MovieComponent from "./MovieComponent";
import { useMovieInfo } from "./useMovieInfo";
import Reviews from "../../components/Reviews";
import { usePopularMovies } from "../homepage/usePopularMovies";
import SliderPopularMovies from "../../components/SliderPopularMovies";
export default function MoviePage() {
  const { movie } = useMovieInfo();

  const [opened, setOpened] = useState(false);

  return (
    <div className="bg-black overflow-hidden">
      <Header />
      <MovieComponent />
      {/* ---- */}
      <section className="w-screen overflow-hidden bg-black">
        <div className="pl-[32px] pr-[32px] pb-[32px]   ">
          <div className="max-w-[1392px] mx-auto ">
            <div className="flex flex-col ">
              <h2 className="text-white mt-[12px]  text-[31px] font-bold">
                Story line
              </h2>
              <p className="text-gray-300 text-[16px] mb-[12px]">
                Release: {movie?.release_date}
              </p>
              <div className="flex">
                <p className="text-gray-300 text-lg">
                  {movie?.overview?.slice(
                    0,
                    opened ? movie.overview.length : 150
                  )}
                  <span
                    role="button"
                    onClick={() => {
                      setOpened(!opened);
                    }}
                    className="text-red-500 ml-1 cursor-pointer"
                  >
                    {movie?.overview.length <= 150
                      ? null
                      : opened
                      ? "Less"
                      : "More"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---- */}

      {/* ---- */}
      <section>
        <Reviews />
      </section>
      {/* ---- */}
      <section>
        <div className="pl-[32px] pr-[32px] pb-[32px]">
          <div className="max-w-[1392px] mx-auto ">
            <h2 className="text-white text-[32px] mb-[10px]">Similar Movies</h2>
            <SliderPopularMovies />
          </div>
        </div>
      </section>
      {/* ---- */}
    </div>
  );
}
