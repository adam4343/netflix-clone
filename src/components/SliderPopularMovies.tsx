import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { usePopularMovies } from "../../src/pages/homepage/usePopularMovies";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import PopularMovieCard from "../components/PopularMovieCard";

export default function SliderPopularMovies() {
  const { movies } = usePopularMovies();

  return (
    <Swiper
      className=""
      slidesPerView={4.5}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
      navigation
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <PopularMovieCard movie={movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
