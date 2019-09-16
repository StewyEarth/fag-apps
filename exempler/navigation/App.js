import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Settings from './screens/Settings';
import Home from './screens/Home';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Settings: { screen: Settings },
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
  initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);
