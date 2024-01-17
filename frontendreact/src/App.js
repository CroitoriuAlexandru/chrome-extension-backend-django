import logo from "./logo.svg";
import "./App.css";
import $ from "jquery";

function Login() {
  const handleLogin = () => {
    console.log("hello workld !");
    $.ajax({
      url: "http://localhost:8000/test/",
      method: "GET",
      success: function (data) {
        console.log("Call Success !");
        // Handle the successful response here
      },
      error: function (xhr, status, error) {
        console.log("Call Fail !");
        // Handle any errors here
      },
    });
  };

  return (
    <div className="login">
      <h3>Logare</h3>
      <input className="input" type="text" placeholder="Utilizator" />
      <br />
      <input className="input" type="password" placeholder="Parola" />
      <br />
      <button className="buton" type="submit" onClick={handleLogin}>
        Logare
      </button>
    </div>
  );
}

export default Login;
