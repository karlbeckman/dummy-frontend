import { Outlet } from "react-router-dom";

import PostsList from "../components/PostsList";

function Posts() {

  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  try {
    const response = await fetch("http://localhost:8080/posts");
    if (!response.ok) {
      throw new Response("Failed to load posts", {
        status: response.status,
        statusText: response.statusText,
      });
    }

    const resData = await response.json();

    return resData.posts;
  } catch(error) {
    throw new Response("Nätverksfel eller ogiltigt JSON-svar", {
      status: 500,
      statusText: error.message || "Unknown error",
    });
  }
}
