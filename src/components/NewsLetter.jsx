const Newsletter = () => {
  return (
    <div className="bg-amber-800 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex md:items-center md:justify-between gap-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold font-display tracking-tight">
              Stay Updated
            </h2>
            <p className="mt-3 max-w-md text-amber-100 font-sans text-lg leading-relaxed">
              Subscribe to our newsletter to get updates on new flavors, special
              offers, and more!
            </p>
          </div>
          <div className="md:w-1/2">
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-5 py-3 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 flex-grow font-sans shadow-soft"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-amber-600 hover:bg-amber-700 rounded-xl font-medium font-sans transition-colors duration-300 shadow-hard hover:shadow-amber-900/20"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-sm text-amber-200 font-sans">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
