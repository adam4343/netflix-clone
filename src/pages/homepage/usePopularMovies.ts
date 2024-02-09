import { API_TOKEN } from "../../utils/constants";
import { useState, useEffect } from "react";
import axios from "axios";

export type TypeMovies = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export const usePopularMovies = () => {
  const [movies, setMovies] = useState<TypeMovies[]>([]);
  useEffect(() => {
    fetchPopularMovies().then((response) => {
      setMovies(response?.results || []);
    });
  }, []);
  return {
    movies: movies,
  };
};

async function fetchPopularMovies() {
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
    type ResultsMovie = {
      results: TypeMovies[];
    };
    return response.data as ResultsMovie;
  } catch (error) {
    console.error("Error:", error);
  }
}
