import styled from 'styled-components/native';

export const HomeConfigContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  padding: 0 30px;
`;

export const Label = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const Input = styled.TextInput`
  border: 1px solid #ccc;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  padding: 10px;
  color: #000;
`;

export const ListArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const DayItem = styled.TouchableHighlight`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: #eee;
  justify-content: center;
  align-items: center;
`;

export const DayItemText = styled.Text``;

export const LevelItem = styled.TouchableHighlight`
  background-color: #eee;
  height: 30px;
  padding: 0 15px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const LevelItemText = styled.Text``;

export const ResetButton = styled.Button``;
