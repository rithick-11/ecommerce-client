import {
  Heart,
  LeafyGreen,
  ShoppingBag,
  ShoppingCart,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserAuthenticationContext } from "../../context/UserAuthenticationContext";
import { logo } from "../../config/staticData";

const NavBar = () => {
  const { user } = useContext(UserAuthenticationContext);
  const { isAunthenticated, userInfo } = user;

  return (
    <header className="bg-gray-200 shadow-lg">
      <nav className="container py-2 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <LeafyGreen className="text-orange-500" />
          <h1 className="text-lg font-sans font-semibold text-primary">
            Get Ship
          </h1>
        </Link>
        <div className="flex gap-2 items-center">
          <Heart />
          <Link to="/cart">
            <ShoppingBag />
          </Link>
          <div className="btn btn-primary ml-3">
            {isAunthenticated ? (
              <Link className="flex gap-1 items-center text-sm">
                <User />
                <p>{userInfo.name.slice(0, 7)}</p>
              </Link>
            ) : (
              <Link to="/sign-in-up">Sing in/up</Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
