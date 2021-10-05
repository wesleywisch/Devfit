/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import { Container, HeaderText, NextButton, WorkoutList } from './styles';

import workoutJson from '../../presetWorkouts.json';

import { Workout } from '../../components/Workout';

function StarterRecommendationsPage(props) {
  useEffect(() => {
    props.navigation.setParams({ myWorkouts: props.myWorkouts });
  }, [props.myWorkouts]);

  function handleAddAction(item) {
    if (props.myWorkouts.findIndex(i => i.id === item.id) < 0) {
      props.addWorkout(item);
    } else {
      props.delWorkout(item);
    }
  }

  return (
    <Container>
      <HeaderText>Opções de treino pré-criados</HeaderText>
      <HeaderText>Você selecionou {props.myWorkouts.length} treinos</HeaderText>

      <WorkoutList
        data={workoutJson}
        renderItem={({ item }) => (
          <Workout data={item} handleAddAction={() => handleAddAction(item)} />
        )}
        keyExtractor={item => String(item.id)}
      />
    </Container>
  );
}

StarterRecommendationsPage.navigationOptions = ({ navigation }) => {
  let btnNext = 'Ignorar';

  if (
    navigation.state.params &&
    navigation.state.params.myWorkouts.length > 0
  ) {
    btnNext = 'Concluir';
  }

  function handleNextAction() {
    navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'AppTab' })],
      }),
    );
  }

  return {
    title: '',
    headerRight: () => (
      <NextButton title={btnNext} onPress={handleNextAction} />
    ),
    headerRightContainerStyle: {
      marginRight: 10,
    },
  };
};

function mapStateToProps(state) {
  return {
    myWorkouts: state.userReducer.myWorkouts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addWorkout: workout =>
      dispatch({ type: 'ADD_WORKOUT', payload: { workout } }),
    delWorkout: workout =>
      dispatch({ type: 'DEL_WORKOUT', payload: { workout } }),
  };
}

export const StarterRecommendations = connect(
  mapStateToProps,
  mapDispatchToProps,
)(StarterRecommendationsPage);
