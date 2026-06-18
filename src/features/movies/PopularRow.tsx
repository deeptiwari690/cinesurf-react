import { useSuspenseQuery } from "@tanstack/react-query";
import { popularMoviesQuery } from "./queries";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { MovieCard } from "./MovieCard";

export function PopularRow() {
  const { data } = useSuspenseQuery(popularMoviesQuery);

  return (
    <section>
      <h2 className="mbe-4 text-xl font-bold">What's Popular</h2>
      <Swiper
        slidesPerView="auto"
        grabCursor
        className="select-none"
        modules={[FreeMode]}
        freeMode={{ enabled: true, momentumRatio: 0.5 }}
      >
        {data.results.map((movie) => (
          <SwiperSlide key={movie.id} className="w-44 pe-4 last:w-40 last:pe-0">
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
