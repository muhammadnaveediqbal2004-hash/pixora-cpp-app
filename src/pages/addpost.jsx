import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./addpost.css";

function AddPost() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  
  const handleRandomize = () => {
    const randomId = Math.floor(Math.random() * 1000);
    const randomUrl = `https://picsum.photos/seed/${randomId}/800/600`;
    setImage(randomUrl);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, image, user };

    fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    }).then(() => {
      alert("Post added successfully!");
      navigate("/"); 
    });
  };

  return (
    <div className="addpost-container">
      <h2>Share Your Creativity</h2>
      <form onSubmit={handleSubmit} className="addpost-form">
        <input 
            type="text" 
            placeholder="Post Title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
        />
        
        <div className="image-input-group">
            <input 
                type="text" 
                placeholder="Paste Image URL here..." 
                value={image} 
                onChange={(e) => setImage(e.target.value)} 
                required 
            />
            <button type="button" className="random-btn" onClick={handleRandomize}>
                🎲 Randomize
            </button>
        </div>

        <input 
            type="text" 
            placeholder="Your Username" 
            value={user} 
            onChange={(e) => setUser(e.target.value)} 
            required 
        />
        {image && (
            <div className="image-preview">
                <p>Image Preview:</p>
                <img src={image} alt="Preview" />
            </div>
        )}

        <button type="submit" className="submit-btn">Publish Post</button>
      </form>
    </div>
  );
}

export default AddPost;