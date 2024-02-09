import MediumCard from "./MediumCard";
import { useSeries } from "../pages/homepage/useSeries";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { IMDbPopularSeriesType } from "../pages/homepage/useSeries";

export default function SliderPopularSerials() {
  const { series } = useSeries();

  return (
    <div className="flex">
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
        {series ? (
          series.map((seria: IMDbPopularSeriesType) => (
            <SwiperSlide key={seria.id}>
              <MediumCard seria={seria} />
            </SwiperSlide>
          ))
        ) : (
          <p>Loading popular series...</p>
        )}
      </Swiper>
    </div>
  );
}
