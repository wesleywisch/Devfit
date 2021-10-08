/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import {
  BallonTriangle,
  BallonArea,
  BallonBigText,
  ButtonText,
  BallonTimer,
  Strong,
} from './styles';

import { DefaultButton } from '../DefaultButton';

export function HomeDayStatus({
  selectedMonth,
  selectedDay,
  setSelectedDay,
  dailyProgress,
  workoutDays,
  addProgress,
  delProgress,
  goToWorkout,
}) {
  const [timeLeft, setTimeLeft] = useState('');

  let today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  today.setMilliseconds(0);

  let thisDate = new Date(today.getFullYear(), selectedMonth, selectedDay);

  let thisYear = thisDate.getFullYear();
  let thisMonth = thisDate.getMonth() + 1;
  let thisDay = thisDate.getDate();
  thisMonth = thisMonth < 10 ? '0' + thisMonth : thisMonth;
  thisDay = thisDay < 10 ? '0' + thisDay : thisDay;
  let dateFormated = `${thisYear}-${thisMonth}-${thisDay}`;

  let dayOff = false;
  let isToday = false;
  let isFuture = false;
  let isDone = false;

  if (!workoutDays.includes(thisDate.getDay())) {
    dayOff = true;
  } else if (thisDate.getTime() > today.getTime()) {
    isFuture = true;
  } else {
    if (dailyProgress.includes(dateFormated)) {
      isDone = true;
    } else {
      isDone = false;
    }
  }

  if (thisDate.getTime() === today.getTime()) {
    isToday = true;
  }

  function setDone() {
    addProgress(dateFormated);
  }

  function setUnDone() {
    delProgress(dateFormated);
  }

  useEffect(() => {
    function timerFunction() {
      let now = Date.now();
      let endToday = new Date();
      endToday.setHours(23);
      endToday.setMinutes(59);
      endToday.setSeconds(59);
      endToday = endToday.getTime();
      let diff = endToday - now;

      let hora = Math.floor(diff / (1000 * 60 * 60));
      let minutos = Math.floor(diff / (1000 * 60) - hora * 60);
      let segundos = Math.floor(diff / 1000 - minutos * 60 - hora * 60 * 60);

      hora = hora < 10 ? '0' + hora : hora;
      minutos = minutos < 10 ? '0' + minutos : minutos;
      segundos = segundos < 10 ? '0' + segundos : segundos;

      setTimeLeft(`${hora}h ${minutos}m ${segundos}s`);
    }

    let timer = setInterval(timerFunction, 1000);
    timerFunction();

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <BallonTriangle />
      <BallonArea>
        {dayOff && <BallonBigText>Dia de descando!</BallonBigText>}
        {isFuture && <BallonBigText>Data no futuro</BallonBigText>}
        {!dayOff && !isFuture && isDone && (
          <>
            <BallonBigText>
              <Strong>Parabéns</Strong>, você treinou
            </BallonBigText>
            <DefaultButton
              onPress={setUnDone}
              bgColor="#4ac34e"
              underlayColor="#4ac34e"
              style={{ marginTop: 20 }}>
              <ButtonText>Desmarcar</ButtonText>
            </DefaultButton>
          </>
        )}
        {!dayOff && !isFuture && !isDone && !isToday && (
          <>
            <BallonBigText>
              <Strong>Fraco!</Strong> Você falhou neste dia.
            </BallonBigText>
            <DefaultButton
              onPress={setDone}
              bgColor="#4ac34e"
              underlayColor="#4ac34e"
              style={{ marginTop: 20 }}>
              <ButtonText>marcar como feito</ButtonText>
            </DefaultButton>
          </>
        )}
        {!dayOff && !isFuture && !isDone && isToday && (
          <>
            <BallonBigText>
              <Strong>Hoje você possui treino 🚀</Strong>
            </BallonBigText>
            <BallonTimer>Você tem {timeLeft} para treinar</BallonTimer>
            <DefaultButton
              onPress={goToWorkout}
              bgColor="#4ac34e"
              underlayColor="#4ac34e"
              style={{ marginTop: 20 }}>
              <ButtonText>Iniciar treino</ButtonText>
            </DefaultButton>
          </>
        )}
      </BallonArea>
    </>
  );
}
