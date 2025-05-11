import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

// Import all images
import butterDelight from "../assets/images/butter-delight.jpg";
import chocoChip from "../assets/images/choco-chip.jpg";
import elaichiMagic from "../assets/images/elaichi-magic.jpg";
import digestivePlus from "../assets/images/digestive-plus.jpg";
import coconutCrunch from "../assets/images/coconut-crunch.jpg";
import honeyOats from "../assets/images/honey-oats.jpg";
import masalaChai from "../assets/images/masala-chai.jpg";
import darkFantasy from "../assets/images/dark-fantasy.jpg";

const Products = () => {
  // All products data
  const allProducts = [
    {
      id: 1,
      name: "Butter Delight",
      category: "Classic",
      description: "Rich buttery flavor with a perfect golden crunch",
      price: 120,
      rating: 4.8,
      image: butterDelight,
    },
    {
      id: 2,
      name: "Choco Chip",
      category: "Chocolate",
      description: "Generous Belgian chocolate chips in every bite",
      price: 150,
      rating: 4.9,
      image: chocoChip,
    },
    {
      id: 3,
      name: "Elaichi Magic",
      category: "Spiced",
      description: "Premium cardamom infused aromatic biscuits",
      price: 135,
      rating: 4.7,
      image: elaichiMagic,
    },
    {
      id: 4,
      name: "Digestive Plus",
      category: "Healthy",
      description: "Whole wheat biscuits with natural fibers",
      price: 110,
      rating: 4.5,
      image: digestivePlus,
    },
    {
      id: 5,
      name: "Coconut Crunch",
      category: "Exotic",
      description: "Toasted Sri Lankan coconut flakes",
      price: 140,
      rating: 4.6,
      image: coconutCrunch,
    },
    {
      id: 6,
      name: "Honey Oats",
      category: "Healthy",
      description: "Raw Himalayan honey with organic oats",
      price: 125,
      rating: 4.7,
      image: honeyOats,
    },
    {
      id: 7,
      name: "Masala Chai",
      category: "Spiced",
      description: "Authentic masala chai spice blend",
      price: 130,
      rating: 4.8,
      image: masalaChai,
    },
    {
      id: 8,
      name: "Dark Fantasy",
      category: "Premium",
      description: "70% dark chocolate coated luxury biscuits",
      price: 180,
      rating: 4.9,
      image: darkFantasy,
    },
  ];

  // State for filters
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");

  // Get unique categories
  const categories = ["All", ...new Set(allProducts.map((p) => p.category))];

  // Filter and sort products
  const filteredProducts = allProducts
    .filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return a.id - b.id;
    });

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="py-20 px-6 sm:px-8 bg-gradient-to-r from-amber-800 to-amber-700 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-serif font-bold mb-6 sm:text-5xl">
            Artisanal Biscuit Collection
          </h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto font-sans">
            Handcrafted perfection for your tea time rituals
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-6 sm:px-8">
        {/* Search and Filters */}
        <div className="mb-12 bg-white p-6 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search Bar */}
            <div>
              <label
                htmlFor="search"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Search
              </label>
              <input
                type="text"
                id="search"
                placeholder="Find your perfect biscuit..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Category
              </label>
              <select
                id="category"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Options */}
            <div>
              <label
                htmlFor="sort"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Sort By
              </label>
              <select
                id="sort"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm">
            <svg
              className="mx-auto h-16 w-16 text-amber-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-4 text-xl font-serif font-medium text-gray-900">
              No matching products found
            </h3>
            <p className="mt-2 text-gray-600 max-w-md mx-auto">
              Try adjusting your filters or search for something different
            </p>
            <button
              onClick={() => {
                setCategory("All");
                setSearchQuery("");
                setSortBy("default");
              }}
              className="mt-6 px-6 py-2 bg-amber-100 text-amber-800 rounded-lg hover:bg-amber-200 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Featured Collection Link */}
        <div className="mt-16 text-center">
          <Link
            to="/"
            className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-lg shadow-md text-white bg-amber-800 hover:bg-amber-900 transition-colors"
          >
            Explore Our Featured Selection
            <svg
              className="ml-3 -mr-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
