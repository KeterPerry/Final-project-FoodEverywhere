import "./question.css";
import { useState } from "react";
import { useGame } from "../../context/Game.context.js";
import { useUser } from "../../context/User.context.js";
import userApi from "../../apis/userApi";

export function Question({ question }) {
  const [comment, setComment] = useState("");
  const { index, setIndex, score, setScore } = useGame(0);
  const { questions, setQuestions } = useGame();
  const { token } = useUser();

  const handleClick = async (e) => {
    console.log(e.target.value);
    console.log(questions.length);
    if (index === questions.length - 1) {
      alert("Good Job");
      try {
        const scoreUpdated = await userApi().patch(
          "/users/editScore",
          { score: score },
          {
            headers: { Authorization: token },
          }
        );
        console.log(scoreUpdated);
      } catch (err) {
        console.log(err);
      }
    } else {
      if (e.target.innerText === question.correctAnswer) {
        e.target.color = "green";
        setComment("Well Done!");
        setScore((prev) => prev + 1);
        setIndex((prev) => prev + 1);
      } else {
        e.target.color = "red";
        setComment("Too Bad!");
        setIndex((prev) => prev + 1);
      }
    }
  };
  return (
    <div className="wrapper">
      <div className="questionContainer">
        <div className="image">
          <img className="img" alt="#" src={question.image}></img>
        </div>

        <h2 className="question">{question.question}</h2>
        <div className="answers">
          <button onClick={handleClick}>{question.answers.a}</button>
          <button onClick={handleClick}>{question.answers.b}</button>
          <button onClick={handleClick}>{question.answers.c}</button>
          <button onClick={handleClick}>{question.answers.d}</button>
        </div>
        <h1 className="comment">{comment}</h1>
      </div>
    </div>
  );
}
