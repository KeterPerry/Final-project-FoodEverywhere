import { Question } from "../../components/question/question.js";
import "./game.css";
import userApi from "../../apis/userApi";
import { useState, useEffect } from "react";
import { useGame } from "../../context/Game.context.js";
import Spinner from "../../components/spinner/Spinner.js";
// import CountUp from "react-countup";
import { Counter } from "../../components/counter.js";
import StopWatch from "../../components/stopWatch/stopWatch";

export default function Game({}) {
  const { questions, setQuestions, index, setIndex, score, setScore } =
    useGame();
  const [isSpinner, setIsSpinner] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  console.log(index);

  const reset = () => {
    document.location.reload();
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await userApi().get("/questions/getQuestions");
        console.log(data);
        console.log(data[0].image);
        console.log(data[0].answers.a);
        setQuestions(data);
        setIsSpinner(false);
      } catch (err) {
        console.log(err);
        setErrorMessage("There has been an error, please try again");
      }
    }

    fetchData();
  }, [index]);

  return (
    <>
      {isSpinner ? (
        <Spinner />
      ) : (
        <div className="game">
          <h1 className="score">Score: {score}</h1>
          <div className="question-cont">
            <div className="stop-watch-div">
              <StopWatch />
            </div>
            <div className="question-div">
              <Question question={questions[index]} />
            </div>
            <div className="reset">
              <button onClick={reset}>Reset</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
