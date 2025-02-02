// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="button button-primary">
        Go Back Home
      </Link>
    </div>
  );
};
export default NotFound;