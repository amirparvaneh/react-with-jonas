import "./index.css";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  const [showAddFriend, setShowAddFriend] = useState(false);

  const handleShowAddFriend = () => {
    setShowAddFriend((show) => !show);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        {showAddFriend && <FriendAddForm />}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
};

const FriendList = () => {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

const Friend = ({ friend }) => {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          you owe {friend.name} {friend.balance}euro{" "}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owe you{Math.abs(friend.balance)}euro
        </p>
      )}
      {friend.balance === 0 && <p>you and {friend.name} are even</p>}
      <button className="button">Select</button>
    </li>
  );
};

const Button = ({ children, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

const FriendAddForm = () => {
  return (
    <form className="form-add-friend">
      <label>👫 Friend name</label>
      <input type="text" />

      <label>🪪 image url </label>
      <input type="text" />

      <Button>Add</Button>
    </form>
  );
};

const FormSplitBill = () => {
  return (
    <form className="form-split-bill">
      <h2> Split a bill with your friend</h2>

      <label>💰 Bill expense </label>
      <input type="text" />
      <label>👱‍♂️ your expense </label>
      <input type="text" />
      <label>🧑🏻‍🤝‍🧑🏻 X's expense </label>
      <input type="text" disabled />
      <label>🤑 who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
};

export default App;
