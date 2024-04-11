import CreateUser from "../features/user/CreateUser";
import { useSelector } from "react-redux";
import Button from "./Button";

const Home = () => {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 text-center sm:my-16">
      <h1 className="mb-8 text-center text-xl font-semibold text-stone-700 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering,{username}
        </Button>
      )}
    </div>
  );
};

export default Home;
