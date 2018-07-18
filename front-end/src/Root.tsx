import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/configureStore';

const store = configureStore();

class Root extends React.Component {
  render() {
    return (
      // <Provider store={store} >
      //   <App />
      // </Provider>
      <Provider store={store}>
      {/* <ConnectedRouter history={history}> */}
        <App />
      {/* </ConnectedRouter> */}
    </Provider>
      ); 
  }
 }

export default Root;