import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    setIsLoggedIn(!!token);
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (e) {
        setUser(null);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="fixed w-full top-0 left-0 bg-black bg-opacity-80 backdrop-blur-sm text-white z-20 px-6 py-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tight hover:text-purple-400 transition">
          Todo3D
        </Link>
        <ul className="flex items-center gap-4 sm:gap-6 text-sm">
          {isLoggedIn ? (
            <>
              <li>
                <Link className="hover:text-purple-400 transition" to="/todos">
                  ToDos
                </Link>
              </li>
              {user && (
                <li className="hidden sm:block text-white/60">
                  {user.name}
                </li>
              )}
              <li>
                <button
                  onClick={handleLogout}
                  className="hover:text-purple-400 transition"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="hidden sm:block">
                <a href="#features" className="hover:text-purple-400 transition">
                  Features
                </a>
              </li>
              <li>
                <Link className="hover:text-purple-400 transition" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link
                  className="inline-flex items-center gap-1 rounded-full border border-purple-400/60 bg-purple-600/90 px-4 py-1.5 text-xs font-semibold hover:bg-purple-700 transition shadow-[0_10px_30px_rgba(147,51,234,0.5)]"
                  to="/signup"
                >
                  <span>Sign up</span>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
