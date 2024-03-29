import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
function Scorecard() {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    axios
      .post("http://localhost:5000/questions/calculateAnswer", {
        question: state.answerSheet,
      })
      .then((res) => {
        console.log("Res", res);
      })
      .catch((err) => {
        console.log("Err", err);
      });
  });

  return (
    <>
      <div className="card container bg-success my-3 text-center text-warning score-card">
        <h2>Scorecard</h2>
        <hr style={{height:"5px", color:"white"}}></hr>
        <p>Quiz By : {state.user_id}</p>
        <p>Total Questions : 2</p>
        <p>Right Questions : 2</p>
        <p>Percentage : 100%</p>
      </div>


    </>
  );
}
export default Scorecard;
