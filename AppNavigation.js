import { createStackNavigator, createAppContainer } from 'react-navigation'
import MainPage from './navigation/MainPage'
import GamePage from './navigation/GamePage'
import WelcomePage from './navigation/WelcomePage'
import HighestScoresPage from './navigation/HighestScoresPage'
import { fadeIn } from 'react-navigation-transitions'

const navigator = createStackNavigator({
  WelcomePage: { screen: WelcomePage },
  MainPage: { screen: MainPage },
  GamePage: { screen: GamePage },
  HighestScoresPage: { screen: HighestScoresPage }
  },
  {
    headerMode: 'none',
  },
  {
    initialRouteName: 'WelcomePage',
    transitionConfig: () => fadeIn(2000),
  }
);

const AppNavigator = createAppContainer(navigator)

export default AppNavigator;