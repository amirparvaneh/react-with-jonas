import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

const Header = () => {
  return (
    <header className="flex items-between justify-between bg-yellow-500 uppercase px-4 py-3 border-b border-stone-200 sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast react pizza
      </Link>
      <SearchOrder />
      <UserName />
      <p>profileName</p>
    </header>
  );
};

export default Header;
