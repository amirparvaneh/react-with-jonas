import Options from "./Options";

const Questions = ({ question, answer, dispatch }) => {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
};

export default Questions;
