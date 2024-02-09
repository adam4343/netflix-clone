import { API_TOKEN } from "../../utils/constants";
import { useState, useEffect } from "react";
import axios from "axios";

export type IMDbPopularSeriesType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
};

export const useSeries = () => {
  const [series, setSeries] = useState<IMDbPopularSeriesType[] | null>(null);
  try {
    useEffect(() => {
      getSeries().then((response) => {
        if (!response) return;
        setSeries(response.data.results);
      });
    }, []);
  } catch (e) {
    console.error("error", e);
  }

  console.log("series", series);
  return {
    series: series,
  };
};

async function getSeries() {
  const url = "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1";
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
    return response;
  } catch (e) {
    console.error("error:", e);
  }
}
