import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { removeItem, increaseQuantity, decreaseQuantity } from '../features/cart/CartSlice';

const CartItem = () => {
  const dispatch = useDispatch();
  const { items: cartItems, totalAmount, totalQuantity } = useSelector((state) => state.cart);

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert('Coming Soon! Thank you for shopping with Paradise Nursery.');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty-container animate-fade-in">
        <div className="cart-empty-card card-glow">
          <div className="empty-cart-icon">🛒</div>
          <h2>Your Cart is Empty</h2>
          <p>It looks like you haven't added any plants to your cart yet. Let's change that and bring some greenery to your home!</p>
          <Link to="/plants" className="continue-shopping-btn">
            <ShoppingBag size={18} />
            <span>Browse Plants</span>
          </Link>
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
            <div key={item.id} className="cart-item-card">
              <div className="cart-item-image-wrapper">
                <img src={item.image} alt={item.name} className="cart-item-image" />
              </div>

              <div className="cart-item-details">
                <div className="cart-item-header">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <button 
                    onClick={() => handleRemove(item.id)} 
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
                      onClick={() => handleDecrease(item.id)} 
                      className="quantity-btn"
                      title="Decrease quantity"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button 
                      onClick={() => handleIncrease(item.id)} 
                      className="quantity-btn"
                      title="Increase quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <div className="item-subtotal">
                    Subtotal: <strong>${(item.price * item.quantity).toFixed(2)}</strong>
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
            <span>{totalQuantity}</span>
          </div>

          <div className="summary-row total-row">
            <span>Grand Total</span>
            <span className="grand-total-amount">${totalAmount.toFixed(2)}</span>
          </div>

          <button onClick={handleCheckout} className="checkout-btn">
            Proceed to Checkout
          </button>

          <Link to="/plants" className="continue-shopping-link-btn">
            <ArrowLeft size={16} />
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
