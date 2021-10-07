import React from 'react';
import {
  TabBarArea,
  TabBarItem,
  TabRegular,
  TabImage,
  Text,
  TabBall,
  TabBallImage,
} from './styles';

export function CustomTabBar(props) {
  return (
    <TabBarArea>
      {props.itens.map(item => (
        <TabBarItem key={item.route}>
          {item.type === 'regular' && (
            <TabRegular
              underlayColor="transparent"
              onPress={() => props.navigation.navigate(item.route)}>
              <>
                <TabImage source={item.icon} />
                <Text>{item.text}</Text>
              </>
            </TabRegular>
          )}
          {item.type === 'big' && (
            <TabBall
              underlayColor="#00ff00"
              onPress={() => props.navigation.navigate(item.route)}>
              <TabBallImage source={item.icon} />
            </TabBall>
          )}
        </TabBarItem>
      ))}
    </TabBarArea>
  );
}
