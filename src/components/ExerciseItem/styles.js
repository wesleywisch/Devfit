import styled from 'styled-components/native';

export const ExerciseItemContainer = styled.View`
  height: 50px;
  flex-direction: row;
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
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin-left: 5px;
`;

export const ExerciseName = styled.Text`
  font-size: 15px;
  color: #fff;
`;

export const ExerciseDetails = styled.Text`
  font-size: 12px;
  color: #999;
`;

export const ExerciseCheck = styled.TouchableHighlight`
  width: 60px;
  justify-content: center;
  align-items: center;
`;

export const ExerciseDone = styled.Image`
  width: 40px;
  height: 40px;
`;

export const ExerciseUnDone = styled.View`
  width: 40px;
  height: 40px;
  border: 5px solid #fff;
  border-radius: 20px;
`;

export const ExerciseCount = styled.View`
  width: 25px;
  justify-content: center;
`;

export const ExerciseCountText = styled.Text`
  font-size: 17px;
  color: #fff;
`;
