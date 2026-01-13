import { useEffect, useState } from "react"
import "./home.css"

function Home({addToCart}){

    const [posts,setPosts] = useState([]);

    useEffect(() =>
    {
        fetch('http://localhost:5000/posts')
        .then((res) => res.json())
        .then((data) => {
            setPosts(data);
        })
        .catch((err) => console.error("DataBase Error : " , err));
    } , []);

    return(
        <div className = "home-container">
            <header className="home-header">
                <h1>Explore Creativity</h1>
                <p>Discover the art from PIXORA Community</p>
            </header>

            <div className="post-grid">
                {posts.map((post) =>   
                (
                    <div key={post.id} className="post-card"> 
                        <img className="posts-img" src={post.image} alt={post.title} />
                        <div className="post-info">
                            <h3>{post.title}</h3>    
                            <p>@{post.user}</p>
                        </div>
                        <button className="buy-btn" onClick={() => addToCart(post)}>
                            Add to Cart 🛒
                        </button>
                    </div>
                ))} 
            </div>
        </div>
    )
}

export default Home;