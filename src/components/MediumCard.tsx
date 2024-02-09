import { FaStar } from "react-icons/fa6";
import { IMDbPopularSeriesType } from "../pages/homepage/useSeries";

export default function MediumCard({
  seria,
}: {
  seria: IMDbPopularSeriesType;
}) {
  return (
    <div>
      <div className="relative max-w-[280px]  w-full h-[412px] flex flex-col justify-end">
        <img
          src={`https://image.tmdb.org/t/p/w500/${seria.backdrop_path})`}
          alt="popular-movie-image"
          className="w-full h-full absolute object-cover z-[-1] rounded-lg"
        />
        <div className="text-white text-[17px] font-bold flex flex-col p-2">
          <h4>{seria.name}</h4>
          <div className="flex items-center gap-1">
            <div className="flex gap-1 items-center justify-center">
              <FaStar className="text-[14px] text-red-500" />
              <p className=" text-[14px]">{seria.vote_average}</p>
            </div>
            <div className="w-[2px] h-[15px] bg-gray-500"></div>
            <p className="font-medium text-[14px] text-gray-500">Movie</p>
          </div>
        </div>
      </div>
    </div>
  );
}
