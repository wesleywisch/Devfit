import React from 'react';
import { connect } from 'react-redux';

import {
  Container,
  HeaderText,
  NextButton,
  BoldText,
  DaysArea,
  Text,
} from './styles';

import { DefaultButton } from '../../components/DefaultButton';

function StarterDaysPage(props) {
  const firstName = props.name.split(' ')[0];

  const days = [
    { name: 'Segunda', day: 1 },
    { name: 'Terça', day: 2 },
    { name: 'Quarta', day: 3 },
    { name: 'Quinta', day: 4 },
    { name: 'Sexta', day: 5 },
    { name: 'Sábado', day: 6 },
    { name: 'Domingo', day: 0 },
  ];

  function toggleDay(day) {
    let newWorkoutDays = [...props.workoutDays];

    if (!props.workoutDays.includes(day)) {
      newWorkoutDays.push(day);
    } else {
      newWorkoutDays = newWorkoutDays.filter(item => item !== day);
    }

    props.setWorkoutDays(newWorkoutDays);
    props.navigation.setParams({ workoutDays: newWorkoutDays });
  }

  return (
    <Container>
      <HeaderText>
        Opa, <BoldText>{firstName}</BoldText>, tudo bem?
      </HeaderText>
      <HeaderText>
        Quais <BoldText>dias da semana</BoldText> você pretende treinar?
      </HeaderText>

      <DaysArea>
        {days.map((item, key) => (
          <DefaultButton
            key={key}
            bgColor={props.workoutDays.includes(item.day) ? '#a5e8bc' : false}
            underlayColor="#ccc"
            width="110px"
            style={{ marginBottom: 20 }}
            onPress={() => toggleDay(item.day)}>
            <Text>{item.name}</Text>
          </DefaultButton>
        ))}
      </DaysArea>
    </Container>
  );
}

StarterDaysPage.navigationOptions = ({ navigation }) => {
  function handleNextAction() {
    if (
      !navigation.state.params ||
      !navigation.state.params.workoutDays.length
    ) {
      // eslint-disable-next-line no-alert
      alert('Por favor marque pelo menos um campo para treinar');
      return;
    }

    navigation.navigate('StarterLevel');
  }

  return {
    title: '',
    headerRight: () => (
      <NextButton title="Próximo" onPress={handleNextAction} />
    ),
    headerRightContainerStyle: {
      marginRight: 10,
    },
  };
};

function mapStateToProps(state) {
  return {
    name: state.userReducer.name,
    workoutDays: state.userReducer.workoutDays,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setName: name => dispatch({ type: 'SET_NAME', payload: { name } }),
    setWorkoutDays: workoutDays =>
      dispatch({ type: 'SET_WORKOUTDAYS', payload: { workoutDays } }),
  };
}

export const StarterDays = connect(
  mapStateToProps,
  mapDispatchToProps,
)(StarterDaysPage);
