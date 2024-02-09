import { useEffect, useState } from "react";
import { Movie } from "../../movie/TypeMovie";
import { toast } from "sonner";

export function useWatchList() {
  const [watchlist, setWatchList] = useState<Movie[]>([]);

  const addToWatchList = (movie: Movie) => {
    if (watchlist.find((data) => data.id === movie.id)) {
      toast.error("This movie is already in your watch later list");
      return;
    } else {
      const updatedList = [...watchlist, movie];
      setWatchList(updatedList);
      localStorage.setItem("watchlist", JSON.stringify(updatedList));
    }
  };

  const removeFromWatchList = (movieId: number) => {
    const updatedList = watchlist.filter((movie) => movie.id !== movieId);
    setWatchList(updatedList);
    localStorage.setItem("watchlist", JSON.stringify(updatedList));
    toast.success(`${movieId} has been removed from your Watch List`);
  };

  useEffect(() => {
    const watchListData = localStorage.getItem("watchlist");
    if (!watchListData) return;
    const convertedWatchListData = JSON.parse(watchListData);
    setWatchList(convertedWatchListData);
  }, []);

  return {
    addToWatchList: addToWatchList,
    watchlist: watchlist,
    removeFromWatchList: removeFromWatchList,
  };
}
