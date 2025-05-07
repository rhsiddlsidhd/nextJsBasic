import React from "react";

const page = async () => {
  const message = `${new Date().toLocaleString()}의 SSR`;

  return <p>{message}</p>;
};

export default page;
