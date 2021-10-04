import React from 'react';
import { connect } from 'react-redux';

import { Container, HeaderText, NameInput, NextButton } from './styles';

function StarterNamePage(props) {
  function handleNextAction() {
    if (!props.name) {
      // eslint-disable-next-line no-alert
      alert('Por favor preencher o campo!');
      return;
    }

    props.navigation.navigate('StarterDays');
  }

  function handleChangeName(t) {
    props.setName(t);
    props.navigation.setParams({ name: t });
  }

  return (
    <Container>
      <HeaderText>Qual é o seu nome?</HeaderText>
      <NameInput
        value={props.name}
        onChangeText={handleChangeName}
        autoFocus={true}
        autoCapitalize="words"
        onSubmitEditing={handleNextAction}
      />
    </Container>
  );
}

StarterNamePage.navigationOptions = ({ navigation }) => {
  function handleNextAction() {
    if (!navigation.state.params || !navigation.state.params.name) {
      // eslint-disable-next-line no-alert
      alert('Por favor preencher o campo!');
      return;
    }

    navigation.navigate('StarterDays');
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setName: name => dispatch({ type: 'SET_NAME', payload: { name } }),
  };
}

export const StarterName = connect(
  mapStateToProps,
  mapDispatchToProps,
)(StarterNamePage);
