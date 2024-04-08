import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

const Header = () => {
  return (
    <header className="bg-yellow-500 uppercase">
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
