import React from 'react';
import { connect } from 'react-redux';

import { EditWorkoutContainer } from './styles';

function EditWorkoutPage(props) {
  return <EditWorkoutContainer />;
}

EditWorkoutPage.navigationOptions = ({ navigation }) => {
  return {
    title: 'Editar Treino',
  };
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export const EditWorkout = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditWorkoutPage);
