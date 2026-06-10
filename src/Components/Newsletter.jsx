function Newsletter() {
  return (
    <section className="bg-amber-700 py-20 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-white">
          Get Latest Furniture Updates
        </h1>

        <p className="text-gray-200 mt-5">
          Subscribe to receive exclusive offers and new collection updates.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-white px-6 py-4 rounded-xl outline-none w-full md:w-[400px]"
          />

          <button
            onClick={() => alert("Subscribed successfully!")}
            className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 duration-300"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
