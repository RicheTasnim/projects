import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
        <h1 className="text-4xl">Blogs: {blogs.length}</h1>
        {
          blogs.map(blog => <Blog handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead} key={blog.id} blog={blog}></Blog>)
        }
    </div>
  );
};

export default Blogs;
