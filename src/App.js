import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import Router from './router/Routes';

const store = createStore(reducers, {}, applyMiddleware(thunk))

class App extends React.Component{
  render() {
    return(
      <Provider store={store}>
        <Router/>
      </Provider>
    )
  }
}

export default App;