import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Logged in with:", email);
        navigate("/"); 
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Welcome to PIXORA</h1>
                <p>Login to join the creative community</p>
                <form onSubmit={handleLogin}>
                    <input 
                        type="email" 
                        placeholder="Enter Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;