import {Search, ShoppingCart, User } from "lucide-react";
import Cookies from "js-cookie"
import {Link} from "react-router-dom"

const NavBar = () => {


  return (
    
      <header className="bg-white shadow-sm absolute top-0 right-0 left-0">
        <div className="container">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">Trend hyeee</h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {/* ... (previous navigation items) ... */}
            </nav>

            {/* Icons and Auth */}
            <div className="icon-btn flex items-center gap-2">  
              <button className="icon-btn">
                <Search className="icon-size" />
              </button>
              <Link to="/cart">
                <ShoppingCart className="icon-size" />
              </Link>
              {Cookies.get("authEToken") === undefined ? <Link to="sign-in-up" className="btn btn-primary">Sing in</Link> : <User className="icon-size" />}
            </div>
          </div>
        </div>
      </header>
  );
};

export default NavBar;
