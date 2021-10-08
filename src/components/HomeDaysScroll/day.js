import React from 'react';
import styled from 'styled-components/native';

const DayButton = styled.TouchableHighlight`
  width: ${({ width }) => width};
  justify-content: center;
  align-items: center;
`;

const DayItem = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: #ccc;
  justify-content: center;
  align-items: center;
`;

const DayText = styled.Text``;

export function Day({ day, month, dailyProgress, workoutDays, onPress, dayW }) {
  let bgColor = '#ccc';
  let opacity = 1;

  let today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  today.setMilliseconds(0);

  let thisDate = new Date(today.getFullYear(), month, day);

  // verificação dos dias que treinou ou não treinou e dias futuros, e também os dias de descanso.
  if (workoutDays.includes(thisDate.getDay())) {
    if (thisDate.getTime() < today.getTime()) {
      let thisYear = thisDate.getFullYear();
      let thisMonth = thisDate.getMonth() + 1;
      let thisDay = thisDate.getDate();
      thisMonth = thisMonth < 10 ? '0' + thisMonth : thisMonth;
      thisDay = thisDay < 10 ? '0' + thisDay : thisDay;

      let dayFormated = `${thisYear}-${thisMonth}-${thisDay}`;

      if (dailyProgress.includes(dayFormated)) {
        bgColor = '#b5ffb8'; // treinou
      } else {
        bgColor = '#ffb5b5'; // não treinou
      }
    }
  } else {
    opacity = 0.2;
  }

  // dia de hoje
  if (thisDate.getTime() === today.getTime()) {
    bgColor = '#b5eeff';
    opacity = 1;
  }

  return (
    <DayButton
      width={`${dayW}px`}
      onPress={onPress}
      underlayColor="transparent">
      <DayItem style={{ opacity, backgroundColor: bgColor }}>
        <DayText>{day}</DayText>
      </DayItem>
    </DayButton>
  );
}
