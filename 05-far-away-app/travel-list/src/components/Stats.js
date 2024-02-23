const Stats = ({ items }) => {
  if (!items.length) {
    return (
      <p className="stats">
        <em></em>;
      </p>
    );
  }

  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you 've got everythings ! ready to go."
          : `you have ${numItems} items on your list and packed ${numPackedItems} of
        them ${percentage}%.`}
      </em>
    </footer>
  );
};

export default Stats;
