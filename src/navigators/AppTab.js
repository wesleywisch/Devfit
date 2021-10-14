import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { CustomTabBar } from '../components/CustomTabBar';

import { HomeStack } from './HomeStack';
// import { WorkoutStack } from './WorkoutStack';
import { MyWorkoutsStack } from './MyWorkoutsStack';

export const AppTab = createBottomTabNavigator(
  {
    HomeStack,
    // WorkoutStack,
    MyWorkoutsStack,
  },
  {
    tabBarComponent: props => (
      <CustomTabBar
        {...props}
        itens={[
          {
            type: 'regular',
            text: 'Início',
            icon: require('../assets/home.png'),
            route: 'HomeStack',
          },
          {
            type: 'big',
            icon: require('../assets/dumbbell.png'),
            route: 'WorkoutStack',
          },
          {
            type: 'regular',
            text: 'Meus treinos',
            icon: require('../assets/myworkouts.png'),
            route: 'MyWorkoutsStack',
          },
        ]}
      />
    ),
  },
);
