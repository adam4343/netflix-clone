import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { usePopularMovies } from "../pages/homepage/usePopularMovies";
import HeroSectionMovie from "./HeroSectionMovie";

export default function SliderHeroSection() {
  const { movies } = usePopularMovies();
  return (
    <Swiper
      className=""
      slidesPerView={1}
      //   spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
      navigation
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <HeroSectionMovie movie={movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
