import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './components/pages/HomeScreen';
import FinderScreen from './components/pages/FinderScreen';

const ScreenStack = createStackNavigator({
  Home: { screen: HomeScreen},
  Finder: { screen: FinderScreen},
});

const App = createAppContainer(ScreenStack);

export default App;