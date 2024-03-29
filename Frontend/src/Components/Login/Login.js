import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  var navigate = useNavigate();
  return (
    <div
      className="loginBody"
    >
      <h2>Login</h2>
      <div className="studentLogin">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            var email = event.target.email.value;
            var password = event.target.password.value;
            if(email.length === 0 || password.length === 0){
              alert("Empty Fields");
              return;
            }
          
            axios
              .post("http://localhost:5000/login/api/login", {
                email: email,
                password: password,
              })
              .then((res) => {
                if(res.data.user.role === 'Teacher'){
                  navigate("/teacherHome")
                }
                else{
                  navigate("/AllQuizPage")
                }
                // navigate("/StudentView/" + res.data.role);
                // navigate("/AllQuizPage");
              })
              .catch((err) => {
                alert("Invalid Credentials" + err);
                console.log("Err", err);
              });
          }}
        >

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary bg-secondary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
