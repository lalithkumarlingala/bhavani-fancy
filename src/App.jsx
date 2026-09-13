import "./App.css";
import { useState } from "react";
import Login from "./Login.jsx";
import Signup from "./signup.jsx";
function Home() {
  const [search, setSearch] = useState("");

  const products = [
    {
      name: "Fashion Jewellery",
      description: "Elegant jewellery collection",
      price: 299,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500"
    },
    {
      name: "Trendy Hand Bag",
      description: "Stylish everyday handbag",
      price: 599,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500"
    },
    {
      name: "Beauty Kit",
      description: "Complete beauty essentials",
      price: 449,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500"
    },
    {
      name: "Hair Accessories",
      description: "Beautiful hair accessories",
      price: 199,
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500"
    }
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Bhavani Fancy</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#categories">Categories</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="cart-btn">🛒 Cart</button>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="small-title">WELCOME TO</p>

          <h1>Bhavani Fancy</h1>

          <p>
            Trendy Fashion, Beauty & Fancy Collections
            <br />
            Everything you love, all in one place.
          </p>

          <button className="shop-btn">Shop Now</button>
        </div>
      </section>

      {/* Categories */}
      <section className="section" id="categories">
        <h2>Shop By Category</h2>

        <p className="subtitle">
          Explore our popular collections
        </p>

        <div className="categories">

          <div className="category-card">
            <div className="category-icon">💍</div>
            <h3>Jewellery</h3>
            <p>Beautiful accessories</p>
          </div>

          <div className="category-card">
            <div className="category-icon">💄</div>
            <h3>Beauty</h3>
            <p>Beauty essentials</p>
          </div>

          <div className="category-card">
            <div className="category-icon">👜</div>
            <h3>Fashion</h3>
            <p>Trendy fashion items</p>
          </div>

          <div className="category-card">
            <div className="category-icon">🎁</div>
            <h3>Gifts</h3>
            <p>Special gifts for everyone</p>
          </div>

        </div>
      </section>

      {/* Products */}
      <section className="section products-section" id="products">

        <h2>Featured Products</h2>

        <p className="subtitle">
          Our latest collections
        </p>

        {/* Search Bar */}
        <div className="search-box">

          <input
            type="text"
            placeholder="🔍 Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <div className="products">

          {filteredProducts.map((product) => (

            <div className="product-card" key={product.name}>

              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />

              <h3>{product.name}</h3>

              <p>{product.description}</p>

              <h4>₹{product.price}</h4>

              <button>Add to Cart</button>

            </div>

          ))}

        </div>

        {filteredProducts.length === 0 && (
          <p className="no-products">
            No products found.
          </p>
        )}

      </section>

      {/* About */}
      <section className="about" id="about">

        <h2>About Bhavani Fancy</h2>

        <p>
          Bhavani Fancy brings stylish and affordable fashion,
          beauty accessories, jewellery and gifts for everyone.
        </p>

      </section>

      {/* Footer */}
      <footer id="contact">

        <h2>Bhavani Fancy</h2>

        <p>Trendy • Beautiful • Affordable</p>

        <p>© 2026 Bhavani Fancy. All rights reserved.</p>

      </footer>

    </div>
  );
}


function App() {
  const [page, setPage] = useState("login");

  if (page === "login") {
    return (
      <Login
        onLogin={() => setPage("home")}
        onSignup={() => setPage("signup")}
      />
    );
  }

  if (page === "signup") {
    return (
      <Signup
        onSignup={() => setPage("home")}
        onLogin={() => setPage("login")}
      />
    );
  }

  return <Home />;
}

export default App;