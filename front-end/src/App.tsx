import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { ConnectedRouter } from 'react-router-redux';
// import Profile from './components/Profile';
import CounterContainer from './containers/CounterContainer';
import TodoListContainer from './containers/TodoListContainer';

class App extends React.Component {
  render() {
    return (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={CounterContainer} />
        <Route path="/home" component={TodoListContainer} />
        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;
