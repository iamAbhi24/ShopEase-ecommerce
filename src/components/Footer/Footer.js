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
                <a href="https://www.westside.com/?utm_source=google&utm_medium=cpc&utm_campaign=WES_Search_Brand&gad_source=1&gclid=Cj0KCQjwvb-zBhCmARIsAAfUI2tGqsMsqaGaBnvfJIj0DdiIzGe9mQbCHEMPDTNz8Hb4J1UFX_OraBoaApROEALw_wcB" className="hover:underline">Westside</a>
              </li>
              <li className="mb-2">
                <a href="https://www2.hm.com/en_in/index.html" className="hover:underline">H&M</a>
              </li>
              <li className="mb-2">
                <a href="https://www.zara.com/in/" className="hover:underline">ZARA</a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-3">Call Us</h3>
            <ul>
              <li className="mb-2">
                +91 6289610912
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="mb-4 flex flex-col items-center">
            <h3 className="text-xl font-bold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/Abhishek-Srivastava/pfbid037FWoTUksCn7cQ1oYaLWAreMWipXTEXFcyegvhLykTWotBeMCr5uedbcMCGUHxj88l/?mibextid=kFxxJD" className="text-white hover:text-gray-400">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/iamabhishek_24/?utm_source=qr&igsh=Y2d1MndkaTlkOWlj" className="text-white hover:text-gray-400">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/abhishek-srivastava-9162b61b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-white hover:text-gray-400">
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
