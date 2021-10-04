import styled from 'styled-components/native';

export const DefaultButton = styled.TouchableHighlight`
  width: ${({ width }) => width || 'auto'};
  background-color: ${({ bgColor }) => bgColor || '#eee'};
  padding: 10px 20px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;
