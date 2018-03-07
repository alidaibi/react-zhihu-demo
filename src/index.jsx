import 'assets/styles/style.less';
import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import AsyncComponent from './AsyncComponent';
import Header from './components/header';
import Body from './components/body';
import rootReducer from './reducer/index';

const store = createStore(
  combineReducers({ ...rootReducer })
);

const Login = AsyncComponent(() => import('./login'));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={Body} />
            <Route path='/login' component={Login} />
            <Route path='/index' component={Body} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
