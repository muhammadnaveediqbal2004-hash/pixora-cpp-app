import "./cart.css";

function Cart({ cart, removeFromCart }) {
    const total = cart.length * 50;

    return (
        <div className="cart-container">
            <h2>Your Creative Collection</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty. Go explore some art!</p>
            ) : (
                <div className="cart-list">
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} width="100" />
                            <div>
                                <h4>{item.title}</h4>
                                <p>By @{item.user}</p>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} className="delete-btn">
                                Remove
                            </button>
                        </div>
                    ))}
                    <div className="cart-summary">
                        <h3>Total: ${total}</h3>
                        <button className="checkout-btn">Proceed to Purchase</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;