import { Link } from "react-router-dom"; // Add this import
// import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Testimonial from "../components/Testimonial";
import Newsletter from "../components/NewsLetter";

// Import all images
import butterDelight from "../assets/butter-delight.jpg";
import chocoChip from "../assets/choco-chip.jpg";
import elaichiMagic from "../assets/elaichi-magic.jpg";
import digestivePlus from "../assets/digestive-plus.jpg";
import aboutBiscuits from "../assets/about-bakery.jpg";
import heroBiscuits from "../assets/hero.jpg";

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Butter Delight",
      category: "Classic",
      description: "Rich buttery flavor with a perfect golden crunch",
      price: 120,
      image: butterDelight,
    },
    {
      id: 2,
      name: "Choco Chip",
      category: "Chocolate",
      description: "Generous chocolate chips in every bite",
      price: 150,
      image: chocoChip,
    },
    {
      id: 3,
      name: "Elaichi Magic",
      category: "Spiced",
      description: "Aromatic cardamom infused biscuits",
      price: 135,
      image: elaichiMagic,
    },
    {
      id: 4,
      name: "Digestive Plus",
      category: "Healthy",
      description: "Nutritious whole wheat with natural fibers",
      price: 110,
      image: digestivePlus,
    },
  ];

  return (
    <div className="bg-cream-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-50 to-cream-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 pt-16 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-6 sm:mt-12 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-serif font-bold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Artisanal</span>
                  <span className="block text-amber-800">Biscuits Crafted</span>
                  <span className="block">For Tea Connoisseurs</span>
                </h1>
                <p className="mt-4 mx-auto text-lg text-amber-900/80 sm:mt-5 sm:max-w-xl md:mt-5 md:text-xl lg:mx-0 font-sans">
                  Handmade with premium ingredients for that perfect dunking
                  experience
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="rounded-lg shadow-md hover:shadow-lg transition-all">
                    <Link
                      to="/products"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-amber-800 hover:bg-amber-900 md:py-4 md:text-lg md:px-10 transition-colors"
                    >
                      Explore Collection
                    </Link>
                  </div>
                  <div className="rounded-lg hover:shadow-md transition-all">
                    <Link
                      to="/about"
                      className="w-full flex items-center justify-center px-8 py-3 border border-amber-800 text-base font-medium rounded-lg text-amber-800 bg-transparent hover:bg-amber-50 md:py-4 md:text-lg md:px-10 transition-colors"
                    >
                      Our Story
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-72 w-full object-cover sm:h-80 md:h-96 lg:w-full lg:h-full"
            src={aboutBiscuits}
            alt="Artisanal ChaiBite biscuits"
          />
        </div>
      </div>

      {/* Featured Products */}
      <section id="products" className="py-16 px-6 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900 sm:text-4xl">
              Signature Collection
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-amber-900/80">
              Meticulously crafted biscuits for your tea rituals
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-lg shadow-md text-white bg-amber-800 hover:bg-amber-900 transition-colors"
            >
              Discover Full Range
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
      </section>

      {/* About Section */}
      <section className="py-20 px-6 sm:px-8 bg-cream-50">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-12 lg:mb-0 rounded-xl overflow-hidden shadow-xl">
              <img
                className="w-full h-auto object-cover"
                src={aboutBiscuits}
                alt="ChaiBite bakery"
              />
            </div>
            <div className="px-4 sm:px-6">
              <h2 className="text-3xl font-serif font-bold text-gray-900 sm:text-4xl mb-6">
                Our Heritage
              </h2>
              <p className="mt-3 text-lg text-amber-900/80 leading-relaxed">
                Since 20205, ChaiBite has been perfecting the art of
                biscuit-making, blending traditional recipes with modern
                craftsmanship. Each biscuit tells a story of passion - from our
                family's kitchen to your tea time moments.
              </p>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-3 border border-amber-800 text-lg font-medium rounded-lg text-amber-800 hover:bg-amber-800 hover:text-white transition-colors"
                >
                  Our Journey
                  <svg
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonial />
      <Newsletter />
    </div>
  );
};

export default Home;
