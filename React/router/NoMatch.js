import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

const NoMatchExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/old-match">Old Match, to be rediected</Link></li>
        <li><Link to="/will-match">Will Match</Link></li>
        <li><Link to="/will-not-match">Will Not Match</Link></li>
        <li><Link to="/also/will/not/match">Also Will Not Match</Link></li>
      </ul>
      <Switch>
        <Route path="/" exact component={Home} />
        <Redirect from="/old-match" to="will-match" />
        <Route path="/will-match" component={WillMatch} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

const Home = () => (
  <p>
    A <code>&lt;Switch></code> renders the first child
    <code> &lt;Route></code> that matchs. A 
    <code> &lt;Route></code> with no 
    <code> path</code> always matchs.
  </p>
);

const WillMatch = () => <h3>Match!</h3>;

const NoMatch = ({ location }) => (
  <div>
    <h3>No Match for <code>{location.pathname}</code></h3>
  </div>
);

export default NoMatchExample;