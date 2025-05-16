import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
      <div className="relative pb-48 overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              product.available
                ? "bg-amber-100 text-amber-800"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {product.available ? product.category : "Coming Soon"}
          </span>
        </div>
        <p className="mt-1 text-sm text-gray-500">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          {product.available && (
            <span className="text-lg font-bold text-amber-600">
              Rs.{product.price}
            </span>
          )}
          <button
            onClick={handleAddToCart}
            disabled={!product.available}
            className={`px-3 py-1 text-white text-xs font-medium rounded focus:outline-none transition ${
              product.available
                ? "bg-amber-600 hover:bg-amber-700"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            {product.available ? "Add to Cart" : "Coming Soon"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
