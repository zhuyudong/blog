import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

const Auth = () => (
  <Router>
    <div>
      <AuthButton />
      <ul>
        <li><Link to="public">Publish Page</Link></li>
        <li><Link to="protected">Protected Page</Link></li>
      </ul>
      <Route path="/public" component={Public} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/protected" component={Protected} />
    </div>
  </Router>
);

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
}

const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
    <p>
      Welcom! <button onClick={() => {
        fakeAuth.signout(() => history.pushState('/'))
      }}
      >Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
));

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;

class Login extends React.Component {
  state = {
    rediectToReferrer: false
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({rediectToReferrer: true});
    });
  }

  render() {
    const { from } = this.props.location.state || {
      from: {
        pathname: '/'
      }
    };
    const { rediectToReferrer } = this.state;
    if (rediectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

export default Auth;