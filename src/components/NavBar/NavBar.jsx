import { Heart, Menu, Search, ShoppingCart, User } from "lucide-react";
import Cookies from "js-cookie"
import {Link} from "react-router-dom"

const NavBar = () => {


  return (
    
      <header className="bg-white shadow-sm absolute top-0 right-0 left-0">
        <div className="container">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">Comfort Zone</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {/* ... (previous navigation items) ... */}
            </nav>

            {/* Icons and Auth */}
            <div className="icon-btn flex items-center gap-2">  
              <button className="icon-btn">
                <Search className="icon-size" />
              </button>
              <button className="icon-btn">
                <Heart className="icon-size" />
              </button>
              <button className="icon-btn">
                <ShoppingCart className="icon-size" />
              </button>
              {Cookies.get("authEToken") === undefined ? <Link to="sign-in-up" className="btn btn-primary">Sing in</Link> : <User className="icon-size" />}
            </div>
          </div>
        </div>
      </header>
  );
};

export default NavBar;
