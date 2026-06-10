import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Product from "./components/Product";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { BsCart3 } from "react-icons/bs";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="fade-in">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="shop">
        <Categories />
      </section>

      <section id="product">
        <Product />
      </section>

      <section id="about">
        <WhyChooseUs />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <Newsletter />
      </section>

      <Footer />

      <BsCart3
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        title="Back to top"
        className="fixed bottom-6 right-6 text-5xl bg-amber-700 text-white p-4 rounded-full shadow-xl cursor-pointer hover:scale-110 active:scale-95 transition z-50"
      />
    </div>
  );
}

export default App;
