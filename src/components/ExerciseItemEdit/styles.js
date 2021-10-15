import styled from 'styled-components/native';

export const ExerciseItemEditContainer = styled.TouchableHighlight`
  height: 50px;
  flex-direction: row;
  background-color: #fff;
  margin-bottom: 10px;
`;

export const ExerciseMuscleArea = styled.View`
  width: 50px;
  height: 50px;
  background-color: #ffcc98;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const ExerciseMuscleImage = styled.Image`
  width: 35px;
  height: 35px;
`;

export const ExerciseInfo = styled.View`
  flex-direction: column;
  justify-content: center;
  margin-left: 5px;
`;

export const ExerciseName = styled.Text`
  font-size: 15px;
  color: #000;
`;

export const ExerciseDetails = styled.Text`
  font-size: 12px;
  color: #999;
`;

export const ExerciseSwipe = styled.TouchableHighlight`
  height: 50px;
  background-color: #ff0000;
  justify-content: center;
`;

export const ExerciseSwipeIcon = styled.Image`
  width: 20px;
  height: 20px;
  margin-left: 15px;
`;
