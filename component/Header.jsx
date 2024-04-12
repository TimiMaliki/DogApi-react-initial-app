import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full bg-white text-black justify-between text-center items-center p-8 sticky">
      <Link to="/"><h1 className="text-3xl font-extrabold">Maliki</h1></Link> 

      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li className="font-sans text-base">
          <Link to="/">Home</Link>
        </li>
        <li className="font-sans text-base">
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
