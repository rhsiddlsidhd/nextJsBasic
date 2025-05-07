import Link from "next/link";
import React from "react";

const page = async () => {
  const message = `${new Date().toLocaleString()}의 SSR`;

  return (
    <div>
      <p>{message}</p>
      <Link
        href={{
          pathname: "/ssg",
        }}
      >
        <button>Go to SSG</button>
      </Link>
    </div>
  );
};

export default page;
