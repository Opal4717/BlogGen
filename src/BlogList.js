import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h1>{blog.title}</h1>
            <h2>{blog.author}</h2>
            <p>written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
