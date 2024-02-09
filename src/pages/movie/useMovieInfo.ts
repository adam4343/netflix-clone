import { API_TOKEN } from "../../utils/constants";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Movie as TypeMovie } from "./TypeMovie";

export function useMovieInfo() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<TypeMovie | null>(null);
  useEffect(() => {
    if (!movieId) return;
    loadMovie(movieId).then((res) => {
      setMovie(res?.data);
    });
  }, [movieId]);

  return {
    movie: movie,
  };
}

async function loadMovie(movieId: string) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    return response;
  } catch (error) {
    console.error("Wrong movie " + error);
  }
}
