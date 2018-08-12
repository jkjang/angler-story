import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/main.scss';
import LandingPage from 'pages/Landing';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={LandingPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
