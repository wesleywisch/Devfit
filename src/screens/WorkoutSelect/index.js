import React from 'react';
import { connect } from 'react-redux';
import { HeaderBackButton } from 'react-navigation-stack';
import { StackActions, NavigationActions } from 'react-navigation';

import { WorkoutSelectContainer, WorkoutList } from './styles';

import { Workout } from '../../components/Workout';

function WorkoutSelectPage(props) {
  function goWorkout(workout) {
    props.navigation.navigate('WorkoutChecklist', { workout });
  }

  return (
    <WorkoutSelectContainer>
      <WorkoutList
        data={props.myWorkouts}
        renderItem={({ item }) => (
          <Workout data={item} handleGoAction={() => goWorkout(item)} />
        )}
      />
    </WorkoutSelectContainer>
  );
}

WorkoutSelectPage.navigationOptions = ({ navigation }) => {
  function handleBackAction() {
    navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'AppTab' })],
      }),
    );
  }

  return {
    title: 'Escolha seu treino',
    headerLeft: () => <HeaderBackButton onPress={handleBackAction} />,
  };
};

function mapStateToProps(state) {
  return {
    myWorkouts: state.userReducer.myWorkouts,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export const WorkoutSelect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WorkoutSelectPage);
