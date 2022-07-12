import "./question.css";
import { useState } from "react";
import { useGame } from "../../context/Game.context.js";

export function Question({ question }) {
  const [comment, setComment] = useState("");
  const { index, setIndex } = useGame(0);
  const { questions, setQuestions } = useGame();

  const handleClick = (e) => {
    console.log(questions.length);
    if (index === questions.length - 1) {
      alert("Good Job");
    } else {
      if (e.target.innerText === question.correctAnswer) {
        e.target.color = "green";
        setComment("Well Done!");
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
        <img
          style={{ width: "25rem", height: "25rem" }}
          alt="#"
          //   src="https://www.pngkey.com/maxpic/u2q8w7q8o0t4t4o0/"
          src={question.image}
        ></img>
        {/* {`./assets/dice-${this.props.index}.png`} */}
        <br></br>
        <br></br>
        <h2>{question.question}</h2>
        <br></br>
        <br></br>
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
