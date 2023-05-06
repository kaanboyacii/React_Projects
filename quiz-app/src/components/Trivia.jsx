import { useEffect, useState } from "react";

export default function Trivia({
  data,
  setTimeOut,
  setQuestionNumber,
  questionNumber,
}) {
  const [question,setQuestion]=useState(null);
  useEffect(()=>{
    setQuestion(data[questionNumber - 1])
  },[data,questionNumber])
  return (
    <div className="trivia">
      <div className="question">What's the best football club in Turkey ?</div>
      <div className="answers">
        <div className="answer correct">Galatasaray</div>
        <div className="answer">Beşiktaş</div>
        <div className="answer">Fenerbahçe</div>
        <div className="answer">TrabzonSpor</div>
      </div>
    </div>
  );
}
