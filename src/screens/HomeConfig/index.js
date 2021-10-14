/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
import React from 'react';
import { connect } from 'react-redux';

import {
  HomeConfigContainer,
  Label,
  Input,
  ListArea,
  DayItem,
  DayItemText,
  LevelItem,
  LevelItemText,
} from './styles';

function HomeConfigPage(props) {
  const days = [
    { day: 1, name: 'S' },
    { day: 2, name: 'T' },
    { day: 3, name: 'Q' },
    { day: 4, name: 'Q' },
    { day: 5, name: 'S' },
    { day: 6, name: 'S' },
    { day: 0, name: 'D' },
  ];

  const level = [
    { level: 'beginner', name: 'Iniciante' },
    { level: 'intermediate', name: 'Intermediário' },
    { level: 'advanced', name: 'Avançado' },
  ];

  function toggleWorkoutDay(day) {
    let newWorkoutDays = [...props.workoutDays];

    if (newWorkoutDays.includes(day)) {
      if (newWorkoutDays.length === 1) {
        alert('Calma ae! Você tem que treinar pelo menos 1 dia');
        return;
      }
      newWorkoutDays = newWorkoutDays.filter(i => i !== day);
    } else {
      newWorkoutDays.push(day);
    }

    props.setWorkoutDays(newWorkoutDays);
  }

  return (
    <HomeConfigContainer>
      <Label>Seu nome completo:</Label>
      <Input value={props.name} onChangeText={t => props.setName(t)} />

      <Label>Dias em que você treina:</Label>
      <ListArea>
        {days.map((item, key) => (
          <DayItem
            key={key}
            underlayColor="transparent"
            onPress={() => toggleWorkoutDay(item.day)}
            style={
              props.workoutDays.includes(item.day)
                ? { backgroundColor: '#a5e8bc' }
                : {}
            }>
            <DayItemText>{item.name}</DayItemText>
          </DayItem>
        ))}
      </ListArea>

      <Label>Seu nivel:</Label>
      <ListArea>
        {level.map((item, key) => (
          <LevelItem
            key={key}
            underlayColor="transparent"
            onPress={() => props.setLevel(item.level)}
            style={
              item.level === props.level ? { backgroundColor: '#a5e8bc' } : {}
            }>
            <LevelItemText>{item.name}</LevelItemText>
          </LevelItem>
        ))}
      </ListArea>
    </HomeConfigContainer>
  );
}

HomeConfigPage.navigationOptions = ({ navigation }) => {
  return {
    title: 'Configurações',
  };
};

function mapStateToProps(state) {
  return {
    name: state.userReducer.name,
    workoutDays: state.userReducer.workoutDays,
    level: state.userReducer.level,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setName: name => dispatch({ type: 'SET_NAME', payload: { name } }),
    setWorkoutDays: workoutDays =>
      dispatch({ type: 'SET_WORKOUTDAYS', payload: { workoutDays } }),
    setLevel: level => dispatch({ type: 'SET_LEVEL', payload: { level } }),
  };
}

export const HomeConfig = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeConfigPage);
