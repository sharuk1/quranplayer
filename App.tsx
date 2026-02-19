import React from 'react';
import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppNavigator from './src/navigation/AppNavigator';
import {SettingsProvider, useSettings} from './src/context/SettingsContext';

function RootNavigation() {
  const {settings} = useSettings();
  return (
    <NavigationContainer theme={settings.darkMode ? DarkTheme : DefaultTheme}>
      <StatusBar barStyle={settings.darkMode ? 'light-content' : 'dark-content'} />
      <AppNavigator />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SettingsProvider>
        <RootNavigation />
      </SettingsProvider>
    </GestureHandlerRootView>
  );
}
