import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  HomeContainer,
  Legend,
  LegendText,
  LegendItem,
  LegendBox,
  ConfigButtonArea,
  ConfigButtonImage,
} from './styles';

import { HomeMonthScroll } from '../../components/HomeMonthScroll';
import { HomeDaysScroll } from '../../components/HomeDaysScroll';
import { HomeDayStatus } from '../../components/HomeDayStatus';

function HomePage(props) {
  let today = new Date();

  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [selectedDay, setSelectedDay] = useState(today.getDate());

  let legends = [
    { name: 'Hoje', color: '#b5eeff' },
    { name: 'Treino feito', color: '#b5ffb8' },
    { name: 'Treino perdido', color: '#ffb5b5' },
    { name: 'dia de descanso', color: '#c5c5c5', opacity: 0.2 },
    { name: 'Dia futuro', color: '#ccc' },
  ];

  return (
    <HomeContainer>
      <HomeMonthScroll
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <HomeDaysScroll
        selectedMonth={selectedMonth}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        dailyProgress={props.dailyProgress}
        workoutDays={props.workoutDays}
      />
      <HomeDayStatus
        selectedMonth={selectedMonth}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        dailyProgress={props.dailyProgress}
        workoutDays={props.workoutDays}
        addProgress={props.addProgress}
        delProgress={props.delProgress}
        goToWorkout={() => props.navigation.navigate('WorkoutStack')}
      />

      <Legend>
        <LegendText>Legenda:</LegendText>
        {legends.map((item, key) => (
          <LegendItem key={key}>
            <LegendBox
              style={{ backgroundColor: item.color, opacity: item.opacity }}
            />
            <LegendText>{item.name}</LegendText>
          </LegendItem>
        ))}
      </Legend>
    </HomeContainer>
  );
}

HomePage.navigationOptions = ({ navigation }) => {
  function ConfigButton() {
    function handleBtnAction() {
      navigation.navigate('HomeConfig');
    }

    return (
      <ConfigButtonArea onPress={handleBtnAction} underlayColor="transparent">
        <ConfigButtonImage source={require('../../assets/config.png')} />
      </ConfigButtonArea>
    );
  }

  return {
    title: 'Seu progresso diário',
    headerRight: () => <ConfigButton />,
    headerRightContainerStyle: {
      marginRight: 10,
    },
  };
};

function mapStateToProps(state) {
  return {
    dailyProgress: state.userReducer.dailyProgress,
    workoutDays: state.userReducer.workoutDays,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addProgress: date => dispatch({ type: 'ADD_PROGRESS', payload: { date } }),
    delProgress: date => dispatch({ type: 'DEL_PROGRESS', payload: { date } }),
  };
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomePage);
