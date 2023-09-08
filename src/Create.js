import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setAdding(true);

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    })
      .then(() => {
        console.log('new blog added');
        setAdding(false);
        history.push('/');
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="create card p-4 border border-danger rounded-4 ">
      <h2>Create a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          className="rounded"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          className="rounded"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Select Author:</label>
        <select
          className="rounded"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!adding && <button>Add Blog</button>}
        {adding && <button disabled>Adding...</button>}
      </form>
    </div>
  );
};

export default Create;
