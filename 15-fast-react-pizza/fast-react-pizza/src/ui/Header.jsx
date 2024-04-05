import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

const Header = () => {
  return (
    <header>
      <Link to="/">Fast react pizza</Link>
      <SearchOrder />
      <p>profileName</p>
    </header>
  );
};

export default Header;
