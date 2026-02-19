import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

interface Props {
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export default function PlayerControls({isPlaying, onTogglePlay}: Props) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onTogglePlay}>
        <Text style={styles.buttonLabel}>{isPlaying ? 'Pause' : 'Play'}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {alignItems: 'center', marginTop: 24},
  button: {
    paddingHorizontal: 24,
    paddingVertical: 14,
    backgroundColor: '#0F766E',
    borderRadius: 24,
  },
  buttonLabel: {color: '#fff', fontSize: 18, fontWeight: '600'},
});
