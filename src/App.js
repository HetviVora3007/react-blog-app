import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./Pages/HomePage/Home";
import Blog from "./Pages/BlogPage/Blog";
import About from "./Pages/AboutPage/About";
import Contact from "./Pages/ContactPage/Contact";
import Create from "./Pages/CreatePage/Create";
import BackendUrl from "./Utils/BackendUrl"
import AboutBlog from "./Pages/AboutBlogPage/AboutBlog";

function App() {

  const [blogData, setBlogData] = useState([])

  const getBlogData = async () => {
    const response = await fetch(BackendUrl)
    const data = await response.json()
    setBlogData(data)
  }

  useEffect(() => {
    const getBlogList = async () => {
      const response = await fetch(BackendUrl)
      const data = await response.json()
      setBlogData(data)
    }
    getBlogList()
  }, [])

  const addBlogData = async (formData) => {
    const response = await fetch(BackendUrl, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    getBlogData()
  }

  const removeBlogData = async (_id) => {
    const response = await fetch(BackendUrl + `/delete/${_id}/`, {
      method: 'DELETE',
    })
    getBlogData()
  }

  const createHandler = (formData) => {
    addBlogData(formData)
  }

  const deleteHandler = async (_id) => {
    removeBlogData(_id)
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog blogData={blogData} deleteHandler={deleteHandler} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/create" element={<Create createHandler={createHandler} />} />
          <Route path="/aboutblog/:id" element={<AboutBlog blogData={blogData} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
