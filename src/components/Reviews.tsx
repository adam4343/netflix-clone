import { useReviews } from "../pages/movie/useReviews";
import Review from "./Review";
import { Link } from "react-router-dom";

export default function Reviews() {
  const { reviews, loadMore } = useReviews();

  return (
    <section className="bg-black w-screen ">
      <div className="p-[32px] ">
        <div className="max-w-[1392px] mx-auto">
          <div className="flex gap-[80px]">
            {/* Reviews */}
            <div>
              <h2 className="text-white mb-[22px] text-[32px]">
                Popular Discusion
              </h2>
              <div className="w-full">
                {reviews?.map((review) => (
                  <Review review={review} key={review.id} />
                ))}
                <div className="flex justify-center mt-5">
                  <button
                    onClick={loadMore}
                    className="text-white border  mx-auto w-fit  border-red-500 px-10 py-3 rounded-[10px]"
                  >
                    Load More
                  </button>
                </div>
              </div>
            </div>
            {/* Banner  */}
            <div className="p-[32px] max-h-[380px] h-full max-w-[320px] w-full rounded-[20px] flex flex-col items-center gap-5 justify-center bg-custom">
              <h2 className="text-white text-4xl text-center font-bold">
                Want to make a movie influencer profile?
              </h2>
              <Link
                to={"#"}
                className="text-white bg-red-500 py-2 px-4 rounded"
              >
                Create your profile now
              </Link>
            </div>
            {/* End Banner  */}
          </div>
        </div>
      </div>
    </section>
  );
}
