import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootBottomTabNavigation from './BottomStackNavigation';
import Colors from '../theme/Colors';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.Kournikova}
      />
      <RootBottomTabNavigation />
    </NavigationContainer>
  );
};

export default RootNavigator;
