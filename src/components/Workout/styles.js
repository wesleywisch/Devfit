import styled from 'styled-components/native';

export const WorkoutContainer = styled.View`
  background-color: #f1f1f1;
  flex-direction: row;
  border-radius: 10px;
  margin-bottom: 20px;
  border: 2px solid #ddd;
`;

export const WorkoutInfo = styled.View`
  flex: 1;
`;

export const WorkoutTitle = styled.Text`
  font-size: 17px;
  margin: 10px;
`;

export const MuscleScroll = styled.ScrollView`
  margin: 10px;
`;

export const WorkoutActions = styled.View`
  justify-content: center;
`;

export const WorkoutButton = styled.TouchableHighlight`
  width: 25px;
  height: 25px;
  margin: 20px;
  justify-content: center;
  align-items: center;
`;

export const WorkoutButtonImage = styled.Image`
  width: 25px;
  height: 25px;
`;

export const MuscleGroup = styled.View`
  width: 40px;
  height: 40px;
  background-color: #ffcc98;
  border-radius: 5px;
  margin-right: 5px;
  justify-content: center;
  align-items: center;
`;

export const MuscleImage = styled.Image`
  width: 30px;
  height: 30px;
`;
