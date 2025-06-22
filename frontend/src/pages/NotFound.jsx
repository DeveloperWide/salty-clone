// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";
import Image404 from "../assets/404_Image.png"

function NotFound() {
  return (
    <div className="h-screen flex justify-center items-center bg-white px-4 text-center">
      {/* Oops! text with image background inside text */}
      <div>
        <img src={Image404} alt="Image 404" className="h-90" />
      </div>

      <div>
        <h2 className="text-4xl font-bold text-red-500 mb-4 font-sans">404 - Page Not Found</h2>
        <p className="text-gray-600 mb-6">The page you’re looking for doesn’t exist.</p>
        <Link to="/" className="text-blue-500 hover:underline font-medium">
          Go back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
