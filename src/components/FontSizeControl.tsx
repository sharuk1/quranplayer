import React from 'react';
import Slider from '@react-native-community/slider';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  value: number;
  onChange: (value: number) => void;
}

export default function FontSizeControl({value, onChange}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Font Size: {Math.round(value)}</Text>
      <Slider minimumValue={14} maximumValue={34} value={value} step={1} onValueChange={onChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginTop: 8},
  title: {fontSize: 16, color: '#111827', marginBottom: 8},
});
