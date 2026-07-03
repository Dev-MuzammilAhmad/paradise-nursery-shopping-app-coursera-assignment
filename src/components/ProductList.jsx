import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/cart/CartSlice';
import { Plus, Check, Info } from 'lucide-react';

const plantsData = [
  // Indoor Plants
  {
    id: 1,
    name: 'Monstera Deliciosa',
    category: 'Indoor Plants',
    price: 25,
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500&auto=format&fit=crop&q=80',
    description: 'Iconic split leaves, perfect for bringing a tropical vibe to your space.'
  },
  {
    id: 2,
    name: 'Snake Plant',
    category: 'Indoor Plants',
    price: 15,
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=500&auto=format&fit=crop&q=80',
    description: 'Indestructible, purifies air, and thrives in low-light environments.'
  },
  {
    id: 3,
    name: 'Peace Lily',
    category: 'Indoor Plants',
    price: 18,
    image: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=500&auto=format&fit=crop&q=80',
    description: 'Beautiful white blooms and dark green leaves that actively filter toxins.'
  },
  {
    id: 4,
    name: 'Fiddle Leaf Fig',
    category: 'Indoor Plants',
    price: 35,
    image: 'https://images.unsplash.com/photo-1597055181300-e3633a207518?w=500&auto=format&fit=crop&q=80',
    description: 'Highly sought-after tree with large, structural violin-shaped leaves.'
  },
  {
    id: 5,
    name: 'Pothos',
    category: 'Indoor Plants',
    price: 12,
    image: 'https://images.unsplash.com/photo-1632207691143-643c2a9a93c2?w=500&auto=format&fit=crop&q=80',
    description: 'Trailing plant with heart-shaped leaves, very easy to care for.'
  },
  {
    id: 6,
    name: 'Spider Plant',
    category: 'Indoor Plants',
    price: 14,
    image: 'https://images.unsplash.com/photo-1572590280143-4919559e38f2?w=500&auto=format&fit=crop&q=80',
    description: 'Produces baby plantlets on arching stems, great for hanging pots.'
  },

  // Flowering Plants
  {
    id: 7,
    name: 'Moth Orchid',
    category: 'Flowering Plants',
    price: 40,
    image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=500&auto=format&fit=crop&q=80',
    description: 'Elegant, colorful blooms that symbolize love, beauty, and luxury.'
  },
  {
    id: 8,
    name: 'Desert Rose',
    category: 'Flowering Plants',
    price: 28,
    image: 'https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=500&auto=format&fit=crop&q=80',
    description: 'Classic blooming shrub with fragrant flowers, brings romantic charm.'
  },
  {
    id: 9,
    name: 'Red Hibiscus',
    category: 'Flowering Plants',
    price: 22,
    image: 'https://images.unsplash.com/photo-1550950158-d0d960dff51b?w=500&auto=format&fit=crop&q=80',
    description: 'Large, showy tropical blossoms that attract beneficial pollinators.'
  },
  {
    id: 10,
    name: 'Star Jasmine',
    category: 'Flowering Plants',
    price: 20,
    image: 'https://images.unsplash.com/photo-1627997970791-c03565fcf20b?w=500&auto=format&fit=crop&q=80',
    description: 'Exotic climber known for its intensely sweet, intoxicating aroma.'
  },
  {
    id: 11,
    name: 'Bougainvillea',
    category: 'Flowering Plants',
    price: 26,
    image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=500&auto=format&fit=crop&q=80',
    description: 'Vibrant paper-like bracts that produce spectacular cascades of color.'
  },
  {
    id: 12,
    name: 'Gardenia Grandiflora',
    category: 'Flowering Plants',
    price: 30,
    image: 'https://images.unsplash.com/photo-1554907914-1b32d1691a32?w=500&auto=format&fit=crop&q=80',
    description: 'Stunning creamy white flowers with an incredibly rich, sweet scent.'
  },

  // Succulents
  {
    id: 13,
    name: 'Aloe Vera',
    category: 'Succulents',
    price: 10,
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500&auto=format&fit=crop&q=80',
    description: 'Medicinal gel-filled leaves, handy for burns, loves direct sunlight.'
  },
  {
    id: 14,
    name: 'Echeveria Rosette',
    category: 'Succulents',
    price: 8,
    image: 'https://images.unsplash.com/photo-1520302630591-fd1c66ed11a3?w=500&auto=format&fit=crop&q=80',
    description: 'Rose-like rosettes of thick leaves, comes in stunning pastel shades.'
  },
  {
    id: 15,
    name: 'Jade Plant',
    category: 'Succulents',
    price: 14,
    image: 'https://images.unsplash.com/photo-1598880940375-d756e87f87ec?w=500&auto=format&fit=crop&q=80',
    description: 'Symbol of wealth and prosperity, resembles a miniature woody tree.'
  },
  {
    id: 16,
    name: 'Zebra Plant',
    category: 'Succulents',
    price: 12,
    image: 'https://images.unsplash.com/photo-1536882240095-0379873feb4e?w=500&auto=format&fit=crop&q=80',
    description: 'Striking horizontal white stripes, compact size ideal for desks.'
  },
  {
    id: 17,
    name: 'String of Pearls',
    category: 'Succulents',
    price: 16,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=500&auto=format&fit=crop&q=80',
    description: 'Cascading vines of bead-like leaves, makes a gorgeous hanging display.'
  },
  {
    id: 18,
    name: 'Prickly Pear Cactus',
    category: 'Succulents',
    price: 15,
    image: 'https://images.unsplash.com/photo-1508789453663-424b13bd35b9?w=500&auto=format&fit=crop&q=80',
    description: 'Iconic flat-padded cactus that produces edible magenta fruits.'
  }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isPlantInCart = (plantId) => {
    return cartItems.some((item) => item.id === plantId);
  };

  // Group plants by category
  const categories = [...new Set(plantsData.map((plant) => plant.category))];

  return (
    <div className="product-list-container">
      <div className="product-list-hero">
        <h1>Discover Your Perfect Green Companion</h1>
        <p>Explore our carefully curated collection of healthy, vibrant houseplants</p>
      </div>

      {categories.map((category) => (
        <section key={category} className="category-section">
          <h2 className="category-title">
            <span className="category-icon">🌱</span> {category}
          </h2>
          
          <div className="plants-grid">
            {plantsData
              .filter((plant) => plant.category === category)
              .map((plant) => {
                const added = isPlantInCart(plant.id);
                return (
                  <div key={plant.id} className="plant-card animate-fade-in">
                    <div className="plant-card-image-wrapper">
                      <img src={plant.image} alt={plant.name} className="plant-card-image" />
                      <span className="plant-card-category-badge">{plant.category}</span>
                    </div>

                    <div className="plant-card-details">
                      <h3 className="plant-card-name">{plant.name}</h3>
                      <div className="plant-card-price">${plant.price.toFixed(2)}</div>
                      <p className="plant-card-description">{plant.description}</p>
                      
                      <button
                        onClick={() => handleAddToCart(plant)}
                        disabled={added}
                        className={`add-to-cart-btn ${added ? 'added' : ''}`}
                      >
                        {added ? (
                          <>
                            <Check size={16} />
                            <span>Added to Cart</span>
                          </>
                        ) : (
                          <>
                            <Plus size={16} />
                            <span>Add to Cart</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductList;
export { plantsData };
