import React from 'react';
import { connect } from 'react-redux';

import {
  MyWorkoutsContainer,
  WorkoutList,
  ButtonArea,
  ButtonImage,
} from './styles';

import { Workout } from '../../components/Workout';

function MyWorkoutsPage(props) {
  function handleEditWorkout(workout) {
    props.navigation.navigate('EditWorkout', { workout });
  }

  return (
    <MyWorkoutsContainer>
      <WorkoutList
        data={props.myWorkouts}
        renderItem={({ item }) => (
          <Workout
            data={item}
            handleEditAction={() => handleEditWorkout(item)}
            handleDelAction={() => props.delWorkout(item)}
          />
        )}
      />
    </MyWorkoutsContainer>
  );
}

MyWorkoutsPage.navigationOptions = ({ navigation }) => {
  function btnAction() {
    navigation.navigate('EditWorkout');
  }

  function AddWorkoutButton({ onPress }) {
    return (
      <ButtonArea onPress={onPress} underlayColor="transparent">
        <ButtonImage source={require('../../assets/add.png')} />
      </ButtonArea>
    );
  }

  return {
    title: 'Meus Treinos',
    headerRight: () => <AddWorkoutButton onPress={btnAction} />,
    headerRightContainerStyle: {
      marginRight: 10,
    },
  };
};

function mapStateToProps(state) {
  return {
    name: state.userReducer.name,
    myWorkouts: state.userReducer.myWorkouts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    delWorkout: workout =>
      dispatch({ type: 'DEL_WORKOUT', payload: { workout } }),
  };
}

export const MyWorkouts = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyWorkoutsPage);
