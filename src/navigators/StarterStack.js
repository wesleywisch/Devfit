import { createStackNavigator } from 'react-navigation-stack';

import { StarterIntro } from '../screens/StarterIntro';
import { StarterName } from '../screens/StarterName';
import { StarterDays } from '../screens/StarterDays';

export const StarterStack = createStackNavigator({
  StarterIntro,
  StarterName,
  StarterDays,
});
