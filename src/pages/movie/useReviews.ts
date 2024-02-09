import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { API_TOKEN } from "../../utils/constants";
import { Review, ReviewsApiResponse } from "./TypeReviews";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

export function useReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  function incrementPage() {
    setCurrentPage((key) => key + 1);
  }

  useEffect(() => {
    if (!movieId) return;
    getReviews(movieId, currentPage).then((data) => {
      if (!data) return;
      setReviews([...reviews, ...data.results]);
    });
  }, [movieId, currentPage]);

  return {
    reviews: reviews,
    loadMore: incrementPage,
  };
}

async function getReviews(movieId: string, currentPage: number) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=${currentPage}`;

  try {
    const response = await axios.get<ReviewsApiResponse>(url, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
    return response.data;
  } catch (e) {
    if (e instanceof AxiosError) {
      toast.error(e.response?.data.status_message);
      return;
    }
    console.error("Something went wrong while fetching reviews", e);
  }
}
