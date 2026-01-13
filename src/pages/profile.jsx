import { useEffect, useState } from "react";
import "./profile.css";

function Profile() {
  const [myPosts, setMyPosts] = useState([]);
  const currentUser = "CreativeMind"; // Placeholder user

  useEffect(() => {
    fetch(`http://localhost:5000/posts?user=${currentUser}`)
      .then((res) => res.json())
      .then((data) => setMyPosts(data));
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="avatar"> {currentUser[0]} </div>
        <h1>@{currentUser}</h1>
        <p>Creative Enthusiast | PIXORA Member</p>
      </div>
      <hr />
      <h3>My Gallery ({myPosts.length})</h3>
      <div className="post-grid">
        {myPosts.map((post) => (
          <div key={post.id} className="post-card">
            <img src={post.image} alt={post.title} />
            <h4>{post.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;