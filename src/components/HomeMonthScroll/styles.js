import styled from 'styled-components/native';

export const MonthScroll = styled.ScrollView`
  width: 100%;
  height: 60px;
`;

export const MonthButton = styled.TouchableHighlight`
  width: ${({ width }) => width};
  justify-content: center;
  align-items: center;
`;

export const MonthItem = styled.View`
  width: 90%;
  height: 30px;
  background-color: #ccc;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

export const MonthText = styled.Text``;
