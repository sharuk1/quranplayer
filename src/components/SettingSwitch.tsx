import React from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';

interface Props {
  label: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
}

export default function SettingSwitch({label, value, onValueChange}: Props) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Switch value={value} onValueChange={onValueChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16},
  label: {fontSize: 16, color: '#111827'},
});
