import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Spinner from "../spinner/Spinner";

const Content = () => {
  // Consume the context
  const { loading, posts } = useContext(AppContext);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Post Foud</p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <p class="font-bold text-xl">{post.title}</p>
            <p>
              By <span>{post.author}</span> on <span>{[post.category]}</span>
            </p>

            <p>Posted on {post.date}</p>

            <p>{post.content}</p>

            <div>
              {post.tags.map((tag, index) => {
                return <span key={index}>{`# ${tag}`}</span>;
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Content;
