import { IoMdAddCircleOutline } from "react-icons/io";
import { CgPlayButtonR } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useMovieInfo } from "./useMovieInfo";
import { IoShareSocialOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { useToken } from "../Login/useToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useWatchList } from "../accountspage/WatchList/useWatchList";
export default function MovieComponent() {
  const { movie } = useMovieInfo();
  const { token } = useToken();
  const navigate = useNavigate();
  const { addToWatchList } = useWatchList();

  return (
    <section className="h-[662px] w-screen relative overflow-hidden bg-red-500 ">
      <span className="w-full h-[10rem] bottom-0 left-0 bg-gradient-to-b from-transparent to-black absolute z-10" />
      <img
        className="w-full h-full object-cover brightness-75"
        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path})`}
        alt="hero-image"
      />
      <div className="p-[32px]  absolute bottom-16 left-0 w-full">
        <div className="max-w-[1392px] mx-auto ">
          <div>
            <div className=" text-white font-medium max-w-xl">
              <h1 className="mb-5  font-bold text-[31px]">{movie?.title}</h1>
              <p className="text-gray-300">{movie?.overview}</p>
            </div>
            <div className="flex justify-between">
              <div className="flex items-start mt-5 gap-5 ">
                <Link
                  to={"#"}
                  className="py-2 px-4 text-white bg-red-500 rounded flex items-center justify-center gap-2  z-10"
                >
                  <CgPlayButtonR className="text-white" />
                  <p>Continue Watching</p>
                </Link>
                <button
                  className="
                  text-white
            min-h-[38px] max-h-[40px] py-[7px] px-[15px] z-10  bg-transaprent 
            border-2 border-gray-400 rounded 
            flex items-center justify-center gap-2
           
            "
                  onClick={() => {
                    if (!token) {
                      toast.error("You haven't logged in to your account");
                    } else {
                      addToWatchList(movie);
                    }
                  }}
                >
                  <IoMdAddCircleOutline />
                  <p>AddWatchList</p>
                </button>
              </div>
              <div className="flex items-start mt-5 gap-5 ">
                <Link
                  to={"#"}
                  className="py-2 px-4  bg-black border text-white  border-gray-600 rounded flex items-center justify-center gap-2  z-10"
                >
                  <FiDownload />
                  <p>Download</p>
                </Link>
                <Link
                  to={"#"}
                  className="
                  py-2 px-4  bg-black border text-white  border-gray-600 rounded flex items-center justify-center gap-2  z-10
           
            "
                >
                  <IoShareSocialOutline />
                  <p>Share</p>
                </Link>
                <Link
                  to={"#"}
                  className="
                  py-2 px-4  bg-black border text-white  border-gray-600 rounded flex items-center justify-center gap-2  z-10
           
            "
                >
                  <AiOutlineLike />
                  <p>Like</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
