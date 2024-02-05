import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Spinner from "../spinner/Spinner";

const Content = () => {
  // Consume the context
  const { loading, posts } = useContext(AppContext);

  return (
    <div class="w-11/12 max-w-[700px] py-8 flex flex-col gap-y-7 ">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Post Foud</p>
        </div>
      ) : (
        posts.map((post) => (
          <div  key={post.id}>
            <p class="font-bold text-lg mt-12">{post.title}</p>
            <p class="text-sm">
              By <span class="italic">{post.author}</span> on <span class="underline font-bold">{[post.category]}</span>
            </p>

            <p class="text-sm mt-4">Posted on {post.date}</p>

            <p class="text-lg mt-6">{post.content}</p>

            <div class="flex gap-x-3">
              {post.tags.map((tag, index) => {
                return <span key={index} class="text-blue-600 underline font-bold text-sm mt-4">{`# ${tag}`}</span>;
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Content;
