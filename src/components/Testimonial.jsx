const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "ChaiBite biscuits are the perfect companion for my evening tea. The buttery flavor is just divine!",
      author: "Zaryab Amir",
      role: "Sophomore",
    },
    {
      id: 2,
      quote:
        "I've tried many biscuits, but none come close to the crunch and taste of ChaiBite. My family loves them!",
      author: "Ahmad Solehri",
      role: "Junior year",
    },
    {
      id: 3,
      quote:
        "As a tea shop owner, I can say ChaiBite biscuits have increased my customer satisfaction significantly.",
      author: "Hassan Khan",
      role: "1st Year",
    },
  ];

  return (
    <div className="bg-cream-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl font-display tracking-tight">
            What Our Customers Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 sm:mt-5 font-sans leading-relaxed">
            Don't just take our word for it. Here's what our customers have to
            say.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-hard transition-all duration-300 border border-cream-200"
            >
              <div className="relative">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-amber-300"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative text-gray-700 mt-8 font-sans text-lg leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>
              <div className="mt-8 flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-biscuit-200 flex items-center justify-center shadow-inner">
                    <span className="text-amber-800 font-medium text-lg font-sans">
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900 font-display">
                    {testimonial.author}
                  </p>
                  <p className="text-base text-amber-600 font-sans">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
