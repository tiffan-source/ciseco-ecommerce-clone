import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <>
      <footer class="bg-white shadow py-8">
        <div className="container mx-auto">
          <div className="flex md:flex-row md:justify-between flex-col items-center md:gap-0 gap-y-4">
            <Link to="/" title="Ciseco ECommerce">
              <img src="logo.png" alt="logo" loading="lazy" height="150" width="150" />
            </Link>
            <p>© {year} Ciseco ECommerce, All Right Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
