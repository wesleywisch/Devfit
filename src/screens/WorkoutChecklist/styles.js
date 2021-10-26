import styled from 'styled-components/native';

export const WorkoutChecklistContainer = styled.ImageBackground`
  flex: 1;
  align-items: center;
  background-color: #000;
`;

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  background-color: rgba(1, 59, 14, 0.9);
`;

export const WorkoutHeader = styled.View`
  flex-direction: row;
  width: 90%;
  align-items: center;
  height: 70px;
`;

export const WorkoutTitle = styled.Text`
  flex: 1;
  color: #fff;
  font-size: 20px;
`;

export const WorkoutClose = styled.TouchableHighlight`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const WorkoutCloseText = styled.Text`
  font-size: 22px;
  color: #fff;
  font-weight: bold;
`;

export const WorkoutList = styled.FlatList`
  width: 90%;
  flex: 1;
`;
