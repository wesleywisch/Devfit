import { createStackNavigator } from 'react-navigation-stack';

import { StarterIntro } from '../screens/StarterIntro';
import { StarterName } from '../screens/StarterName';

export const StarterStack = createStackNavigator({
  StarterIntro,
  StarterName,
});
