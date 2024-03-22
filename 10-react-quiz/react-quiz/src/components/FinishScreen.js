const FinishScreen = ({ points, maxPossiblePoints, highScore, dispatch }) => {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;

  if (percentage === 100) emoji = "🎖";
  if (percentage >= 80 && percentage < 100) emoji = "🤩";
  if (percentage >= 50 && percentage < 80) emoji = "🥳";
  if (percentage > 0 && percentage < 50) emoji = "😑";
  if (percentage === 0) emoji = "🤦‍♂️";
  return (
    <>
      <div className="result">
        <p>
          <span>{emoji}</span>Your score <strong>{points}</strong> out of{" "}
          {maxPossiblePoints} ({Math.ceil(percentage)}%)
        </p>
        <p className="highscore">(HighScore : {highScore})</p>
      </div>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz!
      </button>
    </>
  );
};

export default FinishScreen;
