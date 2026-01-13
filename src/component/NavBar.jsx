import { Link, useNavigate } from 'react-router-dom'; 
import { useState } from 'react';
import './Navbar.css';

const Navbar = ({cart}) => {
    const [isMenuOpen, setisMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setisMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        console.log("Logout successful");
        setisMenuOpen(false); 
        navigate("/login");   
    };

    return (
        <nav className="navbar">
            <div className="nav-Logo">
                <Link to="/">PIXORA</Link>
            </div>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/addpost">Add Post</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/prayer">Prayer Timings</Link>
                <Link to="/cart" className="cart-icon">
                        🛒 
                    <span className="cart-count">
                        {cart.length}
                    </span>
                </Link>
            </div>

            <div className="nav-menu-container">
                <button className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {isMenuOpen && (
                    <div className='dropdown-Menu'>
                        <Link to="/profile" onClick={() => setisMenuOpen(false)}>
                            Profile Settings
                        </Link>
                        <hr/>
                        <button className="logout-btn" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;