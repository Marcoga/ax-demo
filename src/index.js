import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => (
  <div>
    <h2 style={{ color: "steelblue" }}>Home</h2>
    <Hello>Home Component</Hello>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
    <Hello>About Component</Hello>
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const App = () => (
  <Router>
    <div>
      <div
        style={{
          display: "flex",
          width: 300,
          justifyContent: "space-around",
          padding: 10
        }}
      >
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/topics">Topics</Link>
        </div>
      </div>
      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

render(<App />, document.getElementById("root"));
