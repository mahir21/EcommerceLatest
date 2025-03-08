import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#e07a5f] text-gray-200 font-sans py-8 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/productList" className="hover:underline">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <ul className="space-y-2">
            <li>Email: mart@gmail.com</li>
            <li>Phone: (789) 584-347</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-blue-500 transition">
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-pink-500 transition">
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
