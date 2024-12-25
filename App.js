/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootNavigation from './src/navigation/RootNavigation';
import RootReducer from './src/storage/RootReducer';
const store=createStore(RootReducer)
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

function App() {


  return (
 <Provider store={store}>

   <RootNavigation/>

  </Provider>

  )
}



export default App;
