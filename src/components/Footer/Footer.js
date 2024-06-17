import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 */}
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-3">Company</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Careers</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Press</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Blog</a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-3">Group Companies</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">Westside</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">H&M</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">ZARA</a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-3">Support</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">Help Center</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Status</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Documentation</a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="mb-4 flex flex-col items-center">
            <h3 className="text-xl font-bold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
