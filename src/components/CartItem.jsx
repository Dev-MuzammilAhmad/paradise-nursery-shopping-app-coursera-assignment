import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../features/cart/CartSlice';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';

const CartItem = ({ onContinueShopping }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Function that calculates the total cart amount
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Function that calculates total cost per plant (price * quantity)
  const calculateTotalCost = (item) => {
    return item.price * item.quantity;
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckout = () => {
    alert('Coming Soon! Thank you for shopping with Paradise Nursery.');
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    onContinueShopping();
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty-container animate-fade-in">
        <div className="cart-empty-card card-glow">
          <div className="empty-cart-icon">🛒</div>
          <h2>Your Cart is Empty</h2>
          <p>It looks like you haven't added any plants to your cart yet. Let's change that and bring some greenery to your home!</p>
          <a href="#" onClick={handleContinueShopping} className="continue-shopping-btn">
            <span>Browse Plants</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container animate-fade-in">
      <h1 className="cart-title">Your Shopping Cart</h1>
      
      <div className="cart-layout">
        {/* Cart Items List */}
        <div className="cart-items-list">
          {cartItems.map((item) => (
            <div key={item.name} className="cart-item-card">
              <div className="cart-item-image-wrapper">
                <img src={item.image} alt={item.name} className="cart-item-image" />
              </div>

              <div className="cart-item-details">
                <div className="cart-item-header">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <button 
                    onClick={() => handleRemove(item)} 
                    className="cart-item-delete-btn"
                    title="Remove item"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                <div className="cart-item-price-info">
                  <span className="unit-price">Unit Price: ${item.price.toFixed(2)}</span>
                </div>

                <div className="cart-item-controls">
                  <div className="quantity-controller">
                    <button 
                      onClick={() => handleDecrement(item)} 
                      className="quantity-btn"
                      title="Decrease quantity"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button 
                      onClick={() => handleIncrement(item)} 
                      className="quantity-btn"
                      title="Increase quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <div className="item-subtotal">
                    Subtotal: <strong>${calculateTotalCost(item).toFixed(2)}</strong>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="cart-summary-panel card-glow">
          <h3>Order Summary</h3>
          
          <div className="summary-row">
            <span>Total Plants</span>
            <span>{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
          </div>

          <div className="summary-row total-row">
            <span>Grand Total</span>
            <span className="grand-total-amount">${calculateTotalAmount().toFixed(2)}</span>
          </div>

          <button onClick={handleCheckout} className="checkout-btn">
            Proceed to Checkout
          </button>

          <a href="#" onClick={handleContinueShopping} className="continue-shopping-link-btn">
            <ArrowLeft size={16} />
            <span>Continue Shopping</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
