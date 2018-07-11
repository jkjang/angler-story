import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Randing from './containers/Randing';

import './../styles/main.scss';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Randing} />
        <Route exact path="/randing" component={Randing} />
        <Route path="/randing/:name" component={Randing} />
      </Switch>
    );
  }
}

export default App;
