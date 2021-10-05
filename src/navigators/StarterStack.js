import { createStackNavigator } from 'react-navigation-stack';

import { StarterIntro } from '../screens/StarterIntro';
import { StarterName } from '../screens/StarterName';
import { StarterDays } from '../screens/StarterDays';
import { StarterLevel } from '../screens/StarterLevel';
import { StarterRecommendations } from '../screens/StarterRecommendations';

export const StarterStack = createStackNavigator({
  StarterIntro,
  StarterName,
  StarterDays,
  StarterLevel,
  StarterRecommendations,
});
