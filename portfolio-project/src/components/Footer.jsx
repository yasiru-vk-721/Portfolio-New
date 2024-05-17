import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaMedium, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center sm:text-left">
            <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-lg font-semibold text-white mb-4">Contact Me</h2>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Address: </span>78, Bangama road, Akuressa, Srilanka. 81400</li>
              <li><span className="text-gray-300">Phone: </span>+94 (71/75) 74 68 432</li>
              <li><span className="text-gray-300">Email: </span>yasiru.k721@gmail.com</li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-lg font-semibold text-white mb-4">Follow Me</h2>
            <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white transition duration-300">
        <FaFacebook />
      </a>
      <a href="#" className="text-gray-300 hover:text-white transition duration-300">
        <FaTwitter />
      </a>
      <a href="#" className="text-gray-300 hover:text-white transition duration-300">
        <FaInstagram />
      </a>
      <a href="#" className="text-gray-300 hover:text-white transition duration-300">
        <FaGithub />
      </a>
      <a href="#" className="text-gray-300 hover:text-white transition duration-300">
        <FaMedium />
      </a>
      <a href="#" className="text-gray-300 hover:text-white transition duration-300">
        <FaLinkedin />
      </a>
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-lg font-semibold text-white mb-4">Newsletter</h2>
            <form className="flex flex-col">
              <input type="email" placeholder="Your email" className="bg-gray-800 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300" />
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 mt-2 rounded hover:bg-blue-600 transition duration-300">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-4">
        <p className="text-center text-gray-300">&copy; {new Date().getFullYear()} Yasiru Katuwandeniya. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
