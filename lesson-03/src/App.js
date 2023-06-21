import "./App.css";
import Register from "./register/register";
import img from "./img/Vector.png";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Shop App</h1>
        <img src={img} />
      </header>

      <main>
        <h3>Welcome to Shop App</h3>
        <Register type="text" placeholder="User Name" />
        <Register type="email" placeholder="Email@mail.com" />
        <Register type="password" placeholder="Password" />
        <Register type="password" placeholder="Confirm Password" />
        <div className="buttons">
          <button className="button" type="button">
            <strong>Register</strong>
          </button>
          <button className="login" type="button">
            <strong>Login</strong>
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
