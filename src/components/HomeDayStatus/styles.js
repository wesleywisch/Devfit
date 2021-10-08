import styled from 'styled-components/native';

export const BallonTriangle = styled.View`
  width: 0;
  height: 0;
  border-left-color: transparent;
  border-left-width: 15px;
  border-bottom-width: 15px;
  border-bottom-color: #ccc;
  border-right-width: 15px;
  border-right-color: transparent;
`;

export const BallonArea = styled.View`
  width: 90%;
  padding: 20px;
  background-color: #ccc;
  border-radius: 10px;
`;

export const BallonBigText = styled.Text`
  font-size: 15px;
  align-self: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const BallonTimer = styled.Text`
  align-self: center;
  margin-top: 10px;
`;

export const Strong = styled.Text`
  font-weight: bold;
`;
