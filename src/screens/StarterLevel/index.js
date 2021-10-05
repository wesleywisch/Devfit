import React from 'react';
import { connect } from 'react-redux';

import {
  Container,
  HeaderText,
  NextButton,
  LevelArea,
  Text,
  BoldText,
} from './styles';

import { DefaultButton } from '../../components/DefaultButton';

function StarterLevelPage(props) {
  const days = [
    { name: 'Iniciante / Um frango', level: 'beginner' },
    { name: 'Intermediário / Me viro bem', level: 'intermediate' },
    { name: 'Avançado / Primo do The Rock', level: 'advanced' },
  ];

  function setMyLevel(level) {
    props.setLevel(level);
    props.navigation.setParams({ level });
  }

  let funnyPhrase = '';

  switch (props.workoutDays.length) {
    case 1:
      funnyPhrase = 'Só um dia não vai adiantar muito, mas...';
      break;

    case 2:
      funnyPhrase = '2 dias eu acho pouco, mas quem sou eu para te julgar?';
      break;

    case 3:
      funnyPhrase = 'Legal, 3 dias dá para o gasto...';
      break;

    case 4:
      funnyPhrase = 'Legal, 4 dias vai ser TOP!';
      break;

    case 5:
      funnyPhrase = 'É isso aí, 5 dias é o mínimo, lets GO!';
      break;

    case 6:
      funnyPhrase = 'É, 6 dias não é para todo mundo...';
      break;

    case 7:
      funnyPhrase = 'Wooow! Todo dia?! É isso ai vai ficar bombadão!';
      break;
  }

  return (
    <Container>
      <HeaderText>{funnyPhrase}</HeaderText>
      <HeaderText>
        <BoldText>Qual seu nível hoje?</BoldText>
      </HeaderText>

      <LevelArea>
        {days.map((item, key) => (
          <DefaultButton
            key={key}
            bgColor={props.level === item.level ? '#a5e8bc' : false}
            underlayColor="#ccc"
            style={{ marginBottom: 20 }}
            onPress={() => setMyLevel(item.level)}>
            <Text>{item.name}</Text>
          </DefaultButton>
        ))}
      </LevelArea>
    </Container>
  );
}

StarterLevelPage.navigationOptions = ({ navigation }) => {
  function handleNextAction() {
    if (!navigation.state.params || !navigation.state.params.level) {
      // eslint-disable-next-line no-alert
      alert('Você precisa escolher uma opção!');
      return;
    }

    navigation.navigate('StarterRecommendations');
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
    level: state.userReducer.level,
    workoutDays: state.userReducer.workoutDays,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setLevel: level => dispatch({ type: 'SET_LEVEL', payload: { level } }),
  };
}

export const StarterLevel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(StarterLevelPage);
