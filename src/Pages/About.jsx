import React from "react";
import { Link } from "react-router-dom";
import aboutBakery from "../assets/about-bakery.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Header */}
      <section className="py-20 px-6 sm:px-8 bg-gradient-to-r from-amber-800 to-amber-700 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-serif font-bold mb-6 sm:text-5xl md:text-6xl">
            Our Heritage
          </h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto font-sans leading-relaxed">
            Preserving tradition while innovating for tomorrow's tea time
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-6 sm:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-1 md:order-none rounded-xl overflow-hidden shadow-2xl">
            <img
              src={aboutBakery}
              alt="ChaiBite artisan bakery"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-amber-900 sm:text-4xl">
              The ChaiBite Legacy
            </h2>
            <div className="space-y-5 text-lg text-amber-900/80 font-sans leading-relaxed">
              <p>
                Founded in 2010 in the heart of Mumbai, ChaiBite began as a
                humble family endeavor with one simple mission: to craft the
                perfect biscuit that would elevate every tea experience.
              </p>
              <p>
                What started as passionate experiments in a home kitchen quickly
                blossomed into a beloved local institution, thanks to our
                unwavering commitment to quality ingredients and time-honored
                recipes infused with contemporary flair.
              </p>
              <p>
                Today, while serving discerning customers across India, we
                remain true to our artisanal roots - each biscuit still made
                with the same care and attention as those first batches from our
                family kitchen.
              </p>
            </div>
            <div className="pt-4">
              <Link
                to="/products"
                className="inline-flex items-center px-6 py-3 border border-amber-800 text-lg font-medium rounded-lg text-amber-800 hover:bg-amber-800 hover:text-white transition-colors"
              >
                Taste Our Creations
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

        {/* Values Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-serif font-bold text-amber-900 text-center sm:text-4xl mb-16">
            Core Principles
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="text-amber-700 mb-6">
                <svg
                  className="w-14 h-14 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-gray-900">
                Uncompromising Quality
              </h3>
              <p className="text-gray-600">
                We source only premium ingredients and maintain rigorous quality
                standards at every production stage.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="text-amber-700 mb-6">
                <svg
                  className="w-14 h-14 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-gray-900">
                Heritage Recipes
              </h3>
              <p className="text-gray-600">
                Traditional techniques meet modern innovation in our carefully
                crafted biscuit formulations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="text-amber-700 mb-6">
                <svg
                  className="w-14 h-14 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-gray-900">
                Sustainable Practices
              </h3>
              <p className="text-gray-600">
                Eco-conscious packaging and responsible production methods that
                respect our environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
