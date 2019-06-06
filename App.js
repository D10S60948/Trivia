import React from 'react';
import AppNavigator from './AppNavigation';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/reducers';
 
const store = createStore(reducers);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>  
    );
  }
}

AppRegistry.registerComponent('Trivia', () => App);