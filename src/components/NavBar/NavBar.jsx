import { Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserAuthenticationContext } from "../../context/UserAuthenticationContext";

const NavBar = () => {
  const { user } = useContext(UserAuthenticationContext);

  const { isAunthenticated, userInfo } = user;

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
            {isAunthenticated ? (
              <div className="flex items-center text-sm btn btn-primary">
              <User className="icon-size" />
              <p>{userInfo.name.slice(0,7)}</p>              
            </div>
              
            ) : (
              <Link to="sign-in-up" className="btn btn-primary">
                Sing in
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
