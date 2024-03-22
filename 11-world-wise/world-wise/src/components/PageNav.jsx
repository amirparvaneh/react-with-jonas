import { Link, NavLink } from "react-router-dom";

const PageNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <Link to="/product">product</Link>
        </li>
        <li>
          <Link to="/pricing">pricing</Link>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
