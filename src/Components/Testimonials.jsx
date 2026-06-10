import { BsStarFill } from "react-icons/bs";

function Testimonials() {
  const reviews = [
    {
      name: "Sarah Johnson",
      review:
        "Amazing quality and beautiful designs. My living room looks stunning!",
    },
    {
      name: "Michael Brown",
      review:
        "Fast delivery and excellent customer service. Highly recommended!",
    },
    {
      name: "Emma Wilson",
      review:
        "Premium furniture at affordable prices. I love the modern style.",
    },
  ];

  return (
    <section className="bg-[#F8F5F1] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      
      {/* HEADING */}
      <div className="text-center">
        <p className="text-amber-700 font-semibold text-sm sm:text-base">
          Testimonials
        </p>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
          What Our Customers Say
        </h1>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-14 lg:mt-16">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 sm:p-7 lg:p-8 rounded-3xl shadow-lg hover:-translate-y-2 sm:hover:-translate-y-3 duration-300"
          >
            {/* STARS */}
            <div className="flex gap-1 text-amber-500 text-lg sm:text-xl">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </div>

            {/* REVIEW TEXT */}
            <p className="text-gray-600 mt-4 sm:mt-5 text-sm sm:text-base">
              "{item.review}"
            </p>

            {/* NAME */}
            <h2 className="text-lg sm:text-xl font-bold mt-5 sm:mt-6">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;