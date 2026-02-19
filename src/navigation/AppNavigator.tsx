import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';
import PlayerScreen from '../screens/PlayerScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SurahListScreen from '../screens/SurahListScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SurahList" component={SurahListScreen} options={{title: 'Alif Quran'}} />
      <Stack.Screen name="Player" component={PlayerScreen} options={{title: 'Player'}} />
      <Stack.Screen name="Settings" component={SettingsScreen} options={{title: 'Settings'}} />
    </Stack.Navigator>
  );
}
