import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/main.scss';
import LandingPage from 'pages/Landing';
// import CounterContainer from 'containers/CounterContainer';
import TodoListContainer from 'containers/TodoListContainer';

class App extends React.Component {
  render() {
    return (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={LandingPage} />
        <Route path="/home" component={TodoListContainer} />
        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;
