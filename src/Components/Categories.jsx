import livingRoomImg from "../assets/livingroom.jpg";
import BedRoomImg from "../assets/bedroom.jpg";
import OfficeImg from "../assets/office.jpg";
import DiningRoomImg from "../assets/diningroom.jpg";

function Categories() {
  const categories = [
    {
      title: "Living Room",
      image: livingRoomImg,
      id: "living-room",
    },
    {
      title: "Bed Room",
      image: BedRoomImg,
      id: "bed-room",
    },
    {
      title: "Office",
      image: OfficeImg,
      id: "office",
    },
    {
      title: "Dining Room",
      image: DiningRoomImg,
      id: "dining-room",
    },
  ];

  return (
    <section id="shop" className="py-20 px-5 md:px-10 lg:px-16 bg-white">
      <div className="text-center">
        <p className="text-amber-700 font-semibold">Categories</p>
        <h1 className="text-3xl md:text-5xl font-bold mt-3">
          Explore By Categories
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {categories.map((item) => (
          <div
            key={item.id}
            id={item.id}
            className="relative rounded-3xl overflow-hidden group cursor-pointer h-80 sm:h-96 shadow-lg"
          >
            {/* Image wrapper */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover object-center transform-gpu group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

            {/* Text */}
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                {item.title}
              </h2>

              <a
                href="#product"
                className="inline-block bg-white text-black px-5 py-2 rounded-full hover:bg-amber-700 hover:text-white transition"
              >
                View Collection →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;