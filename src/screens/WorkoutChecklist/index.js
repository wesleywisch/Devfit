/* eslint-disable no-alert */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { StatusBar } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

import { ExerciseItem } from '../../components/ExerciseItem';

import {
  WorkoutChecklistContainer,
  SafeArea,
  WorkoutHeader,
  WorkoutTitle,
  WorkoutClose,
  WorkoutCloseText,
  WorkoutList,
} from './styles';

function WorkoutChecklistPage(props) {
  let workout = props.navigation.state.params.workout;

  const [exercises, setExercises] = useState([...workout.exercises]);

  function checkAction(item, index) {
    let newExercises = [...exercises];

    if (!item.done) {
      newExercises[index].done = true;
    } else {
      newExercises[index].done = false;
    }

    setExercises(newExercises);

    checkWorkout();
  }

  function checkWorkout() {
    if (exercises.every(i => i.done)) {
      alert('Parebéns! Você fez os exercicios de hoje');

      let today = new Date();
      let thisYear = today.getFullYear();
      let thisMonth = today.getMonth() + 1;
      let thisDay = today.getDate();
      thisMonth = thisMonth < 10 ? '0' + thisMonth : thisMonth;
      thisDay = thisDay < 10 ? '0' + thisDay : thisDay;
      let dateFormated = `${thisYear}-${thisMonth}-${thisDay}`;

      props.addProgress(dateFormated);
      props.setLastWorkout(workout.id);
      props.navigation.dispatch(
        StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'AppTab' })],
        }),
      );
    }
  }

  return (
    <WorkoutChecklistContainer source={require('../../assets/fitness.jpg')}>
      <StatusBar barStyle="light-content" />

      <SafeArea>
        <WorkoutHeader>
          <WorkoutTitle>{workout.name}</WorkoutTitle>
          <WorkoutClose
            onPress={() => props.navigation.goBack()}
            underlayColor="transparent">
            <WorkoutCloseText>X</WorkoutCloseText>
          </WorkoutClose>
        </WorkoutHeader>

        <WorkoutList
          data={exercises}
          renderItem={({ item, index }) => (
            <ExerciseItem
              data={item}
              index={index}
              checkAction={() => checkAction(item, index)}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </SafeArea>
    </WorkoutChecklistContainer>
  );
}

WorkoutChecklistPage.navigationOptions = ({ navigation }) => {
  return {
    headerShown: false,
  };
};

function mapStateToProps(state) {
  return {
    lastWorkout: state.userReducer.lastWorkout,
    myWorkouts: state.userReducer.myWorkouts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addProgress: date => dispatch({ type: 'ADD_PROGRESS', payload: { date } }),
    setLastWorkout: id =>
      dispatch({ type: 'SET_LASTWORKOUT', payload: { id } }),
  };
}

export const WorkoutChecklist = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WorkoutChecklistPage);
