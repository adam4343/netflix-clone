import { FaRegHeart } from "react-icons/fa";
import { Review as TypeReview } from "../pages/movie/TypeReviews";
import { FaRegComments } from "react-icons/fa";
import { useState } from "react";

export default function Review({ review }: { review: TypeReview }) {
  const [countLikes, setCountLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [clickedComments, setClickedComments] = useState(false);
  function incrementLikes() {
    setCountLikes(1);
  }

  function removeLike() {
    setCountLikes(0);
  }
  return (
    <div className="flex   flex-col ">
      <div className="flex justify-center items-center gap-5">
        <div className="">
          <h2 className="text-[22px] mb-1 text-white ">{review.author}</h2>
          <p className="text-gray-400">{review.content.slice(0, 450)}.</p>
          <div className="flex  justify-between">
            <div>Like</div>
            <div className="flex gap-5 items-center ">
              <div className="flex gap-2 items-center">
                {countLikes === 0 ? (
                  <FaRegHeart
                    onClick={incrementLikes}
                    className="cursor-pointer text-gray-300"
                  />
                ) : (
                  <FaRegHeart
                    onClick={removeLike}
                    className="cursor-pointer text-red-500"
                  />
                )}

                <p className="text-white">{countLikes}</p>
              </div>
              <div className="flex gap-2 items-center">
                <FaRegComments
                  onClick={() => {
                    setClickedComments(true);
                  }}
                  className="text-gray-300 cursor-pointer"
                />
                <p className="text-white">{comments}</p>
              </div>
            </div>
          </div>
        </div>

        <img
          className="max-w-[80px]  w-full h-full rounded "
          src="../../public/klipartz.com(7).png"
          alt="user-image"
        />
      </div>
      {clickedComments ? (
        <form
          action="#"
          className="flex justify-between gap-5 mb-[15px] mt-[15px] "
        >
          <textarea
            className="bg-black border h-[50px] border-gray-300 text-white w-full rounded outline-none p-2"
            name=""
            id="write-text"
          ></textarea>
          <button
            onClick={() => {
              setClickedComments(false);
            }}
            className="text-white border   border-red-500 px-5 py-3 rounded-[10px]"
          >
            Post
          </button>
        </form>
      ) : (
        <></>
      )}
    </div>
  );
}
