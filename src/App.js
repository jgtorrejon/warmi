import "./App.css";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/users">
          <Users/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>

      <header>
        <p>1. Intro page asking if you have an existing code to check or gonna get new one.</p>
        <p>2. If you already got a code :</p>
        <p>2.1. Check you gift list, still work on it and publish</p>
        <p>3. If you are new into this website</p>
        <p>3.1. </p>
        <p></p>
        <p></p>
      </header>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
