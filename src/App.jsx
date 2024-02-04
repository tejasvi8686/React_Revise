import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formdata from "./components/formdata/Formdata";
import Blogs from "./pages/blogs/Blogs";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Formdata />} />
            <Route path="/blog" element={<Blogs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
