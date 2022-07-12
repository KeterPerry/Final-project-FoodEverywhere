import { Question } from "../../components/question/question.js";
import "./home.css";
import userApi from "../../apis/userApi";
import { useState, useEffect } from "react";
import { useGame } from "../../context/Game.context.js";
import Spinner from "../../components/spinner/Spinner.js";

export default function Home({}) {
  const { questions, setQuestions } = useGame();
  const [isSpinner, setIsSpinner] = useState(true);
  const { index, setIndex } = useGame();
  const [errorMessage, setErrorMessage] = useState(null);

  console.log(index);
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
    <div>
      {isSpinner ? (
        <Spinner />
      ) : (
        <div className="game">
          <Question question={questions[index]} />
        </div>
      )}
    </div>
  );
}

{
  /* <img src={questions[0].image}></img> */
}
{
  /* <div>{insertData()}</div> */
}
