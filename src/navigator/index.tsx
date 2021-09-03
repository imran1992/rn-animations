import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';
//-----
import Intro from '../screens/intro';
import PanGestHandler from '../screens/PanGestureHandler';
//-----
enableScreens(true);
const {Screen, Navigator} = createStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <StacK />
    </NavigationContainer>
  );
};
const StacK = () => {
  const navigation = useNavigation();
  return (
    <Navigator screenOptions={{headerMode: 'screen'}}>
      <Screen
        name="Intro"
        component={Intro}
        options={{
          headerMode: 'screen',
          headerRight: () => {
            return (
              <Text onPress={() => navigation.navigate('PanGestHandler')}>
                PanGestureHanderler
              </Text>
            );
          },
        }}
      />
      <Screen
        name="PanGestHandler"
        component={PanGestHandler}
        options={{
          headerMode: 'screen',
          headerRight: () => {
            return <Text onPress={() => {}}>XXX</Text>;
          },
        }}
      />
    </Navigator>
  );
};
export default AppContainer;
