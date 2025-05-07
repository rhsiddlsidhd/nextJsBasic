import React from "react";
import Head from "next/head";

type MovieProps = {
  id: number;
};

const getFavoriteMovies = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

  const res = await fetch(url, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
    },
  });
  if (!res.ok) {
    throw new Error("Fail to fetch Movie");
  }

  const data = await res.json();
  return data.results;
};

const Page = async () => {
  const data: MovieProps[] = await getFavoriteMovies();

  return (
    <div>
      <Head>
        <title>STATIC SITE GENERATION</title>
        <link rel="icon" href="#"></link>
      </Head>
      <main>
        <p>이 페이지는 정적 사이트 생성을 통해 빌드 시 생성된 페이지입니다.</p>
        {data.map(({ id }) => {
          return <p key={id}>{id}</p>;
        })}
      </main>
    </div>
  );
};

export default Page;
