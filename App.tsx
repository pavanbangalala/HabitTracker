import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RootNavigator from './src/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Colors from './src/theme/Colors';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.black_white}
      />
      <RootNavigator />
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
