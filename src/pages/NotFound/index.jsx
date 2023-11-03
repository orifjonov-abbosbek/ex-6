import React from "react";
import { Link } from "react-router-dom";
import './style.scss' 

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1>Oops! Page Not Found</h1>
        <p>It seems like you've taken a wrong turn.</p>
        <img src="404-image.png" alt="404 Not Found" />{" "}
        <p>But don't worry, you can go back to the .</p>
        <Link to="/">Home Page</Link>
      </div>
    </div>
  );
};

export default NotFound;
