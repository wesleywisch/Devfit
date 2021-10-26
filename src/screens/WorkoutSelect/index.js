import React from 'react';
import { connect } from 'react-redux';
import { HeaderBackButton } from 'react-navigation-stack';
import { StackActions, NavigationActions } from 'react-navigation';

import { WorkoutSelectContainer, WorkoutList, Title } from './styles';

import { Workout } from '../../components/Workout';

function WorkoutSelectPage(props) {
  let lastWorkout = false;

  if (props.lastWorkout) {
    lastWorkout = props.myWorkouts.find(i => i.id === props.lastWorkout);
  }

  function goWorkout(workout) {
    props.navigation.navigate('WorkoutChecklist', { workout });
  }

  return (
    <WorkoutSelectContainer>
      {lastWorkout && (
        <>
          <Title>Seu ultimo treino foi:</Title>
          <Workout data={lastWorkout} />
        </>
      )}

      <Title>Escolha seu treino de hoje:</Title>

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
    lastWorkout: state.userReducer.lastWorkout,
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
