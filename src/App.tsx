import * as React from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './rootReducer';
import { enhancer as demutxEnhancer } from 'demutx';
import ActivityList from './ActivityList'
const logo = require('./logo.svg');

const store = createStore(reducer, composeWithDevTools({})(demutxEnhancer));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}> 
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Hello</h1>
          </header>
          <p className="App-intro">
            How was your day?
          </p>
          <ActivityList />
        </div>
      </Provider>
    );
  }
} 

export default App;
