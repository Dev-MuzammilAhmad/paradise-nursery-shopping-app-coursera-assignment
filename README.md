# 🌿 Paradise Nursery Shopping Application

A modern, responsive, and aesthetically pleasing e-commerce web application for a houseplant store. Users can browse a curated selection of plants across three distinct categories, add them to their shopping cart, manage item quantities, see live price calculations, and learn about the company.

Built with **React**, **Redux Toolkit** for robust state management, and styled using elegant modern **CSS** variables (glassmorphic navbars, fade-in animations, card hover effects).

---

## ✨ Features

### 1. 🏡 Landing Page
- Fullscreen background image showcasing a lush plant aesthetic.
- Glassmorphic overlay card introducing **Paradise Nursery** with a description.
- CTA **"Get Started"** button with a hover slide-in animation linking to the plant catalog.
- Fully integrated **"About Us"** section sharing our mission, core values (Premium Quality, Expert Support, Eco-Friendly), and company history.

### 2. 🌲 Navigation Bar
- Active on Store and Cart views.
- Glassmorphic, blurred header containing:
  - Nursery Logo & Title.
  - Quick links for **Home**, **Plants** (Catalog), and **Cart**.
  - **Dynamic Cart Icon Badge** which displays the total number of items currently in the cart. The badge pops in with a scale animation whenever quantities change.

### 3. 🌱 Product Catalog (`/plants`)
- Features **18 unique houseplants** categorized into **3 sections**:
  - **Indoor Plants**: Monstera, Snake Plant, Peace Lily, Fiddle Leaf Fig, Pothos, Spider Plant.
  - **Flowering Plants**: Orchid, Desert Rose, Red Hibiscus, Star Jasmine, Bougainvillea, Gardenia.
  - **Succulents**: Aloe Vera, Echeveria, Jade Plant, Zebra Plant, String of Pearls, Prickly Pear.
- Beautiful card designs featuring square thumbnails, hover-zooms, plant details, prices, and descriptions.
- **"Add to Cart"** button changes style (gray background, check icon) and disables once clicked if that item is already in the cart.

### 4. 🛒 Shopping Cart (`/cart`)
- A detailed layout listing all selected plants, unit prices, and visual image previews.
- **Quantity Adjusters**: Interactively increase or decrease item counts. Item is removed automatically if quantity falls to zero.
- **Item Subtotal**: Dynamically calculates `Unit Price` × `Quantity` per plant.
- **Grand Total**: Computes the absolute order total.
- **Continue Shopping** link that navigates back to the plant catalog.
- **Checkout Button** that triggers a "Coming Soon" notification popup.

---

## 🛠️ Technology Stack
- **Framework**: React (Vite-powered, single-page client)
- **State Management**: Redux Toolkit & React-Redux
- **Routing**: React Router DOM (v6)
- **Icons**: Lucide React
- **Styling**: Vanilla CSS3 (Custom Variables, Flexbox/Grid layouts, Glassmorphism, Animations)

---

## 📂 Folder Structure
```
paradise-nursery/
├── public/
├── src/
│   ├── components/
│   │   ├── AboutUs.jsx       # About us details and core values
│   │   ├── CartItem.jsx      # Shopping cart manager & totals calculator
│   │   ├── Navbar.jsx        # Glassmorphic header with cart badges
│   │   └── ProductList.jsx   # Catalog showing plant list and add-to-cart buttons
│   ├── features/
│   │   └── cart/
│   │       └── CartSlice.jsx # Redux slice for adding/removing items & quantities
│   ├── store.js              # Redux configureStore
│   ├── App.jsx               # Navigation router layout & Landing hero page
│   ├── App.css               # Core styling sheet with transitions & colors
│   ├── index.css             # Style overrides (cleared)
│   └── main.jsx              # Entry point linking state Provider & BrowserRouter
├── README.md                 # Project explanation (this file)
└── package.json              # Dependency manifests
```

---

## 🚀 How to Run the Project Locally

Follow these quick commands to spin up the dev server on your machine:

1. **Navigate to the project root directory**:
   ```bash
   cd "Paradise Nursery"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. Open the link displayed in your terminal (usually `http://localhost:5173`) in your browser to view the application.

---

## 📤 Production Build & Deployment

To build the static files for production (to host on Vercel, Netlify, or GitHub Pages):

1. **Create the build bundle**:
   ```bash
   npm run build
   ```
2. The outputs will be generated in the `dist/` folder, which can be uploaded to any static hosting provider.
