import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = function () {
  return (
    <>
      {/* credit: https://github.com/codebushi/gatsby-starter-lander */}
      <div>

        <main className="text-gray-900 "
        style={{ backgroundImage: "url('./images/bg.webp')" }}>
        <section className="pt-20 md:pt-32 lg:pt-40">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center">
              <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  CryptoX
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl mt-4 md:mt-6 lg:mt-8 font-light">
                  A platform that provides real-time information and rankings on the world's leading cryptocurrencies, including detailed insights into their market performance and trends.
                </p>
                <p className="mt-6 md:mt-8">
                  <Link to="/login">
                    <button
                      type="button"
                      className="py-3 px-8 md:py-4 md:px-12 bg-teal-500 hover:bg-teal-600 rounded text-white text-sm md:text-base"
                    >
                      Get Started
                    </button>
                  </Link>
                </p>
                <p className="mt-4 text-gray-600">
                  Begin Your Crypto Journey
                </p>
              </div>
              <div className="mt-8 lg:mt-0 lg:w-1/2">
                <img
                  src="./images/crypto.webp"
                  alt="Cryptocurrency"
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>
          <section id="features" className="py-20 lg:pb-40 lg:pt-48">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl lg:text-5xl font-semibold">
                Main Features
              </h2>
              <div className="flex flex-col  sm:flex-row sm:-mx-3 mt-12">
                <div className="flex-1 px-3">
                  <div
                    className="p-12 rounded-lg bg-white border border-solid border-gray-200 mb-8"
                    style={{ boxShadow: "0 10px 28px rgba(0,0,0,.08)" }}
                  >
                    <p className="font-semibold text-xl text-blue-600">Top15</p>
                    <p className="mt-4">
                      Know about the top 15 Crypto Currencies with their Market cap and Total Volume
                    </p>
                  </div>
                </div>
                <div className="flex-1 px-3">
                  <div
                    className="p-12 rounded-lg border border-solid bg-white border-gray-200 mb-8"
                    style={{ boxShadow: "0 10px 28px rgba(0,0,0,.08)" }}
                  >
                    <p className="font-semibold text-xl text-blue-600">Trending</p>
                    <p className="mt-4">
                      Explore the trending Crypto Currencies in the world
                    </p>
                  </div>
                </div>
                <div className="flex-1 px-3">
                  <div
                    className="p-12 rounded-lg border border-solid bg-white border-gray-200 mb-8"
                    style={{ boxShadow: "0 10px 28px rgba(0,0,0,.08)" }}
                  >
                    <p className="font-semibold text-xl text-blue-600">WatchList</p>
                    <p className="mt-4">
                      Save your favourite cryptos and maintain in the watchlist
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home; // Exporting the component for use in other files.
