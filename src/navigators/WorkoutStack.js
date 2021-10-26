import { createStackNavigator } from 'react-navigation-stack';

import { WorkoutSelect } from '../screens/WorkoutSelect';
// import { WorkoutChecklist } from '../screens/WorkoutChecklist';

export const WorkoutStack = createStackNavigator({
  WorkoutSelect,
  // WorkoutChecklist,
});
