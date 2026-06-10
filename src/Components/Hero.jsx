function Hero() {
  return (
    <section
      id="home"
      className="bg-[#F8F5F1] min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-5 md:px-10 lg:px-16 py-12 gap-10"
    >
      {/* Left Side */}
      <div  data-aos="fade-up"className="w-full md:w-1/2 text-center md:text-left">
        <p className="text-amber-700 font-semibold mb-4 text-sm md:text-base">
          Modern Furniture Collection
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
          Elevate Your Living Space With Modern Furniture
        </h1>

        <p className="text-gray-600 mt-6 text-base md:text-lg">
          Discover premium furniture designed to bring elegance,
          comfort and style into your home.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <a
            href="#shop"
            className="bg-amber-700 text-white px-7 py-4 rounded-xl hover:bg-amber-800 duration-300 hover:scale-105"
          >
            Shop Now
          </a>

          <a
            href="#about"
            className="border-2 border-black px-7 py-4 rounded-xl hover:bg-black hover:text-white duration-300"
          >
            Explore More
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc"
          alt="Sofa"
          className="w-full max-w-md lg:max-w-xl rounded-3xl shadow-2xl object-cover"
        />
      </div>
    </section>
  );
}

export default Hero;