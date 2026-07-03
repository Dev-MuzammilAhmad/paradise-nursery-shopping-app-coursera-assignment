import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/cart/CartSlice';
import CartItem from './CartItem';
import { ShoppingCart, Leaf } from 'lucide-react';

const plantsArray = [
  {
    category: "Air Purifying Plants",
    plants: [
      {
        name: "Snake Plant",
        image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
        description: "Produces oxygen at night, improving air quality.",
        cost: "$15"
      },
      {
        name: "Spider Plant",
        image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
        description: "Filters formaldehyde and xylene from the air.",
        cost: "$12"
      },
      {
        name: "Peace Lily",
        image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
        description: "Removes mold spores and purifies the air.",
        cost: "$18"
      },
      {
        name: "Boston Fern",
        image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
        description: "Adds humidity to the air and removes toxins.",
        cost: "$20"
      },
      {
        name: "Rubber Plant",
        image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
        description: "Easy to care for and effective at removing toxins.",
        cost: "$17"
      },
      {
        name: "Aloe Vera",
        image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
        description: "Purifies the air and has healing properties for skin.",
        cost: "$14"
      }
    ]
  },
  {
    category: "Aromatic Fragrant Plants",
    plants: [
      {
        name: "Lavender",
        image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop",
        description: "Calming scent, used in aromatherapy.",
        cost: "$20"
      },
      {
        name: "Jasmine",
        image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop",
        description: "Exotic climber known for its sweet, intoxicating aroma.",
        cost: "$18"
      },
      {
        name: "Rosemary",
        image: "https://images.unsplash.com/photo-1515514902486-12fc01353aea?q=80&w=1074&auto=format&fit=crop",
        description: "Invigorating scent, used in cooking and aromatherapy.",
        cost: "$15"
      },
      {
        name: "Mint",
        image: "https://images.unsplash.com/photo-1533618178125-d72b2c9b6348?q=80&w=1074&auto=format&fit=crop",
        description: "Refreshing scent, versatile herb for culinary use.",
        cost: "$10"
      },
      {
        name: "Lemon Verbena",
        image: "https://images.unsplash.com/photo-1590483736622-39da8caf35fb?q=80&w=1074&auto=format&fit=crop",
        description: "Citrusy scent, ideal for teas and natural fragrance.",
        cost: "$22"
      },
      {
        name: "Sweet Basil",
        image: "https://images.unsplash.com/photo-1563294318-62db52973797?q=80&w=1074&auto=format&fit=crop",
        description: "Rich herbal scent, popular in Mediterranean cooking.",
        cost: "$12"
      }
    ]
  },
  {
    category: "Succulents and Cacti",
    plants: [
      {
        name: "Echeveria",
        image: "https://images.unsplash.com/photo-1520302630591-fd1c66ed11a3?q=80&w=1074&auto=format&fit=crop",
        description: "Beautiful rosette-shaped succulent, easy to propagate.",
        cost: "$8"
      },
      {
        name: "Jade Plant",
        image: "https://images.unsplash.com/photo-1598880940375-d756e87f87ec?q=80&w=1074&auto=format&fit=crop",
        description: "Symbolizes prosperity, thick fleshy leaves.",
        cost: "$14"
      },
      {
        name: "Zebra Plant",
        image: "https://images.unsplash.com/photo-1536882240095-0379873feb4e?q=80&w=1074&auto=format&fit=crop",
        description: "Striking horizontal white stripes, compact size.",
        cost: "$12"
      },
      {
        name: "Christmas Cactus",
        image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=1074&auto=format&fit=crop",
        description: "Blooms in winter, features unique flat stem segments.",
        cost: "$16"
      },
      {
        name: "Burro's Tail",
        image: "https://images.unsplash.com/photo-1590005354167-6da97870c913?q=80&w=1074&auto=format&fit=crop",
        description: "Trailing stems with plump blue-green leaves.",
        cost: "$18"
      },
      {
        name: "Prickly Pear",
        image: "https://images.unsplash.com/photo-1508789453663-424b13bd35b9?q=80&w=1074&auto=format&fit=crop",
        description: "Flat green pads with decorative needles, edible fruit.",
        cost: "$15"
      }
    ]
  }
];

function ProductList({ toLanding }) {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addItem({
      name: plant.name,
      price: parseFloat(plant.cost.replace('$', '')),
      image: plant.image
    }));
  };

  const alreadyInCart = (itemName) => {
    return cartItems.some((item) => item.name === itemName);
  };

  const totalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    toLanding();
  };

  return (
    <div className="product-list-page">
      {/* Dynamic Header / Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#" onClick={handleHomeClick} className="navbar-brand">
            <Leaf className="brand-logo-icon" />
            <div className="brand-text-container">
              <span className="brand-title">Paradise Nursery</span>
              <span className="brand-subtitle">Plants for your space</span>
            </div>
          </a>

          <div className="navbar-links">
            <a href="#" onClick={handleHomeClick} className="navbar-link">Home</a>
            <a href="#" onClick={handlePlantsClick} className="navbar-link">Plants</a>
            <a href="#" onClick={handleCartClick} className="navbar-link cart-link">
              <div className="cart-icon-wrapper">
                <ShoppingCart className="navbar-cart-icon" />
                {totalItems() > 0 && (
                  <span className="navbar-cart-badge animate-pop-in">{totalItems()}</span>
                )}
              </div>
            </a>
          </div>
        </div>
      </nav>

      {!showCart ? (
        <div className="product-list-container">
          <div className="product-list-hero">
            <h1>Discover Your Perfect Green Companion</h1>
            <p>Explore our carefully curated collection of healthy, vibrant houseplants</p>
          </div>

          {plantsArray.map((categoryObj) => (
            <section key={categoryObj.category} className="category-section">
              <h2 className="category-title">
                <span className="category-icon">🌱</span> {categoryObj.category}
              </h2>
              
              <div className="plants-grid">
                {categoryObj.plants.map((plant) => {
                  const added = alreadyInCart(plant.name);
                  return (
                    <div key={plant.name} className="plant-card animate-fade-in">
                      <div className="plant-card-image-wrapper">
                        <img src={plant.image} alt={plant.name} className="plant-card-image" />
                        <span className="plant-card-category-badge">{categoryObj.category}</span>
                      </div>

                      <div className="plant-card-details">
                        <h3 className="plant-card-name">{plant.name}</h3>
                        <div className="plant-card-price">{plant.cost}</div>
                        <p className="plant-card-description">{plant.description}</p>
                        
                        <button
                          onClick={() => handleAddToCart(plant)}
                          disabled={added}
                          className={`add-to-cart-btn ${added ? 'added' : ''}`}
                        >
                          {added ? 'Added to Cart' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      )}
    </div>
  );
}

export default ProductList;
