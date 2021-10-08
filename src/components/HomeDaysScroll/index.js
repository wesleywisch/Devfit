import React, { useState, useEffect, useRef } from 'react';
import { Dimensions } from 'react-native';

import { DaysScroll } from './styles';

import { Day } from './day';

export function HomeDaysScroll(props) {
  const DayRef = useRef();

  const [selectedDay, setSelectedDay] = useState(props.selectedDay);

  const screenWidth = Math.round(Dimensions.get('window').width);
  let dayW = Math.round(screenWidth / 9);
  let offsetW = Math.round((screenWidth - dayW) / 2);

  function handleScrollEnd(event) {
    let posX = event.nativeEvent.contentOffset.x;
    let targetDay = Math.round(posX / dayW) + 1;
    setSelectedDay(targetDay);
  }

  function scrollToDay(day) {
    let posX = (day - 1) * dayW;
    DayRef.current.scrollTo({ x: posX, y: 0, animated: true });
    setSelectedDay(day);
  }

  useEffect(() => {
    props.setSelectedDay(selectedDay);
  }, [selectedDay]);

  useEffect(() => {
    setTimeout(() => {
      if (props.selectedMonth === new Date().getMonth()) {
        scrollToDay(new Date().getDate());
      } else {
        scrollToDay(1);
      }
    }, 10);
  }, [props.selectedMonth]);

  let days = [];
  let daysInMonth = new Date(
    new Date().getFullYear(),
    props.selectedMonth + 1,
    0,
  ).getDate();
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return (
    <DaysScroll
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      ref={DayRef}
      decelerationRate="fast"
      snapToInterval={dayW}
      contentContainerStyle={{ paddingLeft: offsetW, paddingRight: offsetW }}
      onMomentumScrollEnd={handleScrollEnd}>
      {days.map((day, key) => (
        <Day
          key={key}
          day={day}
          month={props.selectedMonth}
          dailyProgress={props.dailyProgress}
          workoutDays={props.workoutDays}
          onPress={() => scrollToDay(day)}
          dayW={dayW}
        />
      ))}
    </DaysScroll>
  );
}
