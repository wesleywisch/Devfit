import React, { useState, useEffect, useRef } from 'react';
import { Dimensions } from 'react-native';

import { MonthScroll, MonthButton, MonthItem, MonthText } from './styles';

export function HomeMonthScroll(props) {
  const monthRef = useRef();

  const [selectedMonth, setSelectedMonth] = useState(props.selectedMonth);

  const screenWidth = Math.round(Dimensions.get('window').width);
  let thirdW = screenWidth / 3;

  let months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  function handleScrollEnd(event) {
    let posX = event.nativeEvent.contentOffset.x;
    let targetMonth = Math.round(posX / thirdW);
    setSelectedMonth(targetMonth);
  }

  function scrollToMonth(mes) {
    let posX = mes * thirdW;
    monthRef.current.scrollTo({ x: posX, Y: 0, animated: true });
  }

  useEffect(() => {
    props.setSelectedMonth(selectedMonth);
  }, [selectedMonth]);

  useEffect(() => {
    setTimeout(() => {
      scrollToMonth(selectedMonth);
    }, 10);
  }, [props.selectedMonth]);

  return (
    <MonthScroll
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      ref={monthRef}
      decelerationRate="fast"
      snapToInterval={thirdW}
      contentContainerStyle={{ paddingLeft: thirdW, paddingRight: thirdW }}
      onMomentumScrollEnd={handleScrollEnd}>
      {months.map((mes, key) => (
        <MonthButton
          key={key}
          width={`${thirdW}px`}
          onPress={() => setSelectedMonth(key)}
          underlayColor="transparent">
          <MonthItem
            style={
              key === selectedMonth
                ? { backgroundColor: '#A1A1A1', width: '100%', height: 40 }
                : {}
            }>
            <MonthText>{mes}</MonthText>
          </MonthItem>
        </MonthButton>
      ))}
    </MonthScroll>
  );
}
