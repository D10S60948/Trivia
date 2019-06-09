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
    initialRouteName: 'WelcomePage',
    transitionConfig: () => fadeIn(2000),
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#43B2B0',
        height: 0
      },
      headerTintColor: 'rgba(0,0,0,0)',
    }
  }
);

const AppNavigator = createAppContainer(navigator)

export default AppNavigator;