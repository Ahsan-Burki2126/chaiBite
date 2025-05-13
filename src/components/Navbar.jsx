import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import logo from "../assets/logo.svg";
import CartIcon from "./CartIcon"; // Make sure to create this component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed w-full z-50 transition-all ${
        scrolled ? "bg-amber-900 shadow-xl" : "bg-amber-800 shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
            >
              {/* <img
                className="h-20 w-20"
                src={logo}
                alt="ChaiBite Artisanal Biscuits"
              /> */}
              <span className="text-xl text-white font-serif font-bold tracking-wide">
                ChaiBite
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`px-2 py-2 text-base font-medium transition-colors relative group ${
                isActive("/")
                  ? "text-amber-200"
                  : "text-white hover:text-amber-200"
              }`}
            >
              Home
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-amber-200 transition-all ${
                  isActive("/") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
            <Link
              to="/about"
              className={`px-2 py-2 text-base font-medium transition-colors relative group ${
                isActive("/about")
                  ? "text-amber-200"
                  : "text-white hover:text-amber-200"
              }`}
            >
              Our Story
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-amber-200 transition-all ${
                  isActive("/about") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
            <Link
              to="/products"
              className={`px-2 py-2 text-base font-medium transition-colors relative group ${
                isActive("/products")
                  ? "text-amber-200"
                  : "text-white hover:text-amber-200"
              }`}
            >
              Collections
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-amber-200 transition-all ${
                  isActive("/products") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
            <Link
              to="/contact"
              className={`px-2 py-2 text-base font-medium transition-colors relative group ${
                isActive("/contact")
                  ? "text-amber-200"
                  : "text-white hover:text-amber-200"
              }`}
            >
              Contact
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-amber-200 transition-all ${
                  isActive("/contact") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>

            {/* Added Cart Icon */}
            <CartIcon />

            <Link
              to="/order"
              className="ml-2 px-4 py-2 bg-white hover:bg-amber-50 text-amber-800 rounded-lg text-base font-medium shadow-md transition-colors"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <CartIcon className="text-white" />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-amber-100 hover:text-white focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">
                {isOpen ? "Close menu" : "Open menu"}
              </span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="px-6 pt-2 pb-4 space-y-1 bg-amber-700">
          <Link
            to="/"
            className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
              isActive("/")
                ? "bg-amber-600 text-white"
                : "text-amber-100 hover:bg-amber-600"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
              isActive("/about")
                ? "bg-amber-600 text-white"
                : "text-amber-100 hover:bg-amber-600"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Our Story
          </Link>
          <Link
            to="/products"
            className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
              isActive("/products")
                ? "bg-amber-600 text-white"
                : "text-amber-100 hover:bg-amber-600"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Collections
          </Link>
          <Link
            to="/contact"
            className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
              isActive("/contact")
                ? "bg-amber-600 text-white"
                : "text-amber-100 hover:bg-amber-600"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/cart"
            className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
              isActive("/cart")
                ? "bg-amber-600 text-white"
                : "text-amber-100 hover:bg-amber-600"
            }`}
            onClick={() => setIsOpen(false)}
          >
            View Cart
          </Link>
          <Link
            to="/order"
            className="block px-3 py-2 text-center rounded-lg text-base font-medium bg-white hover:bg-amber-50 text-amber-800 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Order Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
