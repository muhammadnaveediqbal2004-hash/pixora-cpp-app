import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./addpost.css";

function AddPost() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, image, user };

    fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    }).then(() => {
      alert("Post added successfully!");
      navigate("/"); // Go back to Home to see the new post
    });
  };

  return (
    <div className="addpost-container">
      <h2>Share Your Creativity</h2>
      <form onSubmit={handleSubmit} className="addpost-form">
        <input type="text" placeholder="Post Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Image URL (e.g. https://picsum.photos/400)" value={image} onChange={(e) => setImage(e.target.value)} required />
        <input type="text" placeholder="Your Username" value={user} onChange={(e) => setUser(e.target.value)} required />
        <button type="submit">Publish Post</button>
      </form>
    </div>
  );
}

export default AddPost;