import React from 'react';

import { DefaultButton } from '../../components/DefaultButton';

import {
  Container,
  WelcomeText,
  WelcomeImage,
  WelcomeLogo,
  BeginConfigArea,
  ButtonText,
} from './styles';

export function StarterIntro(props) {
  function handleStart() {
    props.navigation.navigate('StarterName');
  }

  return (
    <Container>
      <WelcomeText>Bem vindo(a) ao DevFit</WelcomeText>

      <WelcomeImage>
        <WelcomeLogo source={require('../../assets/boneco.png')} />
      </WelcomeImage>

      <BeginConfigArea>
        <DefaultButton
          width="85%"
          bgColor="#0072c0"
          underlayColor="#0b7ac6"
          onPress={handleStart}>
          <ButtonText>Inciar configuração</ButtonText>
        </DefaultButton>
      </BeginConfigArea>
    </Container>
  );
}

StarterIntro.navigationOptions = {
  headerShown: false,
};
