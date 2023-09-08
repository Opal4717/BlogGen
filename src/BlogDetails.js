import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    loading,
    error,
  } = useFetch('http://localhost:8000/blogs/' + id);
  return (
    <div className="blog-details card p-4 rounded-4 border border-danger ">
      {loading && <div className="text-warning">Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h1>{blog.title}</h1>
          <h2>{blog.author}</h2>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
