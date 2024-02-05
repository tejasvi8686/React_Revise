import React, { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formdata from "./components/formdata/Formdata";
import Blogs from "./pages/blogs/Blogs";
import Navbar from "./components/navbar/Navbar";
import { AppContext } from "./context/AppContext";

const App = () => {
  const { fetchBlogPosts } = useContext(AppContext);
  useEffect(() => {
    fetchBlogPosts();
  }, []);
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Formdata />} />
          <Route path="/blog" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
