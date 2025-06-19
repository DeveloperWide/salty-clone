// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6">The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
}

export default NotFound;
