import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } =
    useCart();

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-display font-bold text-gray-900 mb-8">
        Your Cart ({cartCount})
      </h1>

      {cart.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl font-medium text-gray-600 mb-4">
            Your cart is empty
          </h2>
          <Link
            to="/products"
            className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {cart.map((item) => (
              <div key={item.id} className="flex border-b border-gray-200 py-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 object-cover rounded-lg"
                />
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mt-1">₹{item.price}</p>
                  <div className="flex items-center mt-4">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 border rounded-l-lg"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border-t border-b">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 border rounded-r-lg"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 text-amber-600 hover:text-amber-800"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-6 rounded-lg h-fit">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Order Summary
            </h2>
            <div className="flex justify-between py-4 border-b border-gray-200">
              <span>Subtotal</span>
              <span>₹{cartTotal}</span>
            </div>
            <div className="flex justify-between py-4 border-b border-gray-200">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between py-4 font-medium">
              <span>Total</span>
              <span>₹{cartTotal}</span>
            </div>
            <Link
              to="/checkout"
              className="block w-full mt-6 px-6 py-3 bg-amber-600 text-white text-center rounded-lg hover:bg-amber-700 transition-colors"
            >
              Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
