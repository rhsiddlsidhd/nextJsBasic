import { NextPage } from "next";
import React from "react";
type Props = {
  params: Promise<{
    id: string;
  }>;
};

interface Movie {
  id: string;
  overview: string;
}

interface MovieProps {
  results: Movie[];
}

export const generateStaticParams = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
    },
  };
  const res = await fetch(url, options);
  const data: MovieProps = await res.json();
  return data.results.map((movie) => ({
    id: String(movie.id),
  }));
};

const page: NextPage<Props> = async ({ params }) => {
  const { id } = await params;
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
    },
  };
  const res = await fetch(url, options);
  const data: Movie = await res.json();

  return (
    <div>
      <p>동적 SSG를 처리하는 페이지입니다.</p>
      <p>{data.id}</p>
      <p>{data.overview}</p>
    </div>
  );
};

export default page;
