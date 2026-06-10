import { BsAward, BsTruck, BsCashCoin, BsHeadset } from "react-icons/bs";

function WhyChooseUs() {
  const features = [
    {
      title: "Premium Quality",
      desc: "Crafted with the finest materials for lasting comfort.",
      icon: <BsAward />,
    },
    {
      title: "Fast Delivery",
      desc: "Quick and reliable delivery to your doorstep.",
      icon: <BsTruck />,
    },
    {
      title: "Affordable Prices",
      desc: "Luxury furniture at budget-friendly prices.",
      icon: <BsCashCoin />,
    },
    {
      title: "24/7 Support",
      desc: "Friendly customer support whenever you need help.",
      icon: <BsHeadset />,
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      
      {/* HEADING */}
      <div className="text-center">
        <p className="text-amber-700 font-semibold text-sm sm:text-base">
          Why Choose Us
        </p>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
          Experience The Difference
        </h1>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-10 sm:mt-14 lg:mt-16">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-[#F8F5F1] rounded-3xl p-6 sm:p-7 lg:p-8 shadow-lg hover:-translate-y-2 sm:hover:-translate-y-3 duration-300"
          >
            {/* ICON */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center text-2xl sm:text-3xl text-amber-700">
              {item.icon}
            </div>

            {/* TITLE */}
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mt-4 sm:mt-5">
              {item.title}
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;