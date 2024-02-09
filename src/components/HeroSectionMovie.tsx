import React from "react";
import { CgPlayButtonR } from "react-icons/cg";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { TypeMovies } from "../pages/homepage/usePopularMovies";
export default function HeroSectionMovie({ movie }: { movie: TypeMovies }) {
  return (
    <section className="h-[662px] w-screen relative ">
      <span className="w-full h-[10rem] bottom-0 left-0 bg-gradient-to-b from-transparent to-black absolute z-10" />
      <img
        className="w-full h-full object-cover brightness-75"
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`}
        alt="hero-image"
      />
      <div className="ml-[60px] absolute bottom-16 left-0 text-white font-medium max-w-xl">
        <h1 className="mb-5  font-bold text-[31px]">{movie.title}</h1>
        <p className="text-gray-300">{movie.overview}</p>
        <div className="flex items-start mt-5 gap-5 ">
          <Link
            to={"#"}
            className="py-2 px-4 bg-red-500 rounded flex items-center justify-center gap-2  z-10"
          >
            <CgPlayButtonR className="text-white" />
            <p>Watch Trailer</p>
          </Link>
          <Link
            to={"#"}
            className="
            min-h-[38px] max-h-[40px] py-[7px] px-[15px] z-10  bg-transaprent 
            border-2 border-gray-400 rounded 
            flex items-center justify-center gap-2
           
            "
          >
            <IoMdAddCircleOutline />
            <p>AddWatchList</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
