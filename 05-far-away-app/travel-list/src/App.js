const App = () => {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
};

const Logo = () => {
  return (
    <div>
      <h1>Far Away</h1>
    </div>
  );
};

const Form = () => {
  return (
    <div className="add-form">
      <h3>what do you need for your trip ?</h3>
    </div>
  );
};

const PackingList = () => {
  return (
    <div className="list">
      <h2>List</h2>
    </div>
  );
};

const Stats = () => {
  return (
    <footer className="stats">
      you have x items on your list and packed (x%) of them
    </footer>
  );
};

export default App;
