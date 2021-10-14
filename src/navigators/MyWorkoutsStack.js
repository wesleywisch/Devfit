import { createStackNavigator } from 'react-navigation-stack';

import { MyWorkouts } from '../screens/MyWorkouts';
import { EditWorkout } from '../screens/EditWorkout';

export const MyWorkoutsStack = createStackNavigator({
  MyWorkouts,
  EditWorkout,
});
