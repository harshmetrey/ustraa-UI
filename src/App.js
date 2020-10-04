import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'

import Dashboard  from './containers/Dashboard'

import './styles/styles.css'



function App() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Dashboard} />
              </Switch>
            </BrowserRouter>
          </header>

        </div>
      </Provider>
    );
  }

export default App;
