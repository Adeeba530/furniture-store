import { useState } from "react";

import sofaImg from "../assets/sofa.jpg";
import chairImg from "../assets/chair.jpg";
import coffeeImg from "../assets/coffee.png";
import bedImg from "../assets/bedframe.jpg";

function Product() {
  const [zoomImg, setZoomImg] = useState(null);

  const product = [
    { name: "Modern Sofa", price: "$499", image: sofaImg },
    { name: "Wooden Chair", price: "$149", image: chairImg },
    { name: "Coffee Table", price: "$199", image: coffeeImg },
    { name: "Bed Frame", price: "$699", image: bedImg },
  ];

  return (
    <section className="bg-[#F8F5F1] py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-amber-700 font-semibold">Our Collection</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
          Featured Products
        </h1>
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {product.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg overflow-hidden"
          >
            {/* CLICK IMAGE */}
            <img
              src={item.image}
              alt={item.name}
              onClick={() => setZoomImg(item.image)}
              className="h-52 sm:h-60 lg:h-72 w-full object-cover cursor-pointer hover:scale-105 duration-300"
            />

            <div className="p-5">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-amber-700 text-lg font-bold mt-2">
                {item.price}
              </p>

              <a
                href="#contact"
                className="inline-block bg-amber-700 text-white px-5 py-2 rounded-xl mt-4 hover:bg-amber-800"
              >
                Shop Now
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ZOOM MODAL */}
      {zoomImg && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setZoomImg(null)}
        >
          <img
            src={zoomImg}
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl scale-100 transition"
            alt="zoom"
          />
        </div>
      )}
    </section>
  );
}

export default Product;