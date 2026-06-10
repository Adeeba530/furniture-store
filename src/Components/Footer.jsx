function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4 sm:px-8">
      <div className="grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
       <h1 className="text-2xl sm:text-3xl font-bold text-amber-500">
            FurniCraft
          </h1>

          <p className="text-gray-400 mt-5">
            Bringing comfort and elegance to your home with modern furniture.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>

          <ul className="space-y-3 text-gray-400">
            <li><a href="#home" className="hover:text-amber-500">Home</a></li>
            <li><a href="#shop" className="hover:text-amber-500">Shop</a></li>
            <li><a href="#about" className="hover:text-amber-500">About</a></li>
            <li><a href="#contact" className="hover:text-amber-500">Contact</a></li>
          </ul>
        </div>

        {/* Categories CONNECTED */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Categories</h2>

          <ul className="space-y-3 text-gray-400">
            <li><a href="#living-room" className="hover:text-amber-500">Living Room</a></li>
            <li><a href="#bedroom" className="hover:text-amber-500">Bedroom</a></li>
            <li><a href="#office" className="hover:text-amber-500">Office</a></li>
            <li><a href="#dining-room" className="hover:text-amber-500">Dining Room</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>

          <ul className="space-y-3 text-gray-400">
            <li>Email: info@furnicraft.com</li>
            <li>Phone: +92 300 0000000</li>
            <li>Pakistan</li>
          </ul>
        </div>

      </div>

      <hr className="my-10 border-gray-700" />

      <p className="text-center text-gray-500">
        © 2026 FurniCraft. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;