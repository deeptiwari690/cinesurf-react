import { useQuery } from "@tanstack/react-query";
import { popularMoviesQuery } from "./queries";
import { Swiper, SwiperSlide } from "swiper/react";
import { MovieCard } from "./MovieCard";

export function PopularRow() {
  const { data, isPending, isError } = useQuery(popularMoviesQuery);

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong.</p>;

  return (
    <Swiper slidesPerView="auto" spaceBetween={16}>
      {data.results.map((movie) => (
        <SwiperSlide key={movie.id} className="w-40">
          <MovieCard movie={movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
