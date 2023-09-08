import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const {
    data: blogs,
    loading,
    error,
  } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="card">
      <div className="card-body border border-danger rounded-4">
        {error && <div>{error}</div>}
        {loading && <div className="text-warning">Loading...</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      </div>
    </div>
  );
};

export default Home;
